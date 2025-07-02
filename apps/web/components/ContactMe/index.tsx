import {
  EnvelopeIcon,
  GithubSquareIcon,
  LinkedinIcon,
  PhoneIcon,
  TelegramIcon,
  XIcon,
} from "../Icons";

export default function ContactMe() {
  return (
    <>
      <h3 className="my-4 text-3xl font-bold">Contact Me</h3>
      <div className="flex flex-col items-center gap-4 lg:gap-8 lg:items-start">
        <a
          href="mailto:a.a.ghanati@gmail.com"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <EnvelopeIcon className="text-primary" width={24} height={24} />
          </div>
          a.a.ghanati@gmail.com
        </a>
        <a
          href="tel:+31687889058"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <PhoneIcon className="text-primary" width={24} height={24} />
          </div>
          +31687889058
        </a>
        <a
          href="https://linkedin.com/in/ali-asghar-ghanati"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <LinkedinIcon className="text-primary" width={24} height={24} />
          </div>
          ali-asghar-ghanati
        </a>
        <a
          href="https://github.com/AliLordLoss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <GithubSquareIcon className="text-primary" width={24} height={24} />
          </div>
          AliLordLoss
        </a>
        <a
          href="https://x.com/alilordloss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <XIcon className="text-primary" width={24} height={24} />
          </div>
          @alilordloss
        </a>
        <a
          href="https://t.me/AliLordLoss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary w-64"
        >
          <div className="p-2 rounded w-10 h-10">
            <TelegramIcon className="text-primary" width={24} height={24} />
          </div>
          @AliLordLoss
        </a>
      </div>
    </>
  );
}
