import { ImageResponse } from "next/og";

import baseUrl from "@/utils/baseUrl";

export const runtime = "edge";

export const GET = async ({ url }: Request) => {
  const params = new URL(url).searchParams;
  const title = params.get("title") ?? "";
  const subtitle = params.get("subtitle") ?? "";

  const dmSerifDisplay = await fetch(
    new URL(
      `${baseUrl}/fonts/dm-serif-display/DMSerifDisplay-Regular.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="w-full h-full flex flex-col justify-center px-12 py-8 bg-stone-50">
        <h1 tw="text-9xl font-extrabold">{title}</h1>
        <h2 tw="text-5xl">{subtitle}</h2>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: dmSerifDisplay,
          name: "DM Serif Display",
          style: "normal",
        },
      ],
    },
  );
};
