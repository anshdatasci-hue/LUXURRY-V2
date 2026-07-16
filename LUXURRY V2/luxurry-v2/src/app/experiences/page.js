const experiences = [
  {
    id: 1,
    title: "Virtual Boutique",
    description:
      "Step inside an immersive luxury boutique and explore collections in an elegant digital environment.",
    status: "Available",
  },
  {
    id: 2,
    title: "Luxury Brand Heritage",
    description:
      "Experience the history, milestones, and craftsmanship behind the world's greatest luxury maisons.",
    status: "Available",
  },
  {
    id: 3,
    title: "Private Collection Preview",
    description:
      "Discover exclusive limited-edition collections curated for premium members.",
    status: "Coming Soon",
  },
  {
    id: 4,
    title: "AR Product Preview",
    description:
      "Visualize selected luxury products in your own space using augmented reality.",
    status: "Coming Soon",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-[#3A3530]">
          Luxury Experiences
        </h1>

        <p className="mt-3 max-w-3xl text-[#7C6B58]">
          LUXURRY goes beyond shopping by delivering immersive digital
          experiences inspired by the world's finest luxury houses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="rounded-2xl border border-[#E5DED6] bg-white p-8 transition hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-[#3A3530]">
                {experience.title}
              </h2>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  experience.status === "Available"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#F5F3EF] text-[#7C6B58]"
                }`}
              >
                {experience.status}
              </span>
            </div>

            <p className="mt-5 leading-7 text-[#6A625A]">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
