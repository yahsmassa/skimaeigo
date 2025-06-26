"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-orange-500 font-bold text-2xl">
            共通テスト英語対策アプリ（Web版）
          </span>
          <img
            src="/icons/icon-192x192.png"
            alt="アプリアイコン"
            className="h-8 w-8 ml-2"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="hover:text-blue-600 transition-colors"
          >
            特徴
          </a>
          <a
            href="#comparison"
            className="hover:text-blue-600 transition-colors"
          >
            アプリが最強な理由
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-600 transition-colors"
          >
            お客様の声
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 transition-colors"
          >
            料金
          </a>
          <a
            href="/about"
            className="hover:text-blue-600 transition-colors"
          >
            アプリについて
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <ChevronDown
              size={24}
              className={`transform transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-3">
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors py-2"
            >
              特徴
            </a>
            <a
              href="#comparison"
              className="hover:text-blue-600 transition-colors py-2"
            >
              アプリが最強な理由
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 transition-colors py-2"
            >
              お客様の声
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition-colors py-2"
            >
              料金
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}