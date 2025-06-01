"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/auth"); // Redirect to auth page after sign out
              },
            },
          })
        }
      >
        Sign out
      </Button>
    </>
  );
};

export default SignOutButton;
