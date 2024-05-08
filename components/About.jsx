import React from 'react'

function About() {
  return (
      <div>
          <article className="about  active" data-page="about">

              <header>
                  <h2 className="h2 article-title">About me</h2>
              </header>

              <section className="about-text">
                  <p>
                      Hello there! 👋 I'm Ashish Prabhu K, a passionate Software Developer on a mission to bring innovative ideas to life through elegant code and captivating design.
                      As a fresher,  I specialize in Java, ReactJS, and Figma, backed by a strong frontend foundation in HTML5, CSS3, and modern JavaScript frameworks.
                  </p>
                  <p>
                      I excel in developing innovative concepts into reality through efficient coding and thoughtful design. Collaborating seamlessly with Backend Developers and UIUX designers, my discerning design eye and profound understanding of UI/UX principles contribute to crafting polished and user-friendly web applications with a dedicated focus on responsive design. </p>
                  <p>
                      As a team player and problem-solving enthusiast, I'm geared up to infuse some serious impact to meaningful projects.</p>


              </section>


              <section className="service">

                  <h3 className="h3 service-title">What I Do</h3>

                  <ul className="service-list">

                      <li className="service-item">

                          <div className="service-icon-box">
                              {/* <script src="https://cdn.lordicon.com/lordicon.js"></script>
                              <lord-icon className="icoo"
                                  src="https://cdn.lordicon.com/hhclilyr.json"
                                  trigger="loop"
                                  delay="3000"
                                  style="width:80px;height:80px">
                              </lord-icon> */}
                          </div>

                          <div className="service-content-box">
                              <h4 className="h4 service-item-title">Web development</h4>

                              <p className="service-item-text">
                                  I create stunning, functional web pages for a better user experience.
                              </p>
                          </div>

                      </li>

                      <li className="service-item">

                          <div className="service-icon-box">
                              {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}
                              {/* <lord-icon className="icoo"
                                  src="https://cdn.lordicon.com/indktwpp.json"
                                  trigger="loop"
                                  delay="3000"
                                  colors="primary:#3aa0ff,secondary:#181818"
                                  style="width:80px;height:80px">
                              </lord-icon> */}
                          </div>

                          <div className="service-content-box">
                              <h4 className="h4 service-item-title">Java Applications</h4>

                              <p className="service-item-text">
                                  Java Developer crafting efficient solutions for complex challenges.
                              </p>
                          </div>

                      </li>



                      <li className="service-item">

                          <div className="service-icon-box">
                              {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}
                              {/* <lord-icon className="icoo"
                                  src="https://cdn.lordicon.com/kgvlhryh.json"
                                  trigger="loop"
                                  delay="3000"
                                  colors="primary:#3c3c3c,secondary:#959595,tertiary:#ffb700,quaternary:#f24c00,quinary:#007acc,senary:#08a88a,septenary:#6f6f6f,octonary:#c2332c"
                                  style="width:80px;height:80px">
                              </lord-icon> */}
                          </div>

                          <div className="service-content-box">
                              <h4 className="h4 service-item-title">UIUX Designs</h4>

                              <p className="service-item-text">
                                  Visually crafting seamless digital experiences as a UI/UX designer.
                              </p>
                          </div>

                      </li>

                      <li className="service-item">

                          <div className="service-icon-box">
                              {/* <script src="https://cdn.lordicon.com/lordicon.js"></script> */}
                              {/* <lord-icon className="icoo"
                                  src="https://cdn.lordicon.com/vhyuhmbl.json"
                                  trigger="loop"
                                  delay="3000"
                                  colors="primary:#ebe6ef,secondary:#ffc738,tertiary:#3aa0ff"
                                  style="width:80px;height:80px">
                              </lord-icon> */}
                          </div>

                          <div className="service-content-box">
                              <h4 className="h4 service-item-title">Illustrations & Arts</h4>

                              <p className="service-item-text">
                                  I make professional illustrations, logos and realistic portrait arts.
                              </p>
                          </div>

                      </li>

                  </ul>

              </section>


              <section className="description">

                  <h3 className="h3 description-title">Who I Am</h3>

                  <ul className="description-list has-scrollbar">

                      <li className="description-item">
                          <div className="content-card" data-description-item>

                              <figure className="description-avatar-box">
                                  <img src="./assets/images/explore.png" alt="Tech Explorer" width="60" data-description-avatar className="img-box" />
                              </figure>


                              <h4 className="h4 description-item-title" data-description-title>Tech Explorer</h4>

                              <div className="description-text" data-description-text>
                                  <p>
                                      I love turning cutting-edge tech into real solutions. Whether teaming up with designers or tackling backend puzzles, I thrive in the dynamic world of software development.
                                  </p>
                              </div>

                          </div>
                      </li>

                      <li className="description-item">
                          <div className="content-card" data-description-item>

                              <figure className="description-avatar-box">
                                  <img src="./assets/images/uiux.svg" alt="UiUx Designer" width="60" data-description-avatar />
                              </figure>

                              <h4 className="h4 description-item-title" data-description-title>Design Enthusiast</h4>

                              <div className="description-text" data-description-text>
                                  <p>
                                      Beyond the code, I bring a keen design eye and a deep grasp of UI/UX. My aim? Crafting more than functional apps—seamless, user-friendly experiences that linger.
                                  </p>
                              </div>

                          </div>
                      </li>

                      <li className="description-item">
                          <div className="content-card" data-description-item>

                              <figure className="description-avatar-box">
                                  <img src="./assets/images/puzzle.png" alt="Problem Solver" width="60" data-description-avatar />
                              </figure>

                              <h4 className="h4 description-item-title" data-description-title>Problem solver</h4>

                              <div className="description-text" data-description-text>
                                  <p>
                                      Having collaborated with diverse teams, including designers and backend developers, I've honed my skills as an excellent team member, communicator, and problem solver.
                                  </p>
                              </div>

                          </div>
                      </li>

                      <li className="description-item">
                          <div className="content-card" data-description-item>

                              <figure className="description-avatar-box">
                                  <img src="./assets/images/journey.png" alt="Project Innovator" width="60" data-description-avatar />
                              </figure>

                              <h4 className="h4 description-item-title" data-description-title>Project Innovator</h4>

                              <div className="description-text" data-description-text>
                                  <p>
                                      I bring hands-on experience crafting web applications with a focus on responsive design. My work not only meets technical standards but also delivers visually appealing user interfaces.
                                  </p>
                              </div>

                          </div>
                      </li>

                  </ul>

              </section>

              <div className="modal-container" data-modal-container>

                  <div className="overlay" data-overlay></div>

                  <section className="description-modal">

                      <button className="modal-close-btn" data-modal-close-btn>
                          {/* <ion-icon name="close-outline"></ion-icon> */}
                      </button>

                      <div className="modal-img-wrapper">
                          <figure className="modal-avatar-box">
                              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="75" data-modal-img />
                          </figure>

                      </div>

                      <div className="modal-content">

                          <h4 className="h3 modal-title" data-modal-title>Tech Explorer</h4>

                          <div data-modal-text>
                              <p>
                                  I love turning cutting-edge tech into real solutions. Whether teaming up with designers or tackling backend puzzles, I thrive in the dynamic world of software development.
                              </p>
                          </div>

                      </div>

                  </section>

              </div>

          </article>
    </div>
  )
}

export default About