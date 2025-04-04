import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../supabase/client";

type AuthContextType = {
  signInWithGoogle: () => Promise<any>;
  signInWithPassword: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  user: any;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // ✅ Cargar sesión al iniciar la app
  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (data.session) {
        setUser(data.session.user);
      }
      setLoading(false); // Ya se cargó la sesión (exista o no)
    };
    fetchSession();

    // ✅ Escuchar cambios de sesión
    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      console.log('event ', _event, 'session ', session);
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signUp = async (email: string, password: string) => {
    const { data, error } = await client.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  };

  const signInWithGoogle = async () => {
    const { data, error } = await client.auth.signInWithOAuth({ provider: "google" });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    const { error } = await client.auth.signOut();
    if (error) throw error;
    setUser(null);
    navigate("/Login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ signUp, signInWithPassword, signInWithGoogle, signOut, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => useContext(AuthContext);
