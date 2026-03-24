interface HeadingProps {
  title: string;
  subTitle: string;
  paragraph?: string;
}
export const Heading = ({ title, subTitle, paragraph }: HeadingProps) => (
  <section className="my-10">
    <div className="flex items-center">
      <h1 className="font-doto text-2xl font-semibold">{title} </h1>
      <h2 className="ml-4 font-inconsolata text-sm font-medium text-muted-foreground/80">
        {subTitle}
      </h2>
    </div>
    <p className="mt-8 text-justify font-inconsolata text-sm text-muted-foreground">
      {paragraph}
    </p>
  </section>
);
