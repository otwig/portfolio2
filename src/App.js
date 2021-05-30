import logo from './logo.svg';
import './App.css';

import Header from './comps/Header.js';
import Footer from './comps/Footer.js';
import Coder from './comps/Coder.js';
import Maker from './comps/Maker.js';
import Educator from './comps/Educator.js';
import Button from './comps/Button.js'
import Bio from './comps/Bio.js'

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
      <Footer />
    </div>
  );
}

export default App;
