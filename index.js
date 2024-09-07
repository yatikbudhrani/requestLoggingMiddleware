import express from "express";
import morgan from "morgan";
import winston from "winston";

const app = express();
const port = process.env.PORT || 3000;

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`
    )
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

const requestLogger = (req, res, next) => {
  const logDetails = `${req.method} ${req.url} - IP: ${req.ip}`;
  logger.info(logDetails);
  next();
};

app.use(requestLogger);

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.get("/", (req, res) => {
  logger.info("Root Route opened.");
  res.status(200).json({ success: true, message: "Request Successful!" });
});

app.get("/xyz", (req, res) => {
  logger.info("GET route /xyz opened.");
  res.status(200).json({ success: true, message: "GET route /xyz opened." });
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
  console.log(`Server is running on port ${port}`);
});
