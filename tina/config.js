import { defineConfig } from "tinacms";
import { home } from "./custom_schemas/home/home";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c6978ca6-91f9-461a-925e-876a5f878ed6", // Get this from tina.io
  token: "d09c0a1fb8918376eb5c302d62b86cfbf6d4bf1e", // Get this from tina.io

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
