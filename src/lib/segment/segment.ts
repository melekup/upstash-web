"use client";

import { Analytics, AnalyticsBrowser } from "@segment/analytics-next";

export type EventName =
  | "button.pricing.redis"
  | "button.pricing.kafka"
  | "button.pricing.qstash"
  | "button.create.redis"
  | "button.create.kafka"
  | "button.create.qstash"
  | "button.examples.redis"
  | "button.examples.kafka"
  | "button.examples.qstash"
  | "button.docs.redis"
  | "button.docs.kafka"
  | "button.docs.qstash"
  | "button.pricing"
  | "button.fast-anywhere.refresh";

export class Segment {
  private analytics: Analytics | null = null;

  async load(writeKey: string): Promise<void> {
    if (this.analytics || typeof window === "undefined") {
      return;
    }
    const [analytics] = await AnalyticsBrowser.load({ writeKey });
    this.analytics = analytics;
  }

  public async track(eventName: EventName) {
    await this.analytics?.track(eventName);
  }
}
