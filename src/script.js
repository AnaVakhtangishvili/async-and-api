import { isFriday, isMonday, isWednesday } from "date-fns";
import { log } from "./logger.js";
import { currentDate } from "./utils.js";

log("my love");
currentDate();

console.log("is friday? - ", isFriday(new Date()));
console.log("is monday? - ", isMonday(new Date()));
console.log("is wednesday? - ", isWednesday(new Date()));
