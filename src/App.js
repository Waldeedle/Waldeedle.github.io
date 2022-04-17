import Navbar from './components/Navbar';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Header headerClass="main_title" title="Hi. I'm Syed.">
          <span className="main_subtitle">A Software Engineer.</span>
        </Header>
        <p className="text">I am a full-stack developer and tech ethusiast with a passion for making life easier through software.</p>
        <Footer>
          <p className="footer_text">Have an exciting project where you need some help? 
            <span className="main_subtitle"> Send me a message, and let's chat.</span>
          </p>
        </Footer>
      </div>
    </Router>
  );
}

export default App;