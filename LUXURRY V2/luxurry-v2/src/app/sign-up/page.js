import SignUpForm from "@/features/authentication/components/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-3xl font-bold">Create Account</h1>

        <SignUpForm />
      </div>
    </main>
  );
}
