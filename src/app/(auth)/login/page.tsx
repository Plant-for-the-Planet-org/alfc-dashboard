"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import AuthLayout from "~/app/_components/Auth.Layout";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  return (
    <AuthLayout>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="w-64">
            <Input type="email" placeholder="Email" className="mb-2" />
            <Button
              type="button"
              className="w-full"
              onClick={() => {
                console.log("Login");
                router.replace("/dashboard");
              }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
}
