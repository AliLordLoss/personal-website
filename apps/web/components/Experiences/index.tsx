import ExperienceItem from "@/components/Experiences/ExperienceItem";
import smit from "@/assets/images/smit.svg";
import akka from "@/assets/images/akka.png";
import kangonio from "@/assets/images/kangonio.png";
import twelveWork from "@/assets/images/twelve-work.png";
import asanBourse from "@/assets/images/asan-bourse.png";
import weblite from "@/assets/images/weblite.png";

export default function Experiences(): JSX.Element {
  return (
    <>
      <h3 className="my-4 text-3xl font-bold">Work Experience</h3>
      <ExperienceItem
        image={smit}
        imageAlt="smit"
        title="Test Engineer"
        company="Smit Thermal Solutions"
        date="Sep 2024 - Mar 2025 (part-time)"
        link="https://www.smitthermalsolutions.com/"
      >
        <ul className="list-disc list-outside ml-4">
          <li>Tested and validated industrial oven control software.</li>
          <li>
            Executed structured tests to ensure system reliability under varied
            conditions.
          </li>
          <li>Gained hands-on experience with modern code generation tools.</li>
        </ul>
      </ExperienceItem>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <ExperienceItem
        image={akka}
        imageAlt="akka"
        title="Software Engineer"
        company="Akka"
        date="Sep 2023 - Aug 2024"
        link="https://app.akka.finance"
      >
        <ul className="list-disc list-outside ml-4">
          <li>
            Developed Nest.js APIs for a decentralized exchange aggregator.
          </li>
          <li>
            Developed extensive test cases using Jest, and utilized them in
            GitHub Actions pipeline.
          </li>
          <li>Built data collection scripts for backend analytics.</li>
          <li>
            Developed an example dApp frontend for API validation and reference.
          </li>
        </ul>
        {/* <p>
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
        <ul className="list-disc list-outside ml-4">
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
            Turborepo to offer an appealing and user-friendly interface to
            interact with the Nest.js backend.
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
        </ul> */}
      </ExperienceItem>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <ExperienceItem
        image={kangonio}
        imageAlt="kangonio"
        title="Full Stack Engineer"
        company="Kangonio"
        date="June 2022 - Oct 2023 (part-time)"
      >
        <ul className="list-disc list-outside ml-4">
          <li>Maintained and tested existing e-commerce platform features.</li>
          <li>Implemented and verified flexible discount code logic.</li>
        </ul>
        {/* <strong>
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
        <ul className="list-disc list-outside ml-4">
          <li>
            Maintained an application that featured a fully functioning online
            shop as well as providing APIs for public use (SaaS).
          </li>
          <li>
            Implemented discount codes, having the option to choose between
            percentage discount or amount discount, unlimited time or limited
            time and etc.
          </li>
        </ul> */}
      </ExperienceItem>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <ExperienceItem
        image={twelveWork}
        imageAlt="twelve work"
        title="Full Stack Engineer"
        company="Twelve Work"
        date="June 2022 - Oct 2023 (part-time)"
      >
        <ul className="list-disc list-outside ml-4">
          <li>Developed data migration plugin and validated data integrity.</li>
          <li>
            Delivered backend features and redesigned frontend with React.
          </li>
          <li>Collaborated with UI/UX remotely to ensure design fidelity.</li>
        </ul>
        {/* <p>
          <strong>Twelve Work</strong> is an innovative CRM project
        </p>
        <div>
          My job in this company was also in a range of tasks, listed below:
        </div>
        <ul className="list-disc list-outside ml-4">
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
        </ul> */}
      </ExperienceItem>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <ExperienceItem
        image={asanBourse}
        imageAlt="asan bourse"
        title="Frontend Developer"
        company="Asan Bourse"
        date="Sep 2021 - May 2022 (part-time)"
      >
        <ul className="list-disc list-outside ml-4">
          <li>
            Developed and tested a mobile-first PWA for market event alerts.
          </li>
          <li>
            Exported app to Android and verified event notification logic.
          </li>
        </ul>
        {/* <p>
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
        <ul className="list-disc list-outside ml-4">
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
        </ul> */}
      </ExperienceItem>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <ExperienceItem
        image={weblite}
        imageAlt="weblite"
        title="Full Stack Developer"
        company="Weblite"
        date="Dec 2020 - May 2021"
      >
        <ul className="list-disc list-outside ml-4">
          <li>
            Completed full-stack training, developing a multiplayer UNO game.
          </li>
          <li>
            Built a React micro frontend integrated into a messenger platform.
          </li>
        </ul>
        {/* <p>
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
        <ul className="list-disc list-outside ml-4">
          <li>
            participated in an online course, & learned about HTML, CSS,
            JavaScript, Node.js, Express.js, PostgreSQL, MongoDB & Vue.js as an
            entry requirement.
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
        </ul> */}
      </ExperienceItem>
    </>
  );
}
