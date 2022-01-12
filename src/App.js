import React, { useState } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [titles] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' },
    { name: 'Contact' }
  ]);

  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const currentPage = ({ name }) => {
    switch (name) {
      case 'About':
        return <About />
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />
      case 'Resume':
        return <Resume />;
      default:
        break;
    }
  };

  return (
    <>
      <Header
        titles = {titles}
        setCurrentTitle = {setCurrentTitle}
        currentTitle = {currentTitle.name}
      ></Header>
      <main className="row align-items-center">
        {currentPage(currentTitle)}
      </main>
      <Footer />
    </>
  );
}

export default App;