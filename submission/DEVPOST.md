# CrowdQuest

A Twitch audience quiz where every viewer gets one vote.

DRAFT — not submitted. Event: https://twitchcon-codex.devpost.com/

## Inspiration

Shared audience games need a reliable link between a chat message and the game state. Counting retries or repeated votes would make the result misleading.

## What it does

Creates timed questions, accepts the first valid !vote A–D command per viewer, displays the totals in a browser overlay and reveals the answer only after the round closes.

## How it was built

Twitch EventSub webhooks are verified against their raw body, signature and timestamp. PostgreSQL handles delivery receipts and first-vote deduplication atomically. Next.js supplies the host controls and overlay; viewer identifiers are HMAC-hashed.

## Challenges

Webhook retries and simultaneous votes must not inflate totals. Challenge verification, delivery deduplication, first-vote behavior and hidden answers are tested against PostgreSQL semantics.

## What is verified

The standalone production build and ten tests pass. Real Twitch authorization, an enabled subscription and an actual chat vote have not yet been observed.

## Technical lessons

A simulated event establishes code behavior but cannot stand in for a real Twitch delivery. The final demonstration must show the genuine integration.

## Next steps

Complete Twitch OAuth, enable the webhook subscription, record a real vote updating the overlay and include the genuine Codex session identifier in the event submission.

## Judging requirements

A focused Twitch-native audience experience with visible Codex-assisted engineering. Requires a real Codex session ID, source and a video under three minutes.

## Demo sequence

1. Show the genuine Codex session and describe the game.
2. Start a round and open the overlay.
3. Vote from real Twitch chat and observe the update.
4. Show that a second vote does not increment the total, then reveal the answer.

## Authorship

Prepared with ChatGPT/Codex assistance. Shared Next.js/workspace infrastructure originates in code-up-matrix/axios-fx-compliance-agent; the product module was developed on 27 October 2026. Shared code must be disclosed under the event’s reuse rules.

## Outstanding artifacts

Repository: https://github.com/code-up-matrix/crowdquest-devpost-2026. The deployed demo URL, required video, private judge access and entrant declarations must be completed from real outputs. No success receipt is claimed.
