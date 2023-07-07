import { resolve } from "path";
import autoprefixer from "autoprefixer";
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import * as dotenv from "dotenv";

const result = dotenv.config();
if (result.error) throw result.error;

function createDate() {
  const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    date = now.getDate();
  return `${year}${month}${date}`;
}
const DATE = createDate();

const config = {
  root: "src",
  dist: "dist",
  public: "public",
};

export default defineConfig(({ mode }) => {
  console.log("🚀 ~", mode);
  return {
    base: "./",
    root: config.root,
    css: {
      postcss: {
        plugins: [autoprefixer({ grid: true })],
      },
    },
    publicDir: resolve(__dirname, config.public),
    esbuild: {
      drop: ["console", "debugger"],
    },
    build: {
      outDir: resolve(__dirname, config.dist),
      emptyOutDir: true,
      chunkSizeWarningLimit: 100000000,
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/app.[hash].${DATE}.js`,
          assetFileNames: (assetInfo) => {
            console.log(assetInfo);
            if (assetInfo.name === "index.css") {
              return `assets/css/app.[hash].${DATE}.css`;
            }
            return `assets/[name].[hash].${DATE}.[ext]`;
          },
          chunkFileNames: `assets/[name].[hash].${DATE}.js`,
        },
      },
    },
    plugins: [glsl()],
    server: {
      open: process.env.SITE_DEVE_URL,
      port: process.env.PORT,
      host: true,
    },
    preview: {
      open: process.env.SITE_DEVE_URL,
      port: process.env.PORT,
      host: true,
    },
  };
});
