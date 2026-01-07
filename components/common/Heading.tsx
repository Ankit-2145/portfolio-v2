interface HeadingProps {
  title: string;
  subTitle: string;
}
export const Heading = ({ title, subTitle }: HeadingProps) => (
  <section className="my-12 flex items-center">
    <h1 className="font-doto text-2xl font-semibold">{title} </h1>
    <h2 className="font-inconsolata text-sm text-muted-foreground/80 font-medium ml-4">
      {subTitle}
    </h2>
  </section>
);
