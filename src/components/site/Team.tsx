import Liam0 from "@/assets/images/dbb2cea1-6eaf-4f95-9e97-cac88598a1b7.png";
import Liam1 from "@/assets/images/1ddab3bd-d23c-45be-8fff-2f43055bec63.png";
import Liam2 from "@/assets/images/a3a11bea-2e54-4e51-a659-9bec8c772e06.png";
import Liam3 from "@/assets/images/735f3aec-14c9-44f2-b0d7-63649aa3ae09.png";
import Liam4 from "@/assets/images/0f2181d4-b017-4a64-a7a5-a08b44f7c347.png";
import Liam5 from "@/assets/images/40110f7d-9cd9-44b6-9829-e10398fc4b69.png";

const Team = () => {
  const members: { id: number; name: string; role: string; img: string }[] = [
    { id: 0, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam0 },
    { id: 1, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam1 },
    { id: 2, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam2 },
    { id: 3, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam3 },
    { id: 4, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam4 },
    { id: 5, name: "Liam Patel", role: "Digital Marketing Lead", img: Liam5 },
  ];

  return (
    <section id="team" className="container py-16 md:py-24 scroll-mt-24">
      <h2 className="text-4xl md:text-6xl font-semibold mb-32 text-center">
        The Minds{" "}
        <span className="text-muted-foreground ">
          Behind The Mission
        </span>
      </h2>

      <div className="grid gap-40 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <article
            key={m.id}
            className="rounded-2xl border bg-card shadow-sm overflow-hidden"
            style={{ boxShadow: 'inset 0 -10px 10px -10px rgba(0,0,0,0.2)' }}
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
