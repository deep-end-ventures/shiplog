import { NextResponse } from "next/server";
import { sampleReleases, categoryConfig } from "@/lib/changelog-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get("limit") || "5", 10);
  const theme = searchParams.get("theme") || "dark";

  const releases = sampleReleases.slice(0, limit);

  return NextResponse.json({
    releases,
    categoryConfig,
    theme,
  });
}
