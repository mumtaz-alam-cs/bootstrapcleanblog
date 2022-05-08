import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Post from "./Pages/Post";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<><Header title="Clean Blog" subheading="A Blog Theme by Start Bootstrap" /><Home /></>} />

          <Route
            path='/about'
            element={<><Header title="About Me" subheading="This is what I do." /><Post /></>}
          />

          <Route
            path='/post'
            element={<><Header
              title="Man must explore, and this is exploration at its greatest"
              subheading="Problems look mighty small from 150 miles up"
              meta={{ start: "Posted by", buttonName: "Start Bootstrap", buttonLink: "#!", end: "on August 24, 2022" }}
            /><About /></>}
          />

          <Route
            path='/contact'
            element={<><Header title="Contact Me" subheading="Have questions? I have answers." /><Contact /></>}
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
