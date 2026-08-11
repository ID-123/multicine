import { Layout } from "./Layout";
import { ScreenMode, Show } from "./modules/counter";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="flex flex-col">
      <Layout>
        <HomePage />
        <ScreenMode />
        <Show />
      </Layout>
    </div>
  );
}

export default App;
