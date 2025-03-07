import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ),
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Next.jsでは不要
      "@typescript-eslint/explicit-module-boundary-types": "off", // TSの型推論に任せる
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // 未使用の変数に警告
      "jsx-a11y/anchor-is-valid": "off" // Next.jsのLinkでは不要
    }
  }
];

export default eslintConfig;