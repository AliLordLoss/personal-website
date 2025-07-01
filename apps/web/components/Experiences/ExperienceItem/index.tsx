import Image, { StaticImageData } from "next/image";

export interface ExperienceItemProps {
  image: string | StaticImageData;
  imageAlt: string;
  title: string;
  company: string;
  date: string;
  children?: Array<JSX.Element> | JSX.Element | string;
  link?: string;
}

export default function ExperienceItem({
  image,
  imageAlt,
  title,
  company,
  date,
  children,
  link,
}: ExperienceItemProps): JSX.Element {
  const Tag = link ? "a" : "div";
  const tagProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className="px-2 mb-2">
      <div className="flex flex-row items-center py-3 text-sm">
        <Tag
          {...tagProps}
          className="bg-secondary p-2 rounded w-16 h-16 flex items-center justify-center"
        >
          <Image src={image} alt={imageAlt} />
        </Tag>
        <div className="flex flex-col justify-center ms-2">
          <div className="font-medium">{title}</div>
          <div className="text-primary">{company}</div>
          <div className="text-primary">{date}</div>
        </div>
      </div>
      <div className="transition-all duration-500 ease-in-out overflow-hidden mb-1 max-h-screen">
        {children}
      </div>
    </div>
  );
}
