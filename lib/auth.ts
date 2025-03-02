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
const getUserData = async (firebaseUser: FirebaseUser): Promise<User> => {
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
export const signInWithGoogle = async (): Promise<User> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  // IDトークンを取得
  const idToken = await result.user.getIdToken();
  // Server Actionを呼び出してセッションCookieを作成

  return getUserData(result.user);
};

// Appleでサインイン
export const signInWithApple = async (): Promise<User> => {
  const provider = new OAuthProvider("apple.com");
  const result = await signInWithPopup(auth, provider);
  // IDトークンを取得
  const idToken = await result.user.getIdToken();
  // Server Actionを呼び出してセッションCookieを作成
  return getUserData(result.user);
};

// メールとパスワードでサインイン
export const signInWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  // IDトークンを取得
  const idToken = await result.user.getIdToken();
  // Server Actionを呼び出してセッションCookieを作成
  return getUserData(result.user);
};

// サインアップ
export const signUp = async (
  email: string,
  password: string
): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return getUserData(result.user);
};

// パスワードリセット
export const resetPassword = async (email: string): Promise<void> => {
  await sendPasswordResetEmail(auth, email);
};

// サインアウト
export const signOut = async (): Promise<void> => {
  // await firebaseSignOut(auth);
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
