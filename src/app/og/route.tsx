import { ImageResponse } from "@vercel/og";

export const runtime = "experimental-edge";

export const GET = async ({ url }: Request) => {
  const params = new URL(url).searchParams;
  const title = params.get("title") ?? "";
  const subtitle = params.get("subtitle") ?? "";

  const dmSerifDisplay = await fetch(process.env.FONT_URL).then((res) =>
    res.arrayBuffer(),
  );

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
