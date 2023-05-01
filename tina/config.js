import { defineConfig } from "tinacms";
import { home } from "./custom_schemas/home/home";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "974796ea-3ed8-414f-8134-ba3e39e60757", // Get this from tina.io
  token: "b1548417d0a83f0f430d9872eda9be827a43dc01", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets/images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      home
    ],
  },
});
