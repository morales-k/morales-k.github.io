import React, {useState, useEffect} from 'react'

function Nav() {
  const [showMenu, toggleMenu] = useState(false);
  const [navClass, setNavClass] = useState('hidden');

  // Keep the hidden class until the menu is toggled at least once.
  useEffect(() => {
    if (showMenu) {
      setNavClass('increase-height');
    } else if (!showMenu && navClass !== 'hidden') {
      setNavClass('decrease-height');
    }
  }, [showMenu]);

  return (
    <>
      <div id="menuToggle" className={showMenu ? 'open' : ''} onClick={() => toggleMenu(!showMenu)}>
        <div id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="cross">
          <span></span>
          <span></span>
        </div>
      </div>
      <nav id="hamNav" className={navClass}>
        <ul>
          <li className={showMenu ? 'grow' : 'shrink'}><a href="#home" onClick={() => toggleMenu(false)}>Home</a></li>
          <li className={showMenu ? 'grow' : 'shrink'}><a href="#work" onClick={() => toggleMenu(false)}>Work</a></li>
          <li className={showMenu ? 'grow' : 'shrink'}><a href="#contact" onClick={() => toggleMenu(false)}>Contact</a></li>
        </ul>
      </nav>
      <nav id="desktopNav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav