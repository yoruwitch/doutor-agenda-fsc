import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import LogInForm from "./components/log-in-form";
import SignUpForm from "./components/sign-up-form";

const AuthenticationPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
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
