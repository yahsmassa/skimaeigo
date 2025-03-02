import { atom } from "jotai";
import { User } from "@/lib/auth";

export const userAtom = atom<User | null>(null);
