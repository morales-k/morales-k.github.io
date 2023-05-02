import React from 'react'

function Footer() {
  return (
    <footer>
      <nav id="footerNav">
        <ul>
          <li>
            <a className="footer-home" href="#home">Home</a>
          </li>
          <li>
            <a className="footer-work" href="#work">Projects</a>
          </li>
          <li>
            <a className="footer-contact" href="#contact">Contact</a>
          </li>
          <li>
            <a
              className="footer-github"
              href="https://github.com/morales-k"
              target="_blank"
              rel="noopener"
              >Github</a
            >
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer