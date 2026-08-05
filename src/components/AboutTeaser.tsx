import Link from "next/link";

export function AboutTeaser() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[900px] flex-col items-center px-6 py-16 text-center lg:px-8 lg:py-20">
        <h2 className="type-h2 text-foreground">
          About Us
        </h2>
        <p className="type-lead mt-6 text-foreground">
          Global Health Alliance was incorporated on April 13, 2021, in the
          State of Minnesota. GHA is a grassroots nonprofit organization that
          provides services to tackle disparities and inequality in healthcare
          domestically. GHA also provides medical necessities to enhance the
          state of healthcare globally.
        </p>
        <Link
          href="/who-we-are/about"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-gha-primary px-8 text-[13px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-gha-primary-hover"
        >
          About us
        </Link>
      </div>
    </section>
  );
}
