import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import DayJs from "dayjs";
import DayJsPluginAdvancedFormat from "dayjs/plugin/advancedFormat";

DayJs.extend(DayJsPluginAdvancedFormat);

export { DayJs };

export const TimeFormat = {
    TimestampTz: "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
    Date: "YYYY-MM-DD",
    OrdinalDateShort: "Do MMM YYYY",
    OrdinalDateFullMonth: "Do MMMM",
} as const;

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function pluralSuffixIfNeeded(count: number, suffix = "s") {
    return count === 1 ? "" : suffix;
}
