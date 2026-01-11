import ReactDOM from "react-dom/client";
import App from "@/app/App.jsx";
import "@/app/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </RecoilRoot>
);
