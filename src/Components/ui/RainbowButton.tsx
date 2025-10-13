import { RainbowButton } from "../magicui/rainbow-button";
import { Mail } from "lucide-react";

export function RainbowButtonCustom() {
  const email = "xprobal52@gmail.com";

  return (
    <RainbowButton
      onClick={() => (window.location.href = `mailto:${email}`)}
      className="flex items-center gap-2"
    >
      <Mail className="w-4 h-4" />
      <span>Mail</span>
    </RainbowButton>
  );
}
