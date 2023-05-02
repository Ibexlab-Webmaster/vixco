import { defineConfig } from "tinacms";
import { home } from "./custom_schemas/home/home";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "1f10c3f5-7d19-45d0-b0b5-0188e21eba81", // Get this from tina.io
  token: "fa1800258ac55cbd64d03c95e97c27e1fdbff309", // Get this from tina.io

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
