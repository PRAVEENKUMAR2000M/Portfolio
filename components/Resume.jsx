import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function Resume() {
  return (
      <div>
          <article className="resume" data-page="resume">
              <header>
                  <h2 className="h2 article-title">Resume</h2>
              </header>
              <div className="cv">
                  <a href="https://docs.google.com/document/d/1UOeEnQ_T6BaxkMt6rJ0pre9Xbj2BykZ7BwKVU0fiom8/edit?usp=sharing">
                      <button className="download">
                          <img src="./assets/images/download.svg" alt="download" className="down" />
                          Download CV
                      </button>
                  </a>
              </div>

              <section className="timeline">
                  <div className="title-wrapper">
                      <div className="icon-box">
                          {/* <lord-icon
                                src="https://cdn.lordicon.com/uaetnrqo.json"
                                trigger="loop"
                                delay="3000"
                                style={{ width: '45px', height: '45px' }}
                            /> */}
                          
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon trigger="hover" src="/my-icon.json"></lord-icon>
                      </div>
                      <h3 className="h3">Experience</h3>
                  </div>
                  <ol className="timeline-list">
                      <li className="timeline-item">
                          <h4 className="h4 timeline-item-title">
                              MERN Tech Support Intern <b className="metaa"><u>@GUVI Geek Networks IITM</u></b>
                          </h4>
                          <span>Feb 2024 - Present</span>
                          <span id="timeDifference"></span>
                          <p className="timeline-text">
                              Developed projects including a diet calendar, etc., utilizing MERN stack technologies.
                          </p>
                          <p className="timeline-text">
                              Provided mentorship to students, facilitating their understanding and mastery of MERN stack concepts.
                          </p>
                      </li>

                      <li className="timeline-item">
                          <h4 className="h4 timeline-item-title">
                              Full Stack Developer <b className="metaa"><u>@MSTS</u></b>
                          </h4>
                          <span>Jun 2023 - Jul 2023</span>
                          <p className="timeline-text">
                              Developed and designed a secure login page and scalable web app using the MERN Stack and assisted in
                              cloud-based (AWS) development for 1500+ users.
                          </p>
                      </li>

                      <li className="timeline-item">
                          <h4 className="h4 timeline-item-title">
                              UIUX Designer <b className="metaa"><u>@300dpi</u></b>
                          </h4>
                          <span>Nov 2022 - Jan 2023</span>
                          <p className="timeline-text">
                              SASTRA Design Team member specializing in UI/UX. Led Figma design for user-friendly Kuruksastra website
                              and conducted workshops for beginners.
                          </p>
                      </li>
                  </ol>
              </section>

              <section className="timeline">
                  <div className="title-wrapper">
                      <div className="icon-box">
                          {/* <lord-icon
                                src="https://cdn.lordicon.com/ttioogfl.json"
                                trigger="loop"
                                delay="2000"
                                colors="primary:#121331,secondary:#ebe6ef,tertiary:#eee966,quaternary:#92140c,quinary:#f9c9c0"
                                style={{ width: '50px', height: '50px' }}
                            /> */}
                          
                          <script src="https://cdn.lordicon.com/lordicon.js"></script>
                          <lord-icon trigger="hover" src="/my-icon.json"></lord-icon>
                      </div>
                      <h3 className="h3">Education</h3>
                  </div>
                  <ol className="timeline-list">
                      <li className="timeline-item">
                          <h4 className="h4 timeline-item-title">Sastra Deemed University</h4>
                          <span>2020 — 2024</span>
                          <p className="timeline-text">
                              B.Tech Mechatronics
                              <br />
                              ● CGPA : <b>7.43</b>
                          </p>
                      </li>
                      <li className="timeline-item">
                          <h4 className="h4 timeline-item-title">Campion Anglo-Indian Hr. Sec School </h4>
                          <span>2006 — 2020</span>
                          <p className="timeline-text">
                              SSLC & Secondary Education
                              <br />
                              ● 12th Grade : <b>77.66%</b>
                              <br />
                              ● 10th Grade : <b>94.6%</b>
                          </p>
                      </li>
                  </ol>
              </section>

              <section className="skills">
                  <div className="skill-wrapper">
                      <div className="icon-box">
                          {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}

                      </div>
                      <h3 className="h3">Skills</h3>
                  </div>
                  <div id="skills">
                      <div className="wrapper">
                          <div className="skills-container" id="skills-container"></div>
                      </div>
                  </div>
              </section>
          </article>
      </div>
  )
}

export default Resume


