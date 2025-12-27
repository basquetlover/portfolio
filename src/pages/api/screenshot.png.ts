import type { APIRoute } from "astro";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

export const GET: APIRoute = async ({ url }) => {
  const targetUrl = url.searchParams.get("url");

  if (!targetUrl) {
    return new Response("Missing url parameter", { status: 400 });
  }

  if (!targetUrl.startsWith("https://")) {
    return new Response("Invalid URL", { status: 400 });
  }

  let browser;

  try {
    // Lanzar Puppeteer usando Chromium de @sparticuz
    browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1280, height: 800 },
      executablePath: await chromium.executablePath(),
      headless: true
    });

    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Astro Screenshot Bot)");

    await page.goto(targetUrl, { waitUntil: "networkidle2", timeout: 30000 });

    const screenshot = await page.screenshot({ type: "png" });

    return new Response(new Uint8Array(screenshot), {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600"
      }
    });

  } catch (error) {
    console.error("Screenshot error:", error);
    return new Response("Error generating screenshot", { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
