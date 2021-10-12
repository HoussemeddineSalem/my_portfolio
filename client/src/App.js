import NavBar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
import './App.css'


function App() {

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Projects />
      <Contact />
      <button onClick={topFunction} id="myBtn" title="Go to top"><i class="fas fa-arrow-up fa-3x"></i></button>
      <Footer />
    </div>
  );
}

export default App;
