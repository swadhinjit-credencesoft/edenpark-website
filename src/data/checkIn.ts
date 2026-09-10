import type { CheckInStep } from "@/types/checkIn";

export type { CheckInStep } from "@/types/checkIn";

export const STEPS: CheckInStep[] = [
  {
    num: "1",
    name: "Receive your access code",
    copy: "On the morning of your arrival, check your email or SMS for your secure digital key box code and room allocation.",
  },
  {
    num: "2",
    name: "Park on site",
    copy: "Pull into our dedicated on-site parking area at 36 Sandringham Road. Every booking includes complimentary vehicle parking.",
  },
  {
    num: "3",
    name: "Collect your key & enter",
    copy: "Locate the digital key box by the main entrance, enter your 4-digit PIN, retrieve your room key and make yourself at home.",
  },
];
