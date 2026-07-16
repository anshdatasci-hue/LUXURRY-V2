import { Gem, ShieldCheck, Sparkles, Globe } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Luxury First",
    description:
      "Every experience is designed around timeless elegance, craftsmanship, and exclusivity.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity",
    description:
      "We celebrate genuine luxury brands and their rich heritage through curated content.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Minimal design, refined interactions, and a seamless customer journey are at the heart of LUXURRY.",
  },
  {
    icon: Globe,
    title: "Global Inspiration",
    description:
      "Inspired by the world's finest luxury maisons, crafted for a modern digital audience.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-5xl font-semibold tracking-wide text-[#3A3530]">
          About LUXURRY
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6A625A]">
          LUXURRY is a luxury discovery and commerce platform designed to
          connect people with the world's most prestigious brands through
          elegant design, curated storytelling, and a premium digital
          experience.
        </p>
      </section>

      {/* Values */}
      <section className="mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-[#E5DED6] bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <Icon size={34} className="text-[#C8A96B]" />

                <h2 className="mt-5 text-2xl font-semibold text-[#3A3530]">
                  {value.title}
                </h2>

                <p className="mt-4 leading-7 text-[#6A625A]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-20 rounded-3xl bg-[#3A3530] px-10 py-14 text-center text-white">
        <h2 className="text-3xl font-semibold">
          Crafted for Luxury Enthusiasts
        </h2>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-[#E8E1D7]">
          Our mission is to create a refined digital destination where luxury
          brands, timeless craftsmanship, and exceptional user experience come
          together.
        </p>
      </section>
    </main>
  );
}
