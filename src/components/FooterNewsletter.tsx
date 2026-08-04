"use client";

import { FormEvent, useState } from "react";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEmail("");
  }

  return (
    <form
      className="mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:items-end lg:ml-auto lg:max-w-lg"
      onSubmit={handleSubmit}
    >
      <div className="min-w-0 flex-1">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
          required
          suppressHydrationWarning
          className="w-full border-0 border-b border-foreground/80 bg-transparent py-2.5 text-base text-foreground outline-none placeholder:text-foreground/50 focus:border-foreground"
        />
      </div>
      <button
        type="submit"
        suppressHydrationWarning
        className="inline-flex h-10 shrink-0 items-center rounded-full bg-foreground px-6 text-xs font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-85"
      >
        Submit
      </button>
    </form>
  );
}
