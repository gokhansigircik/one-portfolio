import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setStatus("Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }
      setStatus("Thanks! I will get back to you shortly.");
      form.reset();
    } catch (err) {
      setStatus("Network error. Please try later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl">
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Feel free to reach out for opportunities, collaboration, or just to say hi.
      </p>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          required
          className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          required
          className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-gray-700"
        />
        <textarea
          name="message"
          placeholder="Your message"
          aria-label="Your message"
          rows={6}
          required
          className="w-full rounded-md border border-gray-300 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-gray-700"
        />
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white shadow-md outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-60"
            aria-label="Submit contact form"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <a
            href="mailto:gokhansigircik@gmail.com"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 dark:text-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            aria-label="Send an email"
          >
            Email Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 dark:text-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
            aria-label="Open resume PDF"
          >
            View Resume
          </a>
        </div>
        {status ? (
          <p className="text-sm text-gray-600 dark:text-gray-300">{status}</p>
        ) : null}
      </form>
    </div>
  );
};

export default Contact;
