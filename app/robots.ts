import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

/**
 * A bare `allow: /` already permits every crawler, so listing the AI agents
 * individually changes nothing technically. It is here as an explicit,
 * auditable statement of intent: this site *wants* to be read and cited by
 * assistants, and if a future edit ever starts blocking things, the omission
 * will be obvious in the diff rather than silent.
 *
 * Worth knowing about two of these:
 *
 * - `Google-Extended` governs whether content may be used to ground Gemini and
 *   Vertex AI. It has no effect on Google Search ranking whatsoever. Blocking
 *   it is a common accident that costs AI visibility and gains nothing.
 * - `OAI-SearchBot` is what fetches pages for ChatGPT's search results. It is
 *   distinct from `GPTBot`, which is for model training. Sites that block
 *   GPTBot to protect their content often block search citations by mistake.
 */

const AI_AGENTS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Google — Gemini / Vertex grounding, separate from Search
  "Google-Extended",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Microsoft / Bing Copilot
  "bingbot",
  // Apple Intelligence
  "Applebot",
  "Applebot-Extended",
  // Others that feed assistant answers
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "cohere-ai",
  "CCBot",
  // ByteDance — powers TikTok/Doubao AI answers. Relevant here because the
  // studio already has a TikTok audience.
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next's own build artefacts carry no meaning for a crawler.
        disallow: ["/_next/static/chunks/", "/api/"],
      },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
