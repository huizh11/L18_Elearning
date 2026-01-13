// App.js
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import ModuleDetails from "./ModuleDetails";
import FAQ from "./FAQ";
import { FavouritesProvider } from "./FavouritesContext";

function App() {
  return (
    <FavouritesProvider>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home title="School of Infocomm Course Portal" />} />
          <Route path="about" element={<About />} />

          <Route path="diplomas" element={<Diplomas />}>
            <Route index element={<h3>Select a diploma from above</h3>} />

            <Route path=":diplomaId" element={<Diploma />}>
              <Route path=":moduleId" element={<ModuleDetails />} />
            </Route>
          </Route>

          <Route path="register" element={<Register />} />
          <Route path="confirmed" element={<Confirmation />} />

          <Route path="faq" element={<FAQ />} />

          <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
        </Routes>

        <footer className="container">
          &copy;2026 | School of Infocomm
        </footer>
      </div>
    </FavouritesProvider>
  );
}

export default App;
