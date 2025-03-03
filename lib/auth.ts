"use client";

import {
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut as firebaseSignOut,
  User as FirebaseUser,
} from "firebase/auth";

import { auth, app } from "./firebase";

// Firebaseの設定
export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  isPremium: boolean;
}

// ユーザー情報を取得する関数
export const getUserData = async (
  firebaseUser: FirebaseUser
): Promise<User> => {
  const token = await firebaseUser.getIdTokenResult();
  const isPremium = token.claims.premium === true;

  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    isPremium,
  };
};

// Googleでサインイン
export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

// Appleでサインイン
export const signInWithApple = async (): Promise<void> => {
  const provider = new OAuthProvider("apple.com");
  await signInWithPopup(auth, provider);
};

// メールとパスワードでサインイン
export const signInWithEmail = async (
  email: string,
  password: string
): Promise<void> => {
  await signInWithEmailAndPassword(auth, email, password);
};

// サインアップ
export const signUp = async (
  email: string,
  password: string
): Promise<void> => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// パスワードリセット
export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};

// サインアウト
export const signOut = async (): Promise<void> => {
  await firebaseSignOut(auth);
};

// プレミアムステータスを確認
export const checkPremiumStatus = async (): Promise<boolean> => {
  const user = auth.currentUser;
  if (!user) return false;

  const token = await user.getIdTokenResult(true);
  return token.claims.premium === true;
};

// Server Actionsで使用するための関数
export const getCurrentUser = async (): Promise<User | null> => {
  const user = auth.currentUser;
  if (!user) return null;

  return getUserData(user);
};
