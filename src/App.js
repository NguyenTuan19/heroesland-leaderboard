import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import HeroesLandPage from "./pages/HeroesLandPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroesLandPage />
    </QueryClientProvider>
  );
}

export default App;
