import tue from "@/assets/images/tue.png";
import sharif from "@/assets/images/sharif.png";
import Image from "next/image";

export default function Education(): JSX.Element {
  return (
    <>
      <div className="my-4 text-3xl font-bold">Education</div>
      <div className="px-2 mb-2">
        <div className="flex flex-row items-center py-3 text-sm">
          <div className="bg-secondary p-2 rounded w-16 h-16 flex items-center justify-center">
            <Image src={tue} alt="TUE logo" />
          </div>
          <div className="flex flex-col justify-center ms-2">
            <div className="font-medium">M.Sc. in Embedded Systems</div>
            <div className="text-primary">
              Eindhoven University of Technology
            </div>
            <div className="text-primary">2024 - Present</div>
          </div>
        </div>
      </div>
      <hr className="m-auto mt-3 max-w-96 w-full border-gray-500" />
      <div className="px-2 mb-2">
        <div className="flex flex-row items-center py-3 text-sm">
          <div className="bg-secondary p-2 rounded w-16 h-16 flex items-center justify-center">
            <Image src={sharif} alt="Sharif logo" />
          </div>
          <div className="flex flex-col justify-center ms-2">
            <div className="font-medium">B.Sc. in Computer Engineering</div>
            <div className="text-primary">Sharif University of Technology</div>
            <div className="text-primary">2018 - 2023</div>
          </div>
        </div>
      </div>
    </>
  );
}
