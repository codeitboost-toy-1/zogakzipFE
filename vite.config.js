import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // 프로젝트의 루트 디렉토리 설정
  plugins: [react()],
  server: {
    port: 3000, // 여기에서 포트를 3000번으로 설정
    host: true, // 추가된 부분: 호스트 옵션 활성화
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[tj]sx?$/, // .jsx와 .tsx 파일을 모두 포함
    exclude: [],
  },
});
