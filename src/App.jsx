import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/header';
import Features from './components/shared/Features';
import Hero from './components/shared/Hero';
import List from './components/shared/List';
import Footer from './components/shared/Footer';

function App() {
  return (
    <>
      <Header />
      <Features />
      <Hero/>
      <List/>
      <Footer/>
    </>
  );
}

export default App;
