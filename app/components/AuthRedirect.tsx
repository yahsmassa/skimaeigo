"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";

export default function AuthRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user] = useAtom(userAtom, { store });

  useEffect(() => {
    // from=dashboard や noRedirect=1 が付与されている場合はリダイレクト抑止
    const from = searchParams.get("from");
    const noRedirect = searchParams.get("noRedirect");
    const shouldSkip = from === "dashboard" || noRedirect === "1";

    if (user && !shouldSkip) {
      router.push("/dashboard");
    }
  }, [user, router, searchParams]);

  return null;
}