import React, { useState, useEffect } from 'react'
import Rocket from './Rocket'

function Contact(props) {
  const [sbMail, setSbMail] = useState(false);

  useEffect(() => {
    props.getOffset('contact');
  }, []);

  return (
    <div id="contact" ref={props.contactRef}>
      {
        props.contactVisible ? <Rocket animate={'contactRocket'} /> : null
      }
      <h1>Get in touch</h1>
        <form id="contactForm" name="contactform" action={sbMail ? "" : "https://formspree.io/f/xnqwdvpr"} method="post">
          <fieldset>
            <label htmlFor="name">Name<span>&#42;</span></label>
            <input
              id="name"
              name="name"
              type="text"
              tabIndex="1"
              required
            />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              tabIndex="-1"
              onChange={() => setSbMail(true)}
            />
            <label htmlFor="ltrbox">Email<span>&#42;</span></label>
            <input
              id="ltrbox"
              name="ltrbox"
              type="email"
              tabIndex="2"
              required
            />
            <label htmlFor="message">Message<span>&#42;</span></label>
            <textarea id="message" name="message" tabIndex="3" required></textarea>
          </fieldset>
            <input type="submit" id="contactSubmit" value="Submit" />
        </form>
    </div>
  )
}

export default Contact