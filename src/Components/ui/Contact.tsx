import { Copy} from "lucide-react";
import { RainbowButtonCustom } from "./RainbowButton";
import { toast } from "sonner";

export function Contact() {
  const email = "xprobal52@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied")
  };

  return (
    <section className="p-4 w-full pt-0 md:pl-0 md:pt-0 rounded-lg flex flex-col gap-4">
      <h2 className="font-bold text-[15px] md:text-xl heading-font text-neutral-900 dark:text-neutral-100">
        Contact
      </h2>
      <p className="inter-font text-[13px] sm:text-[16px] text-neutral-600 dark:text-neutral-400">
        Always open to discussing new projects, creative ideas, or opportunities. <span className="">Feel free</span> to reach out!
      </p>
      <div className="flex flex-col sm:flex-row gap-7 mt-2">

        <RainbowButtonCustom/>
        
        <button
          onClick={handleCopy}
          className="group cursor-pointer flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          <Copy className="w-4 h-4" />
          <span className="">{email}</span>
        </button>
      </div>
    </section>
  );
}