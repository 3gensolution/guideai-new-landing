"use client";

import Script from "next/script";
import { useState } from "react";

export function GuideAiSdk() {
  const [sdkReady, setSdkReady] = useState(false);

  const siteId = process.env["NEXT_PUBLIC_GUIDEAI_SITE_ID"];
  const token = process.env["NEXT_PUBLIC_GUIDEAI_TOKEN"];
  const cdn =
    process.env["NEXT_PUBLIC_GUIDEAI_CDN_URL"] ?? "https://cdn.3guideai.com";

  // No credentials configured (a fresh clone, or a preview env) — render
  // nothing rather than firing requests that will be rejected.
  if (!siteId || !token) return null;

  return (
    <>
      <Script
        src={`${cdn}/sdk/guideai.js`}
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
        data-site-id={siteId}
        data-token={token}
        data-api-url={cdn}
        data-cdn-url={cdn}
        data-disable-routes=""
        data-track-all="true"
        data-behavioral-triggers="true"
        data-bubble-enabled="true"
        data-widget-mode="assistant"
        data-bubble-label="Talk to Leo"
        data-bubble-icon="spark"
        data-bubble-position="bottom-right"
        data-bubble-mode="drift"
        data-bubble-drift-enabled="true"
        data-bubble-drift-spring="0.0003"
        data-bubble-drift-damping="0.993"
        data-bubble-drift-min-interval="18000"
        data-bubble-drift-max-interval="26000"
        data-bubble-crawl-speed="40"
        data-bubble-crawl-climb-walls="true"
        data-bubble-crawl-corner-pause-ms="1500"
        data-bubble-crawl-persistent-speech="true"
        data-bubble-crawl-messages="Need help? Click me!|I can guide you around.|Try asking me anything!"
        data-bubble-crawl-message-interval-ms="8000"
        data-chat-guidance-title="I’ll walk you through it"
        data-chat-guidance-text="Ask how to do something and I’ll show you, step by step, right here on the page."
        data-chat-assistant-title="Try me"
        data-chat-assistant-text="Try me out and see what I am capable of"
        data-chat-suggestions="How can this help my business|"
        data-voice-languages="en-NG"
        data-voice-wake-name="Leo"
        data-guides-enabled="true"
        data-auto-advance-on-target-click="true"
        data-chip-dismiss-seconds="300"
        data-help-hints="false"
        data-help-hints-cache-ttl-ms="86400000"
        data-announcement-surface="modal"
        data-announcement-display-mode="auto"
        data-announcement-frequency="once"
        data-announcement-close-on-backdrop="true"
        data-announcement-auto-show-delay-ms="500"
        data-feedback-auto-prompt="false"
        data-feedback-prompt-delay-ms="300000"
        data-feedback-prompt-min-pageviews="10"
        data-idle-timeout="20000"
        data-session-timeout-ms="1800000"
        data-batch-size="50"
        data-batch-interval-ms="30000"
        data-geolocation="off"
        data-recording="false"
        data-extension-mode="false"
        data-theme-primary="#6E70E7"
        data-theme-background="#FFFFFF"
        data-theme-text="#172033"
        data-theme-font="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        data-bubble-background="#EEF0FF"
        data-bubble-background-hover="#EEF0FF"
        data-bubble-text-color="#5153C7"
        data-bubble-border="#6E70E74D"
        data-bubble-border-hover="#6E70E780"
        data-bubble-shadow="0 8px 24px rgba(15, 23, 42, 0.16)"
        data-bubble-shadow-hover="0 12px 32px rgba(15, 23, 42, 0.22)"
        data-bubble-focus-ring="0 0 0 3px #6E70E755"
      />

      {/* Only after the SDK itself is live. */}
      {sdkReady && (
        <Script
          src={`${cdn}/sdk/guideai-tracking.js`}
          strategy="afterInteractive"
          data-site-id={siteId}
          data-token={token}
          data-api-url={cdn}
          data-cdn-url={cdn}
          data-recording="false"
        />
      )}
    </>
  );
}
