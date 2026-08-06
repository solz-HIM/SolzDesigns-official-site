# Launch & SEO playbook

Everything to do after the redesign goes live, in order. The site is already
verified in Google Search Console, which makes this simpler than a fresh setup.

**Baseline to beat** (Search Console, 3 months to 6 Aug 2026):
3 clicks · 208 impressions · 1.5% CTR · average position 76.

---

## Before you deploy

- [ ] **Check the branch preview, not just localhost.** Push `redesign/v2` and
      let Vercel build a preview URL. Click every page on a real phone.
- [ ] **Confirm the two case studies are OK to publish.** Sunnies by Mel and
      Effort Wafawarova are named on `/work` with screenshots. Get a yes from
      both before this goes public.
- [ ] **Set up a branded email.** `mcgyver8605@gmail.com` is on every page and
      in the structured data. `hello@solzdesigns.co.zw` costs nothing through
      Zoho's free tier and materially changes how the site reads. Once it
      exists, change one line: `email` in `lib/site.ts`.
- [ ] **Sanity-check the prices** in `lib/site.ts` and `app/pricing/page.tsx`.
      They are now published, quotable, and read by AI assistants — treat them
      as a commitment.

## Deploying

`main` is untouched. To go live:

```bash
git checkout redesign/v2
git push -u origin redesign/v2      # Vercel builds a preview
# review the preview URL, then:
git checkout main
git merge redesign/v2
git push                            # this is what goes live
```

Nothing is committed yet — do that once you're happy with the review.

---

## Day 1, immediately after deploy

1. **Resubmit the sitemap.** Search Console → Sitemaps → enter `sitemap.xml`.
   It now lists 20 URLs instead of 6.
2. **Request indexing for the priority pages.** Search Console → URL
   Inspection → paste URL → Request Indexing. Do these six, in this order:
   - `/web-design-bulawayo` — brand new, 28 impressions of unserved demand
   - `/web-design-victoria-falls` — brand new, 13 impressions
   - `/pricing` — brand new, highest commercial intent
   - `/` — retargeted at "web design Zimbabwe"
   - `/web-development-zimbabwe` — rewritten, your best-performing URL
   - `/services`
   You get roughly 10 manual requests a day. Do the rest over the following days.
3. **Test the structured data.** Paste the homepage and `/web-design-bulawayo`
   into the [Rich Results Test](https://search.google.com/test/rich-results).
   You should see Breadcrumb, FAQ, LocalBusiness and Service detected.
4. **Check the social preview.** Paste the homepage into the
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   and hit Scrape Again. The old site had a broken preview image; this should
   now show the lime card.
5. **Run PageSpeed Insights** on the live homepage and record the numbers so
   you have a real before/after.

## Week 1

6. **Create a Google Business Profile.** This is the single highest-impact
   action on this entire list, and nothing on the website substitutes for it.
   - Choose **"I deliver goods and services to my customers"** and hide the
     address — you're a service-area business, not a storefront.
   - Primary category: **Website Designer**. Not "Marketing Agency", not
     "Internet Marketing Service" — the wrong category is the most common
     reason a listing never ranks.
   - Service areas: Harare, Bulawayo, Victoria Falls, Mutare, Gweru, Kwekwe,
     Masvingo, Chitungwiza — matching `SERVICE_AREAS` in `lib/site.ts` exactly.
   - Add the logo, the two project screenshots, your services and hours.
   - Once it's verified, send me the profile URL — it needs to go into the
     `sameAs` array and a `hasMap` field in `lib/schema.ts`.
7. **Ask Mel and Effort for a Google review**, the day the profile is live.
   Two real reviews beats any amount of on-page copy for "best web designer in
   Zimbabwe" type queries, and you currently have zero.
8. **Set up Bing Webmaster Tools** and submit the sitemap there too. It's ten
   minutes and it feeds Bing Copilot's answers.

## Weeks 2–4

9. **Get listed in the directories that currently outrank you.** For "web
   developers in Zimbabwe" and "web design companies in Zimbabwe", the top
   results are aggregators, not agencies — you cannot out-write them, so join
   them: **Sortlist, TechBehemoths, Clutch, GoodFirms, DesignRush**. Free tier
   is fine. Also **Behance** and **Dribbble** with the two case studies.
10. **Create a LinkedIn company page.** It's where the B2B buyers the Bulawayo
    page targets actually check whether you're real.
11. **Fix the NAP on your social profiles.** Facebook, Instagram and TikTok
    must show the same business name and phone number as the site. Mismatches
    are a common reason a local listing underperforms.

## Month 2 onwards

12. **Start a blog.** The site currently has no article layer, and the
    competitors ranking for cost queries all run dated guides. Two or three
    genuinely useful pieces beats twenty thin ones:
    - "What a website should cost in Zimbabwe (2026)"
    - "WordPress or custom-built: which is right for a Zimbabwean business"
    - "How to brief a web designer so the project doesn't overrun"
13. **Consider a fourth city page** only when Search Console shows a city
    crossing roughly 15–20 impressions. Mutare and Gweru are the likely next
    candidates. Do not build them speculatively — templated city pages with no
    demand behind them are treated as doorway spam.
14. **Ask every client for a review at handover.** Build it into the Launch
    step of the process. Review flow matters more than review count.

---

## What to measure, and when

Don't judge this in week one. Indexing alone takes 1–4 weeks.

| When | What should be happening |
|---|---|
| Week 1–2 | New pages appear in Search Console → Pages → Indexed |
| Week 2–4 | Impressions rise sharply (more pages = more surface area). Clicks probably don't move yet. |
| Month 2 | Average position starts falling from 76 toward the 30s–40s |
| Month 3 | First clicks on Bulawayo / Victoria Falls terms; GBP starts producing calls |
| Month 6 | Page-one positions on lower-competition local terms |

**The honest expectation:** the technical and content gap has been closed, and
that was the part I could fix in code. What remains is authority — a new domain
with no backlinks, no reviews and no directory presence. Steps 6, 7, 9 and 10
are what close that, and none of them happen in the codebase. If you only do
two things on this list, do the Google Business Profile and the two reviews.

---

## Things I deliberately did not do

- **No invented testimonials, client counts or result metrics.** You had none
  to cite, and fabricated proof is both a trust risk and, in structured data, a
  policy risk.
- **No price for SEO optimisation.** Scope varies too much to publish one
  figure honestly, so it reads "Quoted per project" and emits no price in the
  structured data.
- **No competitor price comparisons.** An earlier draft claimed Harare agencies
  charge $800–$2,500. That was unsourced and checkable — several local
  competitors publish prices close to yours — so it's gone.
- **No city pages beyond the three with measured demand.**
