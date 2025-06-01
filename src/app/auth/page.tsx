import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";

import LogInForm from "./components/log-in-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <header className="mr-4 flex flex-col">
        <div className="self-center">
          <Image
            src="/assets/logo-form.svg"
            alt="Logo"
            width={250}
            height={250}
          />
        </div>
        <h1 className="text-2xl font-bold">Manage your clinics right here</h1>
        <p className="text-gray-600">Please log in or register to continue</p>
      </header>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="mb-4 grid w-full grid-cols-2">
          <TabsTrigger value="login" className="rounded-md hover:bg-gray-300">
            Login
          </TabsTrigger>
          <TabsTrigger value="register" className="rounded-md hover:bg-gray-300">
            Register
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LogInForm />
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default AuthenticationPage;
