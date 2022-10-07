/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MY_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
