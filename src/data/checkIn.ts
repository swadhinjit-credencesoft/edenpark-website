// ==========================================================================
// Self check-in — the three-step process.
// ==========================================================================

export interface CheckInStep {
  num: string;
  name: string;
  copy: string;
}

export const STEPS: CheckInStep[] = [
  {
    num: "1",
    name: "Receive your code",
    copy: "On the morning of your arrival we send a secure check-in email and SMS to the contact details on your reservation, containing your code and room allocation.",
  },
  {
    num: "2",
    name: "Park with ease",
    copy: "Drive straight into the main entrance at 36 Sandringham Road and park in any designated guest space. No permits or dashboard tickets required.",
  },
  {
    num: "3",
    name: "Collect your key",
    copy: "Use your code to open the key box and collect your room key. This is a self-service motel — there are no card-based door locks. Please return the key to the same box when you leave.",
  },
];
