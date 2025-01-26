import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Prompt text is required" },
        { status: 400 }
      );
    }
    console.log("Api is called");

    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: text,
          parameters: {
            // negative_prompt:
            //   "low quality, blurry, distorted, unrealistic, amateur, sketchy",
            num_inference_steps: 50, // Higher steps can improve quality
            guidance_scale: 7.5, // Controls how closely the image follows the prompt
            width: 1024,
            height: 1024, // Higher resolution
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(error, { status: response.status });
    }

    const image = await response.blob();
    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 }
    );
  }
}
