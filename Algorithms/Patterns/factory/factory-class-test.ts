import { LoggerFactory } from "./factory-class";

const logger = LoggerFactory.createLogger();

logger.debug("Debug message");
logger.warn("warn message");
logger.error("error message");
logger.info("info message");
