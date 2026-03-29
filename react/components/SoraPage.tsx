"use client";

import { Starfield } from "./Starfield";
import { FadeUp } from "./FadeUp";
import { PromptBar } from "./PromptBar";
import { Waveform } from "./Waveform";
import { MediaGrid, MediaCard } from "./MediaGrid";
import { SoraNav, SoraNavLink } from "./SoraNav";
import styles from "./SoraPage.module.css";

/**
 * Full Sora-style dark mode landing page.
 * Drop this into any Next.js/React app:
 *
 *   import { SoraPage } from "@/components/nerve/SoraPage";
 *   export default function Page() { return <SoraPage />; }
 */
export function SoraPage() {
  return (
    <div className={styles.root}>
      <Starfield count={200} />

      <SoraNav brand="Anova">
        <SoraNavLink active>Overview</SoraNavLink>
        <SoraNavLink>Features</SoraNavLink>
        <SoraNavLink cta href="#">
          Login
        </SoraNavLink>
      </SoraNav>

      <div className={styles.content}>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <FadeUp>
            <div className={styles.heroIcon}>
              <svg
                viewBox="0 0 120 120"
                fill="none"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                width={44}
                height={44}
              >
                <path d="M 60 16 C 52 36, 52 44, 60 60 C 68 44, 68 36, 60 16" />
                <path d="M 104 60 C 84 52, 76 52, 60 60 C 76 68, 84 68, 104 60" />
                <path d="M 60 104 C 68 84, 68 76, 60 60 C 52 76, 52 84, 60 104" />
                <path d="M 16 60 C 36 68, 44 68, 60 60 C 44 52, 36 52, 16 60" />
                <circle cx={60} cy={60} r={4} fill="white" stroke="none" />
              </svg>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <h1 className={styles.heroTitle}>AnovaGrowth</h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className={styles.heroSub}>
              AI-powered systems that automate your growth. From leads to
              revenue, on autopilot.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <a href="#" className={styles.heroCta}>
              See how it works
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                width={16}
                height={16}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </FadeUp>
        </section>

        {/* ===== FROM LEADS TO REVENUE ===== */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <div>
                <FadeUp>
                  <h2 className={styles.sectionTitle}>From leads to revenue</h2>
                </FadeUp>
                <FadeUp delay={100}>
                  <p className={styles.sectionBody}>
                    Start with a goal or upload your workflow to build automated
                    systems with real results: outreach, nurturing, booking, and
                    closing.
                  </p>
                </FadeUp>
                <FadeUp delay={200}>
                  <div className={styles.featurePills}>
                    {["Lead gen", "Automation", "CRM sync", "AI agents"].map(
                      (t) => (
                        <span key={t} className={styles.featurePill}>
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </FadeUp>
              </div>
              <FadeUp delay={150}>
                <div>
                  <MediaGrid columns="2x2">
                    <MediaCard />
                    <MediaCard tall />
                    <MediaCard />
                  </MediaGrid>
                  <PromptBar placeholder="Build me a lead pipeline for SaaS founders" />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ===== YOUR AGENTS ===== */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.splitReverse}>
              <FadeUp delay={100}>
                <div>
                  <div className={styles.carouselWrap}>
                    <div className={styles.carousel}>
                      {[
                        "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2",
                        "M13 2L3 14h9l-1 8 10-12h-9l1-8",
                        "M22 12h-4l-3 9L9 3l-3 9H2",
                        "M12 6v6l4 2",
                      ].map((d, i) => (
                        <div key={i} className={styles.carouselItem}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            width={40}
                            height={40}
                            style={{ color: "rgba(255,255,255,0.1)" }}
                          >
                            <path d={d} />
                            {i === 0 && <circle cx={9} cy={7} r={4} />}
                            {i === 3 && <circle cx={12} cy={12} r={10} />}
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <PromptBar placeholder="Create an outreach agent for LinkedIn" />
                </div>
              </FadeUp>
              <div>
                <FadeUp>
                  <h2 className={styles.sectionTitle}>
                    Your agents, your rules
                  </h2>
                </FadeUp>
                <FadeUp delay={100}>
                  <p className={styles.sectionBody}>
                    Deploy AI agents that work 24/7. You control the persona,
                    the workflow, and the triggers. They handle the rest.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ===== REMIX ===== */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.split}>
              <div>
                <FadeUp>
                  <h2 className={styles.sectionTitle}>Remix everything</h2>
                </FadeUp>
                <FadeUp delay={100}>
                  <p className={styles.sectionBody}>
                    Take an existing workflow and make it yours. Swap triggers,
                    change the messaging, add new steps, or extend across
                    channels.
                  </p>
                </FadeUp>
              </div>
              <FadeUp delay={150}>
                <div>
                  <MediaGrid columns="single">
                    <MediaCard style={{ height: 280 }}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        width={36}
                        height={36}
                        style={{ color: "rgba(255,255,255,0.15)" }}
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </MediaCard>
                  </MediaGrid>
                  <PromptBar placeholder="Adapt this funnel for e-commerce brands" />
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ===== CUE THE INSIGHTS ===== */}
        <section className={styles.section}>
          <div className={styles.wrap}>
            <FadeUp>
              <h2
                className={styles.sectionTitle}
                style={{ marginBottom: 8 }}
              >
                Cue the insights
              </h2>
            </FadeUp>
            <FadeUp delay={100}>
              <p
                className={styles.sectionBody}
                style={{ maxWidth: 480, marginBottom: 40 }}
              >
                Real-time analytics, pipeline health, and revenue tracking are
                automatically included in every system we build.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className={styles.soundGrid}>
                {[
                  "Pipeline velocity",
                  "Lead response time",
                  "Revenue closed",
                  "Agent uptime",
                  "Conversion rate",
                ].map((label) => (
                  <div key={label} className={styles.soundCard}>
                    <Waveform bars={20} />
                    <span className={styles.soundLabel}>{label}</span>
                    <span className={styles.soundPlay}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                        width={18}
                        height={18}
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      Live
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <div className={styles.wrap}>
            NERVE Design System v3 — Sora-style dark mode
          </div>
        </footer>
      </div>
    </div>
  );
}
