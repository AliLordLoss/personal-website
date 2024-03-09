import Image from "next/image";
import avatar from "@/assets/images/my_pic.png";

export default function Page(): JSX.Element {
  return (
    <main className="p-4">
      <div>
        <Image src={avatar} alt={"avatar"} width={128} height={128} />
        <div className="mt-4 text-xl font-bold">Ali asghar Ghanati</div>
        <div className="text-primary">
          Software Engineer & Full Stack Developer
        </div>

        <button className="bg-secondary hover:shadow w-full rounded-xl py-2 mt-4">
          Download CV
        </button>
      </div>
      <div>
        <div className="mt-4 text-xl font-bold">About me</div>
        <div>
          I'm a Software Engineer and Full Stack Developer with experience in
          various fields, including (but not limited to) backend, frontend,
          devops, web3, & embedded programming. I like to workout too, & archery
          & swimming are my favorite sports to do. My hobbies include reading
          novels & playing video games.
        </div>
      </div>
    </main>
  );
}
