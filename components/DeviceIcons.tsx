import React from "react";

type IconProps = {
  className?: string;
};

export const DeviceLaptopIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 200 160"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="ラップトップ"
  >
    <defs>
      <linearGradient id="lap-body" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="lap-screen" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.25" />
      </filter>
    </defs>
    {/* screen frame */}
    <rect
      x="25"
      y="20"
      rx="8"
      ry="8"
      width="150"
      height="100"
      fill="url(#lap-body)"
      filter="url(#softShadow)"
    />
    {/* screen panel */}
    <rect x="35" y="30" rx="6" ry="6" width="130" height="80" fill="url(#lap-screen)" />
    {/* camera dot */}
    <circle cx="100" cy="34" r="2.5" fill="#64748b" />
    {/* base */}
    <rect x="15" y="124" rx="6" ry="6" width="170" height="16" fill="url(#lap-body)" />
    {/* touch pad */}
    <rect x="90" y="127" width="20" height="8" rx="2" ry="2" fill="#e2e8f0" />
  </svg>
);

export const DeviceTabletIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 140 180"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="タブレット"
  >
    <defs>
      <linearGradient id="tab-body" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="tab-screen" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect x="15" y="10" rx="14" ry="14" width="110" height="160" fill="url(#tab-body)" />
    <rect x="25" y="24" rx="10" ry="10" width="90" height="132" fill="url(#tab-screen)" />
    <circle cx="70" cy="18" r="2.5" fill="#64748b" />
  </svg>
);

export const DevicePhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    viewBox="0 0 110 190"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="スマートフォン"
  >
    <defs>
      <linearGradient id="ph-body" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="ph-screen" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <rect x="15" y="8" rx="18" ry="18" width="80" height="174" fill="url(#ph-body)" />
    <rect x="23" y="28" rx="12" ry="12" width="64" height="134" fill="url(#ph-screen)" />
    <rect x="45" y="16" rx="2" ry="2" width="20" height="3" fill="#94a3b8" />
    <circle cx="55" cy="170" r="5" fill="#94a3b8" />
  </svg>
);


