import express, { Router } from "express";


const restEndpoint: Router = express.Router();
// define routes
restEndpoint.get("/", (_req, res) => {
    res.send({ message: "Rest Endpoint Initialized!" });
})

export { restEndpoint }