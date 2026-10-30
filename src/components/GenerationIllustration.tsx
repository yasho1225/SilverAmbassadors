export function GenerationIllustration({
  generation,
}: {
  generation: "students" | "seniors";
}) {
  const students = generation === "students";
  return (
    <svg
      className="generation-art"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {students ? (
          <>
            {/* Relaxed shoulders and a narrower waist keep the seated pose natural. */}
            <path
              d="M283 139c-20 5-34 23-37 49l8 57h91l-6-61c-2-23-13-38-31-45l-12 12Z"
              fill="var(--figure-shirt)"
            />
            <path d="m283 139 13 12 12-12m-39 19-12 30m70-33 12 27m-84 49 7-19m72 19-6-17" />
            {/* Soft curls and a clear, open expression. */}
            <path
              d="M269 80c-10-11-9-28 2-35 3-12 17-18 28-13 11-8 25-3 30 8 14 2 22 17 16 29l-11 24-64 3Z"
              fill="var(--figure-paper)"
            />
            <path
              d="M274 75c13 0 25-10 31-20 6 11 16 18 29 21l-2 25c-3 20-16 33-31 32-16-1-27-16-28-34Z"
              fill="var(--figure-paper)"
            />
            <path d="M278 53c5-8 14-11 22-8m-27 42c-9-4-10 12 1 16m58-17c9-4 10 12-1 16m-45-14c4-3 8-3 12 0m14 0c4-3 8-3 12 0m-22 4-3 12 6 2m-17 11c8 6 18 6 25-2m-25 15v14m25-14v14" />
            <circle
              cx="294"
              cy="93"
              r="1.2"
              fill="currentColor"
              stroke="none"
            />
            <circle
              cx="318"
              cy="93"
              r="1.2"
              fill="currentColor"
              stroke="none"
            />
            {/* The tablet is one object, split exactly at the card seam. */}
            <g transform="rotate(-8 400 210)">
              <rect
                x="367"
                y="184"
                width="66"
                height="48"
                rx="5"
                fill="var(--figure-paper)"
              />
              <path d="M374 191h52v32h-52Z" strokeOpacity=".65" />
              <circle
                cx="400"
                cy="227"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </g>
            {/* Bent elbows keep both arms close to the body. */}
            <path
              d="m333 167 22 25 23 6c8-2 13-1 16 3l-6 7-16 1-30-8-25-23"
              fill="var(--figure-paper)"
            />
            <path
              d="m260 171-9 24c-3 8 0 15 8 20l28 15 36-1 9-6-9-7-30 1-19-14 9-22"
              fill="var(--figure-paper)"
            />
            <path
              d="m378 198 9-4m-5 8 10 1m-70 13 10-1m-39 14 12-1"
              strokeWidth="1.3"
            />
            <path
              className="connection-trace"
              d="M242 245H400"
              pathLength="1"
              strokeDasharray="1"
            />
            <path d="M252 253h148m-119-8v41" strokeOpacity=".5" />
          </>
        ) : (
          <>
            <path
              d="M88 140c-19 5-31 22-31 51l7 54h89l-5-54c-2-25-14-43-35-51l-13 14Z"
              fill="var(--figure-shirt)"
            />
            <path d="m88 140 12 14 13-14m-24 3-5 26 12-2-5 16 7 62m15-102 6 26-12-2 6 16-7 62" />
            {/* Silver hair and softly rounded glasses distinguish the older adult. */}
            <path
              d="M65 80c-9-10-7-25 3-31-1-14 13-24 25-19 11-9 27-6 32 6 15-1 26 12 21 25 8 11 3 24-6 30l-13 14-61-7Z"
              fill="var(--figure-paper)"
            />
            <path
              d="M69 74c11-2 23-11 30-23 8 12 20 20 35 23l-2 26c-2 20-16 34-32 33-16 0-29-15-30-34Z"
              fill="var(--figure-paper)"
            />
            <path d="M73 52c5-10 15-14 24-12m-28 47c-9-4-10 12 1 16m62-17c9-4 10 12-1 16m-45 26v16m27-16v16m-31-67c5-2 10-2 15 0m8 0c5-2 10-1 15 1" />
            <rect x="75" y="87" width="21" height="17" rx="6" />
            <rect x="103" y="87" width="21" height="17" rx="6" />
            <path d="M96 92c2-2 5-2 7 0m-32-2 4 2m49 0 7-3m-31 11-3 12 6 1m-16 7c8 6 17 6 24-2m-32-10 7 1m30-2 7-2m-35-38c6-2 14-2 20 0" />
            <circle cx="84" cy="95" r="1.2" fill="currentColor" stroke="none" />
            <circle
              cx="112"
              cy="95"
              r="1.2"
              fill="currentColor"
              stroke="none"
            />
            <g transform="rotate(-8 0 210)">
              <rect
                x="-33"
                y="184"
                width="66"
                height="48"
                rx="5"
                fill="var(--figure-paper)"
              />
              <path d="M-26 191h52v32h-52Z" strokeOpacity=".65" />
              <circle cx="0" cy="227" r="1" fill="currentColor" stroke="none" />
            </g>
            <path
              d="m65 167-22 25-23 6c-8-2-13-1-16 3l6 7 16 1 30-8 25-23"
              fill="var(--figure-paper)"
            />
            <path
              d="m140 171 9 24c3 8 0 15-8 20l-28 15-36-1-9-6 9-7 30 1 19-14-9-22"
              fill="var(--figure-paper)"
            />
            <path
              d="m20 198-9-4m5 8-10 1m72 13-10-1m39 14-12-1"
              strokeWidth="1.3"
            />
            <path
              className="connection-trace"
              d="M0 245H158"
              pathLength="1"
              strokeDasharray="1"
            />
            <path d="M0 253h148m-29-8v41" strokeOpacity=".5" />
          </>
        )}
      </g>
    </svg>
  );
}
