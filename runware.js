// runware.js
import { Runware } from "@runware/sdk-js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const runwareRoutes = express.Router();

// Setup Runware SDK
const runware = new Runware({
  apiKey: process.env.RUNWARE_API_KEY,
  timeout: 600000, // 10 minutes for complex video generation
  maxRetries: 30,
  retryDelay: 2000,
});

// Image generation endpoint
runwareRoutes.post("/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;

    const images = await runware.requestImages({
      positivePrompt: "Pixel Art Pokemon Generator: "+prompt,
      model: "rundiffusion:130@100",
      numberResults: 1,
      outputFormat: "JPEG",
      width: 1024,
      height: 1024,
      steps: 33,
      CFGScale: 3,
      scheduler: "Euler Beta",
      includeCost: true,
      outputType: ["URL"],
      outputQuality: 95,
    });

    const imageURL = images[0].imageURL;
    const backgroundRemoved = await runware.removeImageBackground({
      inputImage: imageURL,
    });

    res.json({
      url: imageURL,
      backgroundRemoved: backgroundRemoved.imageURL,
    });
  } catch (error) {
    console.error("Image generation failed:", error);
    res.status(500).json({ error: "Image generation failed" });
  }
});

// Video generation endpoint
runwareRoutes.post("/generate-video", async (req, res) => {
  try {
    const { imageURL, prompt } = req.body;

    const payload = {
      duration: 8,
      fps: 24,
      model: "google:3@1", // Google Veo3
      outputFormat: "mp4",
      height: 1280,
      width: 720,
      numberResults: 1,
      includeCost: true,
      outputQuality: 95,
      providerSettings: {
        google: {
          generateAudio: true,
          enhancePrompt: true,
        },
      },
      frameImages: [{ inputImage: `${imageURL}`, frame: "first" }],
      positivePrompt:
        "idle animation for: " +
        prompt +
        ` Video starts with the pokemon's roar and mating call and then we hear a pokedex, a cartoon machine says in its own words '${prompt}'`,
    };

    // This call handles all async complexity internally
    const response = await runware.videoInference(payload);

    res.json({ url: response[0].videoURL });
  } catch (error) {
    console.error("Video generation failed:", error);
    res.status(500).json({ error: "Video generation failed" });
  }
});

export default runwareRoutes;