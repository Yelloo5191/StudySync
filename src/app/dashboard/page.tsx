import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import FormJoin from "./Form";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return (
    <div className="w-screen h-screen bg-dark_light p-8">
      <FormJoin />
    </div>
  );
}
