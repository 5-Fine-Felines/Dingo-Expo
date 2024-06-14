import { supabase } from "@/utils/supabase";

const signOut = async () => {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.error(error);
    } else {
      console.log('User signed out');
    }
  };
  