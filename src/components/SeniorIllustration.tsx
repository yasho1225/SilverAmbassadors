export function SeniorIllustration() {
  return (
    <svg
      className="mission-portrait"
      viewBox="0 0 300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Line drawing of a smiling older woman wearing glasses"
    >
      <path
        d="M44 164C34 92 80 39 148 37c70-2 116 51 112 122-3 68-41 115-107 117C86 278 53 230 44 164Z"
        fill="var(--mist)"
        fillOpacity=".7"
      />
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Silver hair, loosely swept back into a bun. */}
        <path
          d="M107 84c-17-19-7-44 17-45 13-1 23 6 27 16 32-4 58 18 59 53 1 21-6 40-14 52l-94-1c-13-16-19-36-13-54 3-9 9-16 18-21Z"
          fill="var(--silver)"
        />
        <path d="M109 73c-8-11-3-24 9-25m-12 36c5-13 17-22 32-24m-30 35c8-16 23-26 43-28m-35 37c11-5 25-17 32-28 9 17 27 22 46 22" />
        <path d="M113 101c-9 9-12 21-11 33m88-31c6 10 8 21 7 33" />
        {/* Face and ears. */}
        <path
          d="M107 118c-2 17-2 38 3 53 6 21 22 36 40 36 19 0 35-15 41-36 4-15 5-36 1-53-21-1-38-10-47-23-10 12-23 20-38 23Z"
          fill="var(--mist)"
        />
        <path d="M106 139c-15-8-15 20 1 23m87-23c15-8 15 20-1 23m-89-17c-5-3-5 7-1 9m94-9c5-3 5 7 1 9" />
        {/* Rounded glasses and expressive eyes. */}
        <path d="M109 136c6-3 22-4 31 0l-1 15c-5 8-20 8-26 0l-4-15Zm51 0c9-4 25-3 31 0l-4 15c-6 8-21 8-26 0l-1-15Zm-20 3c6-3 14-3 20 0m-56-2 5 2m82 0 6-2" />
        <path d="M118 143c3-3 7-3 10 0m44 0c3-3 7-3 10 0m-64-17c5-3 10-3 15-1m34 0c5-2 10-2 15 1m-35 21-4 17c2 3 6 4 10 2" />
        {/* A warm smile, with understated laugh lines. */}
        <path d="M133 178c10 10 24 10 34 0m-29 3c7 2 17 2 24 0m-20 12c5 2 11 2 16 0m-34-27-5 7m57-7 5 7m-65-12 9 2m50 0 9-2m-44-47c6-2 14-2 20 0" />
        <path d="M133 201v20m34-20v20" />
        {/* Open cardigan and soft collar. */}
        <path
          d="m132 216-37 14c-21 8-32 28-36 63h182c-4-35-15-55-36-63l-37-14c-3 13-29 17-36 0Z"
          fill="var(--silver)"
        />
        <path d="m128 218 22 26 22-26m-45 1-10 30 17-2-9 12 14 34m34-74 10 30-17-2 9 12-14 34m-11-49v49m-65-36-5 36m135-36 5 36" />
        <circle cx="158" cy="262" r="1.5" />
        <circle cx="158" cy="280" r="1.5" />
        <path d="M47 294h206" strokeOpacity=".35" />
      </g>
    </svg>
  );
}
