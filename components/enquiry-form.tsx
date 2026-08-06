"use client";

import { useState } from "react";
import { getEmailUrl, getWhatsAppUrl } from "@/lib/contact";

/**
 * The enquiry form composes the visitor's answers into a pre-filled WhatsApp
 * message and hands off to WhatsApp to actually send it.
 *
 * This is a deliberate choice over a server-side form. There is no backend and
 * no mail provider on this project, so a traditional form would mean a new
 * service, an API key to leak, and a spam surface to defend. More importantly,
 * WhatsApp is how business is conducted in Zimbabwe — the visitor lands in the
 * thread where the conversation will actually happen, and both sides keep a
 * copy. Nothing is transmitted anywhere until the visitor presses send.
 *
 * The email button below composes the same message as a mailto for anyone who
 * would rather not use WhatsApp.
 */

const BUDGETS = [
  "Under $150",
  "$150 – $400",
  "$400 – $800",
  "$800+",
  "Not sure yet",
];

const PROJECT_TYPES = [
  "New business website",
  "Online store",
  "Portfolio or personal site",
  "Redesign of an existing site",
  "SEO for an existing site",
  "Website maintenance",
  "Something else",
];

const field =
  "w-full rounded-xl border border-ink-line bg-ink px-4 py-3.5 text-base text-paper placeholder:text-ash/60 transition-colors focus:border-acid focus:outline-none";
const label = "eyebrow block text-ash";

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [details, setDetails] = useState("");

  const message = [
    "Hi Solz Designs! I'd like to enquire about a project.",
    "",
    `Name: ${name || "—"}`,
    `Business: ${business || "—"}`,
    `Project: ${type}`,
    `Budget: ${budget}`,
    "",
    "Details:",
    details || "—",
  ].join("\n");

  const ready = name.trim().length > 0;

  return (
    <form
      className="rounded-card border border-ink-line bg-ink-soft p-6 sm:p-8"
      // Nothing is submitted to a server — the buttons below are the actions.
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-5">
        <div>
          <label className={label} htmlFor="enq-name">
            Your name
          </label>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tendai Moyo"
            className={`${field} mt-2.5`}
          />
        </div>

        <div>
          <label className={label} htmlFor="enq-business">
            Business name
          </label>
          <input
            id="enq-business"
            name="business"
            type="text"
            autoComplete="organization"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Moyo Hardware"
            className={`${field} mt-2.5`}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="enq-type">
              What do you need?
            </label>
            <select
              id="enq-type"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={`${field} mt-2.5 cursor-pointer`}
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={label} htmlFor="enq-budget">
              Rough budget
            </label>
            <select
              id="enq-budget"
              name="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className={`${field} mt-2.5 cursor-pointer`}
            >
              {BUDGETS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="enq-details">
            Tell us about the project
          </label>
          <textarea
            id="enq-details"
            name="details"
            rows={5}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="What does your business do, and what do you need the website to achieve?"
            className={`${field} mt-2.5 resize-y`}
          />
        </div>
      </div>

      <div className="mt-7 space-y-3">
        <a
          href={ready ? getWhatsAppUrl(message) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!ready}
          className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-pill font-display text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
            ready
              ? "cursor-pointer bg-acid text-ink hover:bg-paper"
              : "pointer-events-none bg-ink-line text-ash"
          }`}
        >
          Send on WhatsApp
        </a>

        <a
          href={
            ready
              ? getEmailUrl("Project enquiry — Solz Designs", message)
              : undefined
          }
          aria-disabled={!ready}
          className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-pill border font-display text-sm font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
            ready
              ? "cursor-pointer border-ink-line text-paper hover:border-acid hover:text-acid"
              : "pointer-events-none border-ink-line/50 text-ash/50"
          }`}
        >
          Send by email instead
        </a>

        <p
          className="text-center text-xs text-ash"
          // Announced when the name field is filled in, so the reason a
          // disabled button became active is not purely visual.
          role="status"
        >
          {ready
            ? "Opens WhatsApp with your details filled in. Nothing sends until you press send there."
            : "Add your name to continue."}
        </p>
      </div>
    </form>
  );
}
