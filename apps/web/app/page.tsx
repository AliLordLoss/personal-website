import Image from "next/image";
import avatar from "@/assets/images/my_pic.png";
import sag from "@/assets/images/sag.jpeg";
import me from "@/assets/images/me.jpg";
import me2 from "@/assets/images/me2.jpg";

export default function Page(): JSX.Element {
  return (
    <main className="p-4 md:px-64">
      <div className="flex flex-col md:items-center">
        <Image src={avatar} alt={"avatar"} width={128} height={128} />
        <div className="mt-4 text-xl font-bold">Ali asghar Ghanati</div>
        <div className="text-primary">
          Software Engineer & Full Stack Developer
        </div>

        <a
          href="/cv.pdf"
          download="Aliasghar Ghanati's CV"
          className="bg-secondary w-full text-center rounded-xl py-2 mt-4 md:w-96 hover:shadow"
        >
          Download CV
        </a>
      </div>
      <div>
        <div className="mt-4 ms-2 text-xl font-bold">About me</div>
        <div>Greetings stranger! Welcome to my home [page].</div>
        <div>
          My name is Aliasghar Ghanati and I am a Software & Embedded Systems
          Engineer. Here are some pictures of me:
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-4">
          <div className="overflow-hidden w-full lg:w-3/5">
            <Image className="rounded-xl" src={me} alt="me" />
          </div>
          <div className="overflow-hidden w-full lg:w-2/5">
            <Image className="rounded-xl" src={me2} alt="again, me" />
          </div>
        </div>
        <div className="mt-2">
          let me introduce myself briefly. I'm a Software Engineer and Full
          Stack Developer with experience in various fields, including (but not
          limited to) backend, frontend, devops, web3, & embedded programming. I
          like to workout too, & archery & swimming are my favorite sports to
          do. My hobbies include reading novels & playing video games.
        </div>
        <div>
          Oh and here is a picture of my most beloved and loyal companion,
          probably more of a reason for you to come back here than me myself:
          <div className="mt-2 m-auto rounded-xl overflow-hidden w-full">
            <Image src={sag} alt={"sag"} />
          </div>
        </div>

        <div className="mt-20">
          Now, if you're still here, let's talk a little bit more in depth about
          me. I was interested in computers since middle school, and even
          self-taught myself a little bit of Visual Basic with the help of some
          books back then. At the first year of high school we had a programming
          course and learned the basics of C++ and a little about graphics with
          this language, but sadly the prgoramming courses were omitted in the
          following years of high school and we did not get the chance to learn
          more. For my undergraduate studies I chose the field of Computer
          Engineering to relieve my thirst for knowledge about computers; and I
          am most satisfied with my choice back then. I learned to code with C
          and Java at the first and second semesters of university and went on
          teach myself python in the following summer. It was during this years
          that I learned the valuable skill of learning new things by myself. I
          learnt about Django in an event held by Students Scientific Chapter at
          my department, named Webelopers. I contributed to this very same event
          in the following 2 years by becoming a staff. After this I went to a
          spree of gaining new skills at every job or project I worked on,
          always looking to learn something new along with getting the job done.
        </div>
        <div>
          I kept this attitude in choosing my BSc thesis, choosing a field I was
          less experienced in to learn about it more as well as working on a
          project for my BSc degree. This led to an interest in the field of
          Embedded systems, and limitless ideas and possibilities I see in this
          field. At the moment, beside studying (full-time) Embedded Systems @
          Eindhoven University of Technology, I work (part-time) as a Test
          Engineer @ Smit Thermal Solutions, giving me the chance to get some
          hands-on experience working with industrial design software on top of
          my studies.
        </div>
        <div>
          Now let's move on to my interests and hobbies. I have a profound love
          for stories of different kind, and I take significant joy in reading
          novels. I take a special interest in persian mythology and poems, and
          had been a member of central council of poetry and literature club at
          my university for 3 years, following these interests. I also love to
          play video games, mostly those with a remarkable narrative. And last
          but not least, I enjoy having physical activity, and feel good after a
          good session of exercise. My favorite field in sports is archery, and
          I have been practicing it for a few years now.
        </div>
      </div>
    </main>
  );
}
