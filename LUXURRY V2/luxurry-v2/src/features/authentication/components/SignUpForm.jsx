"use client";

import { useState } from "react";
import { signUp } from "../actions";

export default function SignUpForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData) {
    const result = await signUp(formData);

    setMessage(result.message);
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full rounded border p-3"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="w-full rounded border p-3"
      />

      <button
        type="submit"
        className="w-full rounded bg-black p-3 text-white"
      >
        Sign Up
      </button>

      {message && (
        <p className="text-sm text-green-600">
          {message}
        </p>
      )}
    </form>
  );
}