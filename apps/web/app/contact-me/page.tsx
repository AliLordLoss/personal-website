import {
  EnvelopeIcon,
  GithubSquareIcon,
  LinkedinIcon,
  PhoneIcon,
  TelegramIcon,
  XIcon,
} from "@/components/Icons";

export default function Page(): JSX.Element {
  return (
    <main className="p-4">
      <div className="my-4 ms-2 text-xl font-bold">Contact Me</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <a
          href="mailto:a.a.ghanati@gmail.com"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <EnvelopeIcon className="text-primary" width={24} height={24} />
          </div>
          a.a.ghanati@gmail.com
        </a>
        <a
          href="tel:+989921550548"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <PhoneIcon className="text-primary" width={24} height={24} />
          </div>
          +989921550548
        </a>
        <a
          href="https://linkedin.com/in/ali-asghar-ghanati"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <LinkedinIcon className="text-primary" width={24} height={24} />
          </div>
          ali-asghar-ghanati
        </a>
        <a
          href="https://github.com/AliLordLoss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <GithubSquareIcon className="text-primary" width={24} height={24} />
          </div>
          AliLordLoss
        </a>
        <a
          href="https://x.com/alilordloss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <XIcon className="text-primary" width={24} height={24} />
          </div>
          @alilordloss
        </a>
        <a
          href="https://t.me/AliLordLoss"
          target="_blank"
          className="flex items-center gap-2 bg-secondary p-4 rounded-xl border border-primary"
        >
          <div className="p-2 rounded w-10 h-10">
            <TelegramIcon className="text-primary" width={24} height={24} />
          </div>
          @AliLordLoss
        </a>
      </div>
    </main>
  );
}
