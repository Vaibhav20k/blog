# Quartz Blog Content Blueprint & Swap Guide

This document maps all the content, pages, metadata, and components currently present in the blog. Use this as your master reference and fill-in-the-blank template to swap in your personal information, articles, and links.

---

## 1. Directory & Content File Inventory

| File Path                                                                                                                                                                                     | Title / Identifier                     | Current Content Summary                                                   | How to Replace                                         |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------- | :------------------------------------------------------------------------ | :----------------------------------------------------- |
| [`content/index.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/index.md)                                                                                                 | **Homepage / Root**                    | Animated terminal ticker, bio, featured posts, focus areas, social links. | Replace with your bio, title, ticker stats, and links. |
| [`content/blog/01_why_i_rebuilt_my_hft_engine.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/01_why_i_rebuilt_my_hft_engine.md)                                     | Why I Rebuilt My HFT Matching Engine   | High-performance C++ matching engine teardown.                            | Replace file or swap text with your project deep dive. |
| [`content/blog/02_smart_pointers_complete_guide.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/02_smart_pointers_complete_guide.md)                                 | Smart Pointers in C++                  | C++ memory management and RAII guide.                                     | Replace file or swap with a programming tutorial.      |
| [`content/blog/04_communeos_we_built_an_ai_community_os_and_won.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/04_communeos_we_built_an_ai_community_os_and_won.md) | CommuneOS: We Built an AI Community OS | Hackathon winner case study and architecture.                             | Replace with your hackathon/project breakdown.         |
| [`content/blog/04_gitrade_futures_market_in_a_repo.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/04_gitrade_futures_market_in_a_repo.md)                           | Gitrade: Futures Market in a Repo      | Live exchange inside a README.                                            | Replace with a technical system design note.           |
| [`content/blog/05_the_518_token_bug.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/05_the_518_token_bug.md)                                                         | The 518-Token Bug                      | LLM reasoning cut-off debugging story.                                    | Replace with an AI/ML debugging or analysis note.      |
| [`content/blog/06_nvidia_killed_the_draft_model.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/06_nvidia_killed_the_draft_model.md)                                 | NVIDIA Killed the Draft Model          | Speculative decoding performance analysis.                                | Replace with an ML/hardware or latency study.          |
| [`content/blog/07_gpt56_three_tiers_three_answers.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/07_gpt56_three_tiers_three_answers.md)                             | GPT-5.6: Three Tiers, Three Answers    | LLM benchmarking and evaluation.                                          | Replace with a model benchmark or LLM article.         |
| [`content/blog/08_gpt56_closed_a_30_year_math_gap.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/08_gpt56_closed_a_30_year_math_gap.md)                             | GPT-5.6 Closed a 30-Year Math Gap      | AI theorem proving and research.                                          | Replace with a research or math breakdown.             |
| [`content/blog/the-average-latency-lie.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/blog/the-average-latency-lie.md)                                                   | The Average Latency Lie                | LLM p99 latency benchmarking vs averages.                                 | Replace with an API performance or engineering note.   |
| [`quartz.config.ts`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/quartz.config.ts)                                                                                                 | **Global Site Configuration**          | `pageTitle`, typography, dark/light mode palette.                         | Update `pageTitle: "Your Name — Blog Name"`.           |
| [`quartz.layout.ts`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/quartz.layout.ts)                                                                                                 | **Layout & Footer Configuration**      | Left/Right sidebar components, footer links.                              | Update GitHub, LinkedIn, and Portfolio links.          |

---

## 2. Homepage Replacement Template (`content/index.md`)

Copy the block below directly into [`content/index.md`](file:///C:/Users/vkpal/OneDrive/Desktop/Projects/blogs/content/index.md) and replace the bracketed placeholders `{{ ... }}` with your actual details:

```markdown
---
title: { { YOUR_BLOG_TITLE_e.g._Cave_or_Chimera } }
description: { { SHORT_META_DESCRIPTION_OF_YOUR_WORK } }
tags: [About, { { YOUR_PRIMARY_TAGS_e.g._AI, _ML, _Systems } }]
---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 96" width="100%" font-family="ui-monospace, 'JetBrains Mono', Menlo, Consolas, monospace" role="img" aria-label="Ticker">
  <defs>
    <clipPath id="chimera-tape"><rect x="1" y="56" width="758" height="39"/></clipPath>
    <clipPath id="chimera-type"><rect x="0" y="14" width="0" height="30"><animate attributeName="width" from="0" to="760" begin="0.3s" dur="1.2s" fill="freeze"/></rect></clipPath>
  </defs>
  <rect x="0.5" y="0.5" width="759" height="95" rx="10" fill="#0b0f0d" stroke="#FF6B35" stroke-opacity="0.28"/>
  <text x="20" y="36" font-size="15" clip-path="url(#chimera-type)">
    <tspan fill="#FF6B35">{{ USERNAME }}@{{ HOSTNAME }}:~$</tspan>
    <tspan fill="#FFF5F0"> cat /etc/motd</tspan>
  </text>
  <rect x="330" y="23" width="9" height="16" fill="#FF6B35" opacity="0">
    <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.01;0.5;0.51;1" dur="1.1s" begin="1.6s" repeatCount="indefinite"/>
  </rect>
  <line x1="0" y1="56" x2="760" y2="56" stroke="#FF6B35" stroke-opacity="0.18"/>
  <g clip-path="url(#chimera-tape)">
    <text y="80" font-size="12" fill="#FF8555">
      <animateTransform attributeName="transform" type="translate" from="760 0" to="-1500 0" dur="24s" repeatCount="indefinite"/>
      {{ METRIC_1_e.g._AI-PIPELINE_▲_10k_TPS }}&#160;&#160;·&#160;&#160;{{ METRIC_2_e.g._NASA-SPACE-APPS_▲_Top_5 }}&#160;&#160;·&#160;&#160;{{ METRIC_3_e.g._LLM-RAG_▲_p99_80ms }}&#160;&#160;·&#160;&#160;{{ METRIC_4 }}
    </text>
  </g>
</svg>

Hey. I'm **{{ YOUR_NAME }}**, a {{ YOUR_ROLE_e.g._AI_Engineer_and_Full_Stack_Developer }}. {{ ONE_SENTENCE_ABOUT_WHAT_YOU_BUILD }}. You can learn more about me through my [portfolio](/) (psst: press `` ` `` there).

{{ PARAGRAPH_ABOUT_YOUR_SPECIALIZATIONS_AND_STACK }}.

## Posts

- [[blog/{{ SLUG_1 }}|{{ ARTICLE_1_TITLE }}]] #{{ TAG1 }} #{{ TAG2 }}
- [[blog/{{ SLUG_2 }}|{{ ARTICLE_2_TITLE }}]] #{{ TAG1 }} #{{ TAG2 }}
- [[blog/{{ SLUG_3 }}|{{ ARTICLE_3_TITLE }}]] #{{ TAG1 }} #{{ TAG2 }}

## What You'll Find Here

Mostly things I'm building, measuring, or trying to understand at the systems level.

- **{{ DOMAIN_1_e.g._AI_&_ML_Systems }}** - {{ DOMAIN_1_SUMMARY }}. #{{ TAG }}
- **{{ DOMAIN_2_e.g._Distributed_Backend }}** - {{ DOMAIN_2_SUMMARY }}. #{{ TAG }}
- **{{ DOMAIN_3_e.g._Production_DevOps }}** - {{ DOMAIN_3_SUMMARY }}. #{{ TAG }}
- **{{ DOMAIN_4_e.g._Systems_Projects }}** - {{ DOMAIN_4_SUMMARY }}. #{{ TAG }}

## Connect With Me

[GitHub]({{ YOUR_GITHUB_URL }}) · [LinkedIn]({{ YOUR_LINKEDIN_URL }}) · [X]({{ YOUR_TWITTER_URL }}) · {{ YOUR_EMAIL }}

<sub>{{ FOOTNOTE_e.g._systems_metrics_live_·_documented_openly }}</sub>
```

---

## 3. Article Markdown Template

Every article in `content/blog/<slug>.md` should follow this standard structure:

````markdown
---
title: "{{ ARTICLE_HEADLINE }}"
description: "{{ 1_TO_2_SENTENCE_EXCERPT }}"
date: 2026-08-16
tags:
  - { { Tag1 } }
  - { { Tag2 } }
  - { { Tag3 } }
---

> [!abstract] Overview
> {{ A_SHORT_CALLOUT_SUMMARIZING_THE_PROBLEM_AND_RESULT }}

## The Core Problem

{{ Explain the technical challenge or context. You can use standard code blocks: }}

```python
def process_pipeline(events: list[Event]) -> Result:
    # High-throughput processing
    return compute_anomalies(events)
```
````

## Architecture & Implementation

{{ System diagrams, math formulas, or implementation details. }}

### Key Findings & Benchmarks

| Metric          | Baseline    | Optimized    | Gain      |
| :-------------- | :---------- | :----------- | :-------- |
| **p99 Latency** | 240ms       | 18ms         | **13.3x** |
| **Throughput**  | 1,200 req/s | 14,800 req/s | **12.3x** |

## Takeaways & Next Steps

1. {{ Key lesson 1 }}
2. {{ Key lesson 2 }}

---

_Related notes: [[blog/{{ ANOTHER_ARTICLE_SLUG }}|{{ RELATED_TITLE }}]]_

````

---

## 4. Site Configuration Variables (`quartz.config.ts` & `quartz.layout.ts`)

### `quartz.config.ts`:
* **Line 11:** `pageTitle: "Vaibhav Kandpal — Cave"` (Changes the brand title in the top-left sidebar)
* **Lines 57-67 (Colors):**
  * `secondary: "#FF6B35"` (Primary orange accent)
  * `tertiary: "#FF8555"` (Hover / secondary orange accent)

### `quartz.layout.ts`:
* **Lines 9-15 (Footer Links):**
```typescript
footer: Component.Footer({
  links: {
    GitHub: "https://github.com/Vaibhav20k",
    LinkedIn: "https://linkedin.com/in/vaibhav-kandpal",
    Portfolio: "/",
  },
})
````

---

## 5. How to Compile Changes into the Portfolio

Whenever you update or add files in `content/`:

1. Open your terminal in `Projects/blogs`:
   ```bash
   npx quartz build --baseDir blog -o "C:/Users/vkpal/OneDrive/Desktop/backup/portfolio/Repolens-portfolio-/public/blog"
   ```
2. Your changes will instantly be live at `http://localhost:3000/blog/` with graph nodes and search indexes automatically regenerated.
