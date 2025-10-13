import { Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const email = "xprobal52@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section className="p-4 pt-0 rounded-lg flex flex-col gap-4">
      <h2 className="font-bold text-2xl heading-font text-neutral-900 dark:text-neutral-100">
        Contact
      </h2>
      <p className="inter-font text-neutral-600 dark:text-neutral-400">
        Always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-2">
        {/* Mailto Link */}
        <a
          href={`mailto:${email}`}
          className="group flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-neutral-800 text-white hover:bg-neutral-950 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span>Send Email</span>
        </a>
        
        {/* Copy to Clipboard Button */}
        <button
          onClick={handleCopy}
          className="group flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span>{copied ? 'Copied!' : email}</span>
        </button>
      </div>
    </section>
  );
}