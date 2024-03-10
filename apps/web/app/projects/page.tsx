import { GithubIcon, GlobeIcon } from "@/components/Icons";

export default function Page(): JSX.Element {
  return (
    <main className="p-4 md:px-64">
      <div className="my-4 ms-2 text-xl font-bold">Projects</div>
      <ul>
        <li className="border-b-2 border-gray-500 py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Gamein 2022: Frontend, Backend & Operations</div>
          </div>
          <p>
            A simulation game where participants compete to bring a business to
            success from scratch by managing factory lines and trading with
            other players. Technologies used: Spring boot, React.js, PostgreSQL,
            Docker, NGINX.
          </p>
        </li>
        <li className="border-b-2 border-gray-500 py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Smart Home: Embedded Systems Course Project</div>
            <a
              href="https://github.com/AliLordLoss/embedded-project"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <p>
            A project with 3 modules and a main hub for access control.
            Connected three Arduinos via ESP8266 for home automation tasks and
            monitored by a Raspberry Pi web application. Technologies used:
            Arduino, Raspberry Pi, ESP8266, Nuxt.js.
          </p>
        </li>
        <li className="border-b-2 border-gray-500 py-2">
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
        </li>
        <li className="border-b-2 border-gray-500 py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Webelopers 2022: Frontend</div>
            <a
              href="https://github.com/SharifWebelopers/webelopers-frontend-2022"
              target="_blank"
              className="text-sky-400 me-1"
            >
              <GithubIcon width={32} />
            </a>
          </div>
          <p>
            An application for event registration, team selection, learning
            materials access, and event timeline display for a student-organized
            web development event. Technologies used: React.js, Next.js.
          </p>
        </li>
        <li className="border-b-2 border-gray-500 py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>WSS Site: Full Stack & Database Administration</div>
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
          <p>
            A complete website setup for displaying seminar, workshop, and event
            details. Technologies used: Django, React.js, Postgresql, Docker,
            NGINX.
          </p>
        </li>
        <li className="border-b-2 border-gray-500 py-2">
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
        </li>
        <li className="border-b-2 border-gray-500 py-2">
          <div className="flex items-center justify-between text-primary text-lg font-medium">
            <div>Record Tracker: Frontend</div>
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
          <p>
            A web application for tracking and calculating archery practice
            records. Technologies used: Vue.js, Nuxt.js.
          </p>
        </li>
        <li className="border-b-2 border-gray-500 py-2">
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
        <li className="border-b-2 border-gray-500 py-2">
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
        </li>
      </ul>
    </main>
  );
}
