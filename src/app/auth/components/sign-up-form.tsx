"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

const SignUpForm = () => {
  // The following schema is used to validate the registration form.
  const registerSchema = z.object({
    name: z.string().trim().min(1, "Name must be at least 1 character long"),
    email: z.string().trim().min(1).email("Invalid email address"),
    password: z
      .string()
      .trim()
      .min(6, "Password must be at least 6 characters long"),
  });

  // Use the useForm hook to create a form instance with validation.

  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
        callbackURL: "/dashboard", // Redirect after successful registration (future implementation)
      },
      {
        onSuccess: () => {
          router.push("/dashboard"); // Redirect to dashboard after successful registration
        },
      },
    );
  }

  return (
    <>
      <Card>
        <Form {...form}>
          <form
            // this form function was created just before this line
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <CardHeader>
              <CardTitle>Create account</CardTitle>
              <CardDescription>
                Create your new account to get started.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Evelyn" type="text" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: evelyn@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your password"
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Create account"
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default SignUpForm;
