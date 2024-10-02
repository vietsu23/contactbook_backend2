import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  env: {
    node: true,
    commonjs: true,
    es2021: true, 
  },
  extends: ['eslint:recommended', 'prettier'],
});

