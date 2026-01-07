interface HeadingProps {
  title: string;
  subTitle: string;
  paragraph?: string;
}
export const Heading = ({ title, subTitle, paragraph }: HeadingProps) => (
  <section className="my-10">
    <div className="flex items-center">
      <h1 className="font-doto text-2xl font-semibold">{title} </h1>
      <h2 className="font-inconsolata text-sm text-muted-foreground/80 font-medium ml-4">
        {subTitle}
      </h2>
    </div>
    <p className="font-inconsolata text-base text-justify text-muted-foreground mt-8">
      {paragraph}
    </p>
  </section>
);
