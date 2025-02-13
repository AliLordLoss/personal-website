import ExperienceCollapse from "@/components/ExperienceCollapse";
import smit from "@/assets/images/smit.svg";
import akka from "@/assets/images/akka.png";
import kangonio from "@/assets/images/kangonio.png";
import twelveWork from "@/assets/images/twelve-work.png";
import asanBourse from "@/assets/images/asan-bourse.png";
import weblite from "@/assets/images/weblite.png";

export default function Page(): JSX.Element {
  return (
    <main className="p-4 md:px-64">
      <div className="my-4 ms-2 text-xl font-bold">Work Experience</div>
      <ExperienceCollapse
        image={smit}
        imageAlt="smit"
        title="Test Engineer"
        company="Smit Thermal Solutions"
        date="Sep 2024 - Present (part-time)"
      >
        <p>
          <strong>
            <a
              href="https://www.smitthermalsolutions.com/"
              target="_blank"
              className="text-sky-400 underline"
            >
              Smit Thermal Solutions
            </a>
          </strong>{" "}
          is a developer and manufacturer of high-quality equipment for thermal
          processes.
        </p>
        <div>A summary of my work in this company:</div>
        <ul>
          <li>
            Collaborated with a software engineering team to test the control
            software of an industrial oven.
          </li>
          <li>
            Learned to use multiple tools like Cordis Suite, digital twins and
            HMI along the way.
          </li>
        </ul>
      </ExperienceCollapse>
      <ExperienceCollapse
        image={akka}
        imageAlt="akka"
        title="Software Engineer"
        company="Akka"
        date="Sep 2023 - Aug 2024"
      >
        <p>
          <strong>
            <a
              href="https://app.akka.finance"
              target="_blank"
              className="text-sky-400 underline"
            >
              Akka
            </a>
          </strong>{" "}
          is A Decentralized Exchange Aggregator
        </p>
        <div>I did a variety of jobs in this company, including:</div>
        <ul>
          <li>
            Worked on a Nest.js project that wrapped the main product APIs and
            transformed them into a more desired structure.
          </li>
          <li>
            Implemtented a Referral system on the previously mentioned Nest.js
            project.
          </li>
          <li>
            Designed a cron job to update database using Nest.js task scheduling
            package, as well as having the option to trigger this update
            manually using a protected API endpoint (only accessible to admin
            users).
          </li>
          <li>
            Worked on a dapp (decentralized app), using technologies like
            Turborepo and to giv users a interface to interact with the Nest.js
            backend.
          </li>
          <li>
            Helped develop an SDK for calling the Nest.js APIs an publish it on
            npm.
          </li>
          <li>
            Developed a sample frontend project showcasing the usage of the SDK.
          </li>
          <li>
            Developed a Node.js script for gathering data from some liquidity
            pools and saving them in Redis.
          </li>
        </ul>
      </ExperienceCollapse>
      <ExperienceCollapse
        image={kangonio}
        imageAlt="kangonio"
        title="Full Stack Engineer"
        company="Kangonio"
        date="June 2022 - Oct 2023 (part-time)"
      >
        <strong>
          <a
            href="https://kangonio.com/"
            target="_blank"
            className="text-sky-400 underline"
          >
            Kangonio
          </a>
        </strong>
        <div>
          The highlight of What I did at Kangonio is listed below, omitting some
          other not-so-noticable tasks:
        </div>
        <ul>
          <li>
            Maintained an application that featured a fully functioning online
            shop as well as providing APIs for public use (SaaS).
          </li>
          <li>
            Implemented discount codes, having the option to choose between
            percentage discount or amount discount, un- limited time or limited
            time and etc.
          </li>
        </ul>
      </ExperienceCollapse>
      <ExperienceCollapse
        image={twelveWork}
        imageAlt="twelve work"
        title="Full Stack Engineer"
        company="Twelve Work"
        date="June 2022 - Oct 2023 (part-time)"
      >
        <p>
          <strong>Twelve Work</strong> is an innovative CRM project
        </p>
        <div>
          My job in this company was also in a range of tasks, listed below:
        </div>
        <ul>
          <li>
            Worked on a WordPress plugin to import Woo-Commerce user data to our
            own database, learned to code with PHP and got familiar with
            WordPress database structure (MySQL).
          </li>
          <li>
            Deployed & developed new features for an existing backend project
            (Node.js, Express.js, PostgreSQL).
          </li>
          <li>
            Completely redesigned the front side of this project using React.js,
            MUI & Recoil.js.
          </li>
          <li>
            Collaborated remotely with a UI/UX Designer to get this job done.
          </li>
        </ul>
      </ExperienceCollapse>
      <ExperienceCollapse
        image={asanBourse}
        imageAlt="asan bourse"
        title="Frontend Developer"
        company="Asan Bourse"
        date="Sep 2021 - May 2022 (part-time)"
      >
        <p>
          <strong>
            <a
              href="https://asanbourse.ir"
              target="_blank"
              className="text-sky-400 underline"
            >
              Asan Bourse
            </a>
          </strong>{" "}
          is a company offering various digital services for traders &
          stock-holders of the stock market of Iran
        </p>
        <div>
          I worked in this company as frontend developer and my job consisted of
          working on a rather large web application, collaborating with other
          frontend developers as well as backend developers and ui/ux designers
          in the team. My main accomplishments in this company consist of:
        </div>
        <ul>
          <li>
            Developed a PWA called the ”Alarm App” Using Nuxt.js. This app was a
            web application with primary focus on mobile device users which
            notified people of user defined events that could occur in the stock
            market.
          </li>
          <li>
            Worked with android studio to export the Alarm App as an android
            app.
          </li>
        </ul>
      </ExperienceCollapse>
      <ExperienceCollapse
        image={weblite}
        imageAlt="weblite"
        title="Full Stack Developer"
        company="Weblite"
        date="Dec 2020 - May 2021"
      >
        <p>
          <strong>
            <a
              href="https://www.weblite.im"
              target="_blank"
              className="text-sky-400 underline"
            >
              Weblite
            </a>
          </strong>{" "}
          is both the name of a messenger and the company that developed it,
          which is a startup founded in Sharif University of Technology
        </p>
        <div>
          This was my first time working with a team in industry. My tasks here
          were mostly educational and included items below:
        </div>
        <ul>
          <li>
            participated in an online course, & learned about HTML, CSS,
            JavaScript, Node.js, Express.js, PostgreSQL, Mon- goDB & Vue.js as
            an entry requirement.
          </li>
          <li>
            Developed a version of the famous UNO game with Vue.js, Express.js &
            MongoDB as the final project for the mentioned course.
          </li>
          <li>
            Developed a micro front-end application using React.js called
            ”paper” which was deployed on a messanger called weblite (Developed
            by this team)
          </li>
        </ul>
      </ExperienceCollapse>
    </main>
  );
}
