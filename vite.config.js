import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // 모든 .js 파일을 JSX로 처리
    loader: "jsx",
    include: /src\/.*\.js$/, // src 폴더 내의 모든 .js 파일에 적용
    exclude: [], // 제외할 폴더나 파일을 추가 가능
  },
});
