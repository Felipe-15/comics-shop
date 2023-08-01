import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
      </BrowserRouter>
    ),
  ],
};

export default preview;
