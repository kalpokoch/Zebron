export default function AboutRoadmap() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">What We Do</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Cards/items describing core capabilities */}
          <article className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-medium">Capability 1</h3>
            <p className="mt-2 opacity-80">Brief description.</p>
          </article>
          <article className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-medium">Capability 2</h3>
            <p className="mt-2 opacity-80">Brief description.</p>
          </article>
          <article className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-xl font-medium">Capability 3</h3>
            <p className="mt-2 opacity-80">Brief description.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
