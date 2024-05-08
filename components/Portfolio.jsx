import React from 'react'

function Portfolio() {
  return (
    <div>

      <article className="portfolio" data-page="portfolio">

        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">

          <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Java Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>UIUX design</button>
            </li>

          </ul>

          <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                {/* <ion-icon name="chevron-down"></ion-icon> */}
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

              <li className="select-item">
                <button data-select-item>Java Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>UIUX design</button>
              </li>

            </ul>

          </div>

          <ul className="project-list">

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://miniproject-ecommerce.netlify.app/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/ecommerce.webp" alt="ECommerce" loading="lazy" width="500" height="300" style={{ maxWidth: '100%' }} />

                </figure>
                <h3 className="project-title">ECommerce Web App Using Microservices Architecture</h3>
                <p className="project-category" id="tags">Web development</p>
                <p className="project-category">Developed an Ecommerce web application using microservices architecture using MERN Stack.</p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://taskytodos.netlify.app/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/taskmanager.webp" alt="Task Manager" loading="lazy" width="500" height="300" style={{maxwidth: "100%"}} />
                </figure>
                <h3 className="project-title">Kanban Drag-n-Drop Task Manager</h3>
                <p className="project-category" id="tags">Web Development</p>
                <p className="project-category">Developed Modern Task Manager using local storage with Kanban board layout style.</p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://dietcalendar.netlify.app/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/eatwise.png" alt="EatWise" loading="lazy" width="500" height="300" style={{maxwidth: "100%"}} />
                </figure>
                <h3 className="project-title">EatWise - DietCalendar and Meal Planner</h3>
                <p className="project-category" id="tags">Web Development</p>
                <p className="project-category">Developed Diet calendar using FullCalendar with advanced functionalities.</p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://sastrabot.netlify.app/">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/chatbot.webp" alt="SastraBot" loading="lazy" width="500" height="300" style={{maxwidth: "100%"}} />
                </figure>

                <h3 className="project-title">Sastra Intent-Matching FAQ Chatbot</h3>

                <p className="project-category" id="tags">Web development</p>
                <p className="project-category">
                  Built a FAQ chatbot for admissions, matching intents with predefined answers.
                </p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="uiux design">
              <a href="https://dribbble.com/shots/23311594-Kuruksastra-Cultural-Page-Design?utm_source=Clipboard_Shot&utm_campaign=ashishprabhuk&utm_content=Kuruksastra%20Cultural%20Page%20Design&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=ashishprabhuk&utm_content=Kuruksastra%20Cultural%20Page%20Design&utm_medium=Social_Share">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/uiux.webp" alt="KurukSastra UiUx" loading="lazy" width="500" height="300" style={{maxwidth: "100%"}} />
                </figure>
                <h3 className="project-title">UiUx Design of College Cultural Events</h3>
                <p className="project-category" id="tags">UIUX design</p>
                <p className="project-category">Cultural Page Revamped: Transformative UI/UX Design</p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="java applications">
              <a href="https://github.com/ashishprabhuk/Java/tree/main/Core-Java/Zoho/Round3/BankSystem">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/banking.webp" alt="Banking Systems" loading="lazy" width="500" height="300" style={{maxwidth: "100%"}} />
                </figure>
                <h3 className="project-title">Online Banking and Reward Systems</h3>
                <p className="project-category" id="tags">Java</p>
                <p className="project-category">
                  Created an OOP-based online banking system with intuitive navigation and submodules.
                </p>
              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="java applications">
              <a href="https://github.com/ashishprabhuk/Java/tree/main/Core-Java/Zoho/Round3/BusResv">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    {/* <ion-icon name="eye-outline"></ion-icon> */}
                  </div>
                  <img src="./assets/images/busResv.webp" alt="Bus Systems" loading="lazy" width="500" height="300" style={{ maxwidth: "100%" }} />
                </figure>
                <h3 className="project-title">Bus Ticket Booking Systems</h3>
                <p className="project-category" id="tags">Java</p>
                <p className="project-category">
                  Created a console-based bus reservation system with OOPs principles.
                </p>
              </a>
            </li>

          </ul>
        </section>

      </article>
    </div>
  )
}

export default Portfolio