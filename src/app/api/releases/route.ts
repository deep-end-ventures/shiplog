import { NextResponse } from "next/server";
import { sampleReleases } from "@/lib/changelog-data";

export async function GET() {
  return NextResponse.json({
    releases: sampleReleases,
    total: sampleReleases.length,
  });
}
