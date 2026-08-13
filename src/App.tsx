import { Layout } from "./Layout";
import { AppRouter } from "./routes/routes";

function App() {
  return (
    <div className="flex flex-col">
      <Layout>
        <AppRouter />
      </Layout>
    </div>
  );
}

export default App;
