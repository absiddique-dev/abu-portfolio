"use client";
import { useState } from "react";
import Navbar from "../custom-ui/Navbar";

export default function TextToImage() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateImage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/text-to-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: prompt }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageUrl(url);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Image generation failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#12071F] min-h-screen">
      <Navbar />
      <div className="p-4 pt-[90px] px-5 md:px-11 lg:px-[200px]">
        <h1 className="text-xl font-bold mb-4">Text-to-Image Generator</h1>
        <div className="flex flex-col justify-between gap-3 items-center">
          <textarea
            className="w-full p-2 border rounded text-black bg-gray-100 h-28"
            placeholder="Enter your prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isLoading}
          />

          <button
            className={`px-4 py-2 rounded text-nowrap w-full ${
              isLoading ? "bg-gray-500" : "bg-blue-500 text-white"
            }`}
            onClick={generateImage}
            disabled={isLoading || !prompt}
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {imageUrl && (
          <div className="flex justify-center items-center">
            <div className="mt-4 w-1/2 aspect-square">
              <h2 className="text-lg font-bold mb-2">Generated Image:</h2>
              <img
                src={imageUrl}
                alt="Generated"
                className="border rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
