import SignInForm from "@/features/authentication/components/SignInForm";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold">Sign In</h1>

        <SignInForm />
      </div>
    </main>
  );
}
