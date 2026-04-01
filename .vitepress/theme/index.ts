import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import HomeDashboard from "./components/HomeDashboard.vue";
import "./custom.css";

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("HomeDashboard", HomeDashboard);
  }
};

export default theme;
