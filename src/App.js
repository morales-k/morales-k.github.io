import { useEffect, useState, useRef } from 'react';
import './styles/App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [homeVisible, setHomeVisible] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const homeRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    // If the location has changed (#links), then the location must be reset to start at the top of the page.
    if (window.location.hash !== "") {
      window.location = origin;
    }

    // Scrolls to top if location hasn't changed & prevents constant reloading by setting location to origin.
    document.body.scrollTo(0, 0);
  }, []);

  const callback = (entries) => {
    const [entry] = entries;

    // Set visibility based on which entry has intersected the window.
    switch (entry.target.id) {
      case 'home':
        setHomeVisible(entry.isIntersecting);
        break;
      case 'work':
        setWorkVisible(entry.isIntersecting);
        break;
      case 'contact':
        setContactVisible(entry.isIntersecting);
        break;
      default:
        break;
    }
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  // Set intersection observers for refs to trigger animations.
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    
    if (homeRef.current || workRef.current || contactRef.current) {
      observer.observe(homeRef.current);
      observer.observe(workRef.current);
      observer.observe(contactRef.current);
    }

    return () => {
      if (homeRef.current || workRef.current || contactRef.current) {
        observer.unobserve(homeRef.current);
        observer.unobserve(workRef.current);
        observer.unobserve(contactRef.current);
      }
    }
  }, [homeRef, workRef, contactRef, options]);

  // Get top offset and set as CSS variable to ensure animation is always in view.
  function getOffset(elementId) {
    const offset = document.getElementById(elementId).offsetTop;
    const root = document.documentElement;
    // Adjust % for better animations.
    const percent = root.clientWidth < 500 ? 10 : root.clientWidth < 1024 ? 15 : 20;
    const offSetPercent = (percent / 100) * offset;
    const endY = offset + offSetPercent;

    if (elementId === 'work') {
      root.style.setProperty('--start-y-work', offset + 'px');
    } else if (elementId === 'contact') {
      root.style.setProperty('--start-y-contact', offset + 'px');
      root.style.setProperty('--end-y-contact', endY + 'px');
    }
  }

  return (
      <>
        <Nav />
        <Home homeRef={homeRef} homeVisible={homeVisible} />
        <Work workRef={workRef} workVisible={workVisible} getOffset={getOffset} />
        <Contact contactRef={contactRef} contactVisible={contactVisible} getOffset={getOffset} />
        <Footer />
      </>
  );
}

export default App;
