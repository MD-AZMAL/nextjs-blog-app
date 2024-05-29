import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Heebo } from "next/font/google";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function debounce<T>(func: (args: T) => any, wait: number = 0) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, args: T) {
    const context = this;
    clearTimeout(timer ?? undefined);

    timer = setTimeout(function () {
      timer = null;
      func.call(context, args);
    }, wait);
  };
}

export const heebo = Heebo({ subsets: ["latin"] });
