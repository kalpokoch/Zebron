import { ArrowRight } from "lucide-react";

const Results = () => {
  return (
    <section id="results" className="container py-16 md:py-24 space-y-10 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-semibold">Real Results, Real Impact</h2>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Main showcase card */}
        <article className="lg:col-span-2 rounded-[32px] overflow-hidden bg-muted relative shadow-sm aspect-[16/10]">
          <div className="absolute bottom-0 inset-x-0 p-6 text-card-foreground">
            <p className="text-base md:text-lg leading-relaxed drop-shadow">
              Developed And Executed A Month-Long Content Plan Across Instagram And LinkedIn For A B2B Company, Resulting In Increased Follower Growth And Engagement Rates.
            </p>
          </div>
          <div className="absolute top-4 right-4 h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-content-center">
            <ArrowRight />
          </div>
        </article>

        {/* Three slim case cards */}
        {[0, 1, 2].map((i) => (
          <article
            key={i}
            className="rounded-[32px] bg-muted/60 relative shadow-sm overflow-hidden aspect-[9/20]"
          >
            <div className="absolute top-4 right-4 h-10 w-10 rounded-full border grid place-content-center text-foreground/80">
              <ArrowRight />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Results;
