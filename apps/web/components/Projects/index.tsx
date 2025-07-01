import { GithubIcon, GlobeIcon } from "../Icons";

export default function Projects() {
  return (
    <>
      <div className="my-4 text-3xl font-bold">Projects</div>
      <ul>
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Gamein</div>
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>
              Started as a member of frontend team, self-taught the Java Spring
              Boot framework when most of the backend team resigned, ensuring
              timely delivery.
            </li>
            <li>
              Designed the database and wrote custom queries to transfer some
              computation loads to database, making APIs more efficient.
            </li>
            <li>
              Used NGINX & Docker to provide APIs to the frontend team, making
              the development process easier.
            </li>
            <li>
              Delivered a game with approximately 3,000 simultaneous users,
              analyzed data with help from the Game Design team to prevent
              cheating and/or fraud.
            </li>
          </ul>
        </li>
        <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Smart Home - Embedded Systems Course Project</div>
            <a
              href="https://github.com/AliLordLoss/embedded-project"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>
              Built a home automation system with 3 Arduino modules and a
              Raspberry Pi as the central hub.
            </li>
            <li>
              Programmed custom ESP8266 firmware in C to connect Arduino modules
              to Wi-Fi.
            </li>
            <li>Created a dashboard for remote access and control.</li>
          </ul>
          {/* <p>
            A project with 3 modules and a main hub for access control.
            Connected three Arduinos via ESP8266 for home automation tasks and
            monitored by a Raspberry Pi web application. Technologies used:
            Arduino, Raspberry Pi, ESP8266, Nuxt.js.
          </p> */}
        </li>
        {/* <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Twelve Work: Frontend, Backend & Operations</div>
          </div>
          <p>
            A CRM software designed for customer information organization,
            behavior analysis, and interaction, primarily for online shops.
            Integrated a plugin for data import from WordPress (Woo-Commerce)
            shops. Technologies used: Node.js, Express.js, React.js, WordPress &
            Plugins (w/ PHP).
          </p>
        </li> */}
        <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Webelopers</div>
            <a
              href="https://github.com/SharifWebelopers/webelopers-frontend-2022"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>
              Helped maintain an open source project for a student-run tech
              event.
            </li>
            <li>Collaborated with frontend, backend, and DevOps developers.</li>
            <li>
              Built UI components for event registration, team creation &
              selection, schedule display, and third-party login.
            </li>
            <li>
              Integrated all components with backend APIs to ensure proper
              functionality.
            </li>
          </ul>
          {/* <p>
            An application for event registration, team selection, learning
            materials access, and event timeline display for a student-organized
            web development event. Technologies used: React.js, Next.js.
          </p> */}
        </li>
        <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>WSS Site</div>
            <div className="flex">
              <a
                href="https://github.com/Winter-Seminar-Series/WSS-site"
                target="_blank"
                className="text-sky-400 me-2"
              >
                <GithubIcon width={32} />
              </a>
              <a
                href="http://wss.ce.sharif.edu"
                target="_blank"
                className="text-sky-400 me-1"
              >
                <GlobeIcon width={32} />
              </a>
            </div>
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>
              Directed the redesign, deployment, and maintenance of an existing
              open source project.
            </li>
            <li>
              Oversaw a student team while actively contributing to development.
            </li>
            <li>
              Added new features and event data, and ensured CI/CD and test
              pipelines remained functional.
            </li>
          </ul>
          {/* <p>
            A complete website setup for displaying seminar, workshop, and event
            details. Technologies used: Django, React.js, Postgresql, Docker,
            NGINX.
          </p> */}
        </li>
        {/* <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Alarm App: Frontend</div>
            <a
              href="http://asantrade.app"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <p>
            A web application for defining customized financial alarms and user
            notifications, optimized for mobile devices. Technologies used:
            Vue.js, Nuxt.js.
          </p>
        </li> */}
        <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Record Tracker</div>
            <div className="flex">
              <a
                href="https://github.com/AliLordLoss/Record-Tracker"
                target="_blank"
                className="text-sky-400 me-2"
              >
                <GithubIcon width={32} />
              </a>
              <a
                href="https://alilordloss.github.io"
                target="_blank"
                className="text-sky-400 me-1"
              >
                <GlobeIcon width={32} />
              </a>
            </div>
          </div>
          <ul className="list-disc list-outside ml-4">
            <li>
              Built a single-page application for logging and analyzing archery
              scores.
            </li>
          </ul>
          {/* <p>
            A web application for tracking and calculating archery practice
            records. Technologies used: Vue.js, Nuxt.js.
          </p> */}
        </li>
        {/* <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Chess Game: Python Application</div>
            <a
              href="https://github.com/AliLordLoss/python-chess"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <p>A two-player chess game developed in Python.</p>
        </li>
        <hr className="mt-3 mx-32 border-gray-500" />
        <li className="py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Mine Sweeper Game: Frontend</div>
            <a
              href="https://github.com/AliLordLoss/mine-sweeper"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <p>
            An implementation of the classic game using basic frontend
            technologies. Technologies used: HTML, CSS, JavaScript.
          </p>
        </li> */}
      </ul>
    </>
  );
}
