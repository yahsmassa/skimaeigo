"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";

export default function AuthRedirect() {
  const router = useRouter();
  const [user] = useAtom(userAtom, { store });

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return null;
}