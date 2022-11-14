import express, {
  urlencoded,
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cors from "cors";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
dotenv.config();

const app = express();
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(express.json());

connectDB();
app.get("/", (req, res) => res.send("API Running"));
app.use(
  "/lms/docs",
  swaggerUi.serve,
  async (_req: ExRequest, res: ExResponse) => {
    return res.send(
      swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
  }
);

app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN?.split("|").map((origin) => {
      return new RegExp(`${origin?.trim()}$`);
    }),
  })
);
RegisterRoutes(app);
app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
  next();
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
