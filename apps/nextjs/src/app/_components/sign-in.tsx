"use client";

import { useState } from "react";

import { signIn } from "@project-name/auth";
import { Button } from "@project-name/ui/button";
import { Input } from "@project-name/ui/input";
import { Label } from "@project-name/ui/label";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-md">
      <div>
        <p className="text-lg md:text-xl">Sign In</p>
        <p className="text-xs md:text-sm">
          Enter your email below to login to your account
        </p>
      </div>
      <div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>

            <Input
              id="password"
              type="password"
              placeholder="password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
            onClick={async () => {
              await signIn.email(
                {
                  email,
                  password,
                },
                {
                  onRequest: () => {
                    setLoading(true);
                  },
                  onResponse: () => {
                    setLoading(false);
                  },
                },
              );
            }}
          >
            {loading ? "Loading" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}
