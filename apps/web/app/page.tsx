import Image from "next/image";
import avatar from "@/assets/images/my_pic.png";
import sag from "@/assets/images/sag.jpeg";

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
          let me introduce myself. I'm a Software Engineer and Full Stack
          Developer with experience in various fields, including (but not
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
      </div>
    </main>
  );
}
