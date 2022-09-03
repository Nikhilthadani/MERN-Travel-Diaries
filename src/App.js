import { Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Diaries from "./diaries/Diaries";
import Header from "./header/Header";
import Home from "./home/Home";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
