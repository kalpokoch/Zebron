const Team = () => {
  const members: { id: number; name: string; role: string; img: string }[] = [
    { id: 0, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/dbb2cea1-6eaf-4f95-9e97-cac88598a1b7.png" },
    { id: 1, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/0f2181d4-b017-4a64-a7a5-a08b44f7c347.png" },
    { id: 2, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/40110f7d-9cd9-44b6-9829-e10398fc4b69.png" },
    { id: 3, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/1ddab3bd-d23c-45be-8fff-2f43055bec63.png" },
    { id: 4, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/a3a11bea-2e54-4e51-a659-9bec8c772e06.png" },
    { id: 5, name: "Liam Patel", role: "Digital Marketing Lead", img: "/lovable-uploads/735f3aec-14c9-44f2-b0d7-63649aa3ae09.png" },
  ];

  return (
    <section id="team" className="container py-16 md:py-24 scroll-mt-24">
      <h2 className="text-4xl md:text-5xl font-semibold mb-10">The Minds Behind The Mission</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article
            key={m.id}
            className="rounded-2xl border bg-card shadow-sm overflow-hidden"
            aria-label={`Team member card for ${m.name}`}
          >
            <img
              src={m.img}
              alt={`${m.name} — ${m.role} at Zebron`}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
