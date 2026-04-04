import { CryptixPage } from "../features/landing/page/CryptixPage";
import { SmoothScrollProvider } from "./providers/SmoothScrollProvider";

export default function App() {
  return (
    <SmoothScrollProvider>
      <CryptixPage />
    </SmoothScrollProvider>
  );
}
