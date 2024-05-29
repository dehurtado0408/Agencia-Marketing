import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Cases from "containers/pages/Cases";
import Services from "containers/pages/Services";
import About from "containers/pages/About";
import Carrers from "containers/pages/Carrers";
import Blog from "containers/pages/Blog";
import Contact from "containers/pages/Contact";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path="*" element={<Error404 />}></Route>
          {/* Home display */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/casos" element={<Cases />}>Cases</Route>
          <Route path="/servicios" element={<Services />}>Services</Route>
          <Route path="/nosotros" element={<About />}>About</Route>
          <Route path="/carreras" element={<Carrers />}>Careers</Route>
          <Route path="/blog" element={<Blog />}>Blog</Route>
          <Route path="/contacto" element={<Contact />}>Hire Us</Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

