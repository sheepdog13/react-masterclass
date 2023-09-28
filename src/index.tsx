import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* themeprovider로 감싸서 app에서 theme을 접근할 수 있게된다 */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);

reportWebVitals();
