import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/supabase/auth";

export default async function UpgradePage() {
  const user = await requireUser();
  //   const supabase = await createClient();

  async function upgradeMembership() {
    "use server";

    const supabase = await createClient();

    const { error } = await supabase
      .from("profiles")
      .update({
        membership: "Premium",
      })
      .eq("id", user.id);

    if (error) {
      throw new Error(error.message);
    }

    redirect("/profile?membership=upgraded");
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl items-center justify-center px-6">
      <div className="w-full rounded-3xl border bg-white p-10 text-center shadow-sm">
        <h1 className="text-4xl font-light">Upgrade to Premium</h1>

        <p className="mt-4 text-neutral-600">
          Payment integration is coming soon.
        </p>

        <p className="mt-2 text-neutral-600">
          Click below to simulate a successful upgrade.
        </p>

        <form action={upgradeMembership}>
          <button className="mt-8 w-full rounded-xl bg-[#C8A96B] py-3 font-semibold text-black transition hover:opacity-90">
            Upgrade Now
          </button>
        </form>
      </div>
    </main>
  );
}
