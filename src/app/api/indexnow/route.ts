import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blog-data";

const INDEXNOW_KEY = "4f11746b5428ba5244f19bb03a7667e0";
const BASE_URL = "https://shiplog.deependventures.com";

function getAllUrls(): string[] {
  const blogUrls = blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`);

  return [
    BASE_URL,
    `${BASE_URL}/changelog`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/docs`,
    ...blogUrls,
    `${BASE_URL}/ai-changelog-generator`,
    `${BASE_URL}/automated-release-notes`,
    `${BASE_URL}/changelog-widget`,
  ];
}

export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    urls: getAllUrls(),
    host: new URL(BASE_URL).host,
  });
}

export async function POST() {
  const urls = getAllUrls();
  const host = new URL(BASE_URL).host;

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    const status = response.status;
    let body = "";
    try {
      body = await response.text();
    } catch {
      // empty response is fine for 200/202
    }

    return NextResponse.json({
      success: status === 200 || status === 202,
      status,
      body,
      urlsSubmitted: urls.length,
      urls,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
