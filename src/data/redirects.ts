/**
 * Legacy HashRouter routes (camerongordon.io/#/foo) → new static paths.
 * Consumed by HashRedirect on the client; static export has no server redirects.
 */
export const hashRedirects: Record<string, string> = {
  "/raytheon": "/experience/raytheon/",
  "/redwire": "/experience/redwire/",
  "/tesla": "/experience/tesla/",
  "/libertydefense": "/experience/liberty-defense/",
  "/fresenius": "/experience/fresenius/",
  "/iridiumiotembeddeddevice": "/projects/iridium-iot/",
  "/smarthand": "/projects/smart-hand/",
  "/tcb": "/projects/telemetry-communication-board/",
  "/dashboard": "/projects/ev-dashboard/",
  "/charger": "/projects/ev-charger/",
  "/ner": "/extracurriculars/ner/",
};
