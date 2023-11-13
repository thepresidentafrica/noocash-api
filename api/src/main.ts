import express, { json } from "express";
import cors from "cors";
import { restEndpoint, server } from './endpoints';

import dotenv from "dotenv";
import { expressMiddleware } from "@apollo/server/express4";
dotenv.config();

(async () => {
    const env = process.env;
    const app = express();
    // Initialse base router
    const router = express.Router();
    // Set initial route
    router.get("/", (_req, res) => {
        res.send({ message: "Hello, World!" });
    });
    // Disable powered by header 
    app.disable('x-powered-by');

    // Set v1/api endpoint
    app.use("/v1/rest", restEndpoint);
    // configure cors
    app.use(cors({ origin: env.ALLOWED_ORIGINS?.split(",") }));
    // enable json serialization
    app.use(json());
    // start apollo server
    await server.start()
    app.use('/v1/graphql', expressMiddleware(server));
    app.listen(env.PORT ? +env.PORT : 9000, () => {
        console.log({
            restAPI: `http://localhost:${env.PORT}/v1/rest`,
            graphqlAPI: `http://localhost:${env.PORT}/v1/graphql`,
        });
    })
})()