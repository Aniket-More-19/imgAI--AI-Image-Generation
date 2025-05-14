import { surpriseMePrompts } from "../utils/suprisePrompts";

export function useSurpriseMePrompt() {
  const surprise =
    surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];

  return surprise;
}
