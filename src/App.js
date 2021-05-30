
import logo from './logo.svg';
import './App.css';

import Header from './comps/Header.js';
import Footer from './comps/Footer.js';
import Coder from './comps/Coder.js';
import Maker from './comps/Maker.js';
import Educator from './comps/Educator.js';
import Button from './comps/Button.js'
import Bio from './comps/Bio.js'
import Burger from './unusedComps/Burger.js'
import Projects from './comps/Projects.js'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="stacksContainer">
        <div id="stacks">
          <Coder />
          <Maker />
          <Educator />
        </div>
        <div id="block"><br /><br /></div>

      </div>
      <Bio />
      <Button />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
