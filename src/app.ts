import express from "express";
import cors from "cors";
import { router } from "./routes/routes";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import helmet from "helmet";

export const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API",
      version: "1.0.0",
      description: "This is the API documentation for the Express application",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

router.use("/docs", swaggerUi.serve);

router.get("/docs", swaggerUi.setup(swaggerSpec));

app.use("/api", router);
