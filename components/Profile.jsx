import React from 'react'

function Profile() {
  return (
      <div>
          <aside className="sidebar" data-sidebar>

              <div className="sidebar-info">

                  <figure className="avatar-box">
                      <img className="avt-img" src="./assets/images/profile.webp" alt="Ashish Prabhu" width="80" />
                  </figure>

                  <div className="info-content">
                      <h1 className="name" title="Ashish Prabhu K">Ashish Prabhu K </h1>

                      <p className="title">Software Developer</p>
                  </div>

                  <button className="info_more-btn" data-sidebar-btn>
                      <span>Show Contacts</span>

                      <ion-icon name="chevron-down"></ion-icon>
                  </button>

              </div>

              <div className="sidebar-info_more">

                  <div className="separator"></div>

                  <ul className="contacts-list">

                      <li className="contact-item">

                          <div className="icon-box">

                              <ion-icon name="at-outline"></ion-icon>
                          </div>

                          <div className="contact-info">
                              <p className="contact-title">Email</p>

                              <a href="mailto: ashishprabhu2143@gmail.com" className="contact-link">ashishprabhu2143@gmail.com</a>
                          </div>

                      </li>

                      <li className="contact-item">

                          <div className="icon-box">

                              <ion-icon name="call-outline"></ion-icon>
                          </div>

                          <div className="contact-info">
                              <p className="contact-title">Phone</p>

                              <a href="Tel:+918300803055" className="contact-link">+91-8300803055</a>
                          </div>

                      </li>

                      <li className="contact-item">

                          <div className="icon-box">

                              <ion-icon name="calendar-outline"></ion-icon>
                          </div>

                          <div className="contact-info">
                              <p className="contact-title">Birthday</p>

                              <time datetime="2003-04-21">April 21, 2003</time>
                          </div>

                      </li>

                      <li className="contact-item">

                          <div className="icon-box">

                              <ion-icon name="location-outline"></ion-icon>
                          </div>

                          <div className="contact-info">
                              <p className="contact-title">Location</p>

                              <address>TamilNadu, India</address>
                          </div>

                      </li>

                  </ul>

                  <div className="separator"></div>

                  <ul className="social-list">

                      <li className="social-item">
                          <a href="https://www.linkedin.com/in/ashishprabhuk/" className="social-link">
                              <ion-icon name="logo-linkedin"></ion-icon>
                          </a>
                      </li>

                      <li className="social-item">
                          <a href="https://www.instagram.com/ashishprabhuk" className="social-link">
                              <ion-icon name="logo-instagram"></ion-icon>
                          </a>
                      </li>

                      <li className="social-item">
                          <a href="https://github.com/ashishprabhuk" className="social-link">
                              <ion-icon name="logo-github"></ion-icon>
                          </a>
                      </li>

                      <li className="social-item">
                          <a href="https://twitter.com/ashishprabhuk" className="social-link">
                              <ion-icon name="logo-twitter"></ion-icon>
                          </a>
                      </li>


                      <li className="social-item">
                          <a href="https://wa.me/918300803055" className="social-link">
                              <ion-icon name="logo-whatsapp"></ion-icon>
                          </a>
                      </li>


                  </ul>

              </div>

          </aside>
    </div>
  )
}

export default Profile