import { RainbowButton } from "../magicui/rainbow-button";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export function RainbowButtonCustom() {
  const email = "xprobal52@gmail.com";

  const handleClick = ()=>{
    toast.error("Redirecting");
    setTimeout(() => {
      window.location.href = `mailto:${email}`
    }, 2000);
  }

  return (
    <RainbowButton
      onClick={() => handleClick()}
      className="flex items-center gap-2"
    >
      <Mail className="w-4 h-4" />
      <span >Mail</span>
    </RainbowButton>
  );
}
