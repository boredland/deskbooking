import { Session } from "@supabase/supabase-js";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Auth from "../components/Auth";
import { supabase } from "../utils/supabaseClient";

type Inputs = {
  email: string;
};

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <>
      {!!session ? (
        <>{"You are sooo logged in right now!"}</>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Home;
