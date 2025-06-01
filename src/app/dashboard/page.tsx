import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user) {
    redirect("/auth");
  }
  return (
    <>
      <h1>teste</h1>
      <h1>{session?.user?.email}</h1>
      <h1>{session?.user?.name}</h1>
      <SignOutButton />
    </>
  );
};

export default DashboardPage;
