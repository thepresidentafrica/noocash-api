import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const env = process.env;
const app = express();
// Initialse base router
const router = express.Router();
// Set initial route
router.get("/", (_req, res) => {
    res.send({ message: "Hello, World!" });
});
// Set v1/api endpoint
app.use("/v1/api", router);
// configure cors
app.use(cors({ origin: env.ALLOWED_ORIGINS?.split(",") }));
// enable json serialization
app.use(json());
// start server
app.listen(env.PORT ? +env.PORT : 9000, () => {
    console.log(`Server started on  http://localhost:${env.PORT}/v1/api`);
})