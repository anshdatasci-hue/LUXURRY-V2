"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const supabase = createClient();
  const router = useRouter();


  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log("Initial session:", session);

      setSession(session);
      setUser(session?.user ?? null);
    }

    getSession();

    const {
  data: { subscription },
} = supabase.auth.onAuthStateChange((event, session) => {
  console.log("AUTH EVENT:", event);
  console.log("SESSION:", session);

  setSession(session);
  setUser(session?.user ?? null);

  router.refresh();
});

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ user, session }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}