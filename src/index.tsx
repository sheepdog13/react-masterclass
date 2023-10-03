import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    {/* themeprovider로 감싸서 app에서 theme을 접근할 수 있게된다 */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </>
);

reportWebVitals();
