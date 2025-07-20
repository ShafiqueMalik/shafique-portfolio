import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "4xipj1g3", // find in sanity.json or studio.sanity.io/manage
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-05-15",
});
