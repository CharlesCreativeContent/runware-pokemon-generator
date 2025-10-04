# Runware Pokémon Generator - [Watch Video](https://youtu.be/oQU5E0bBPYQ)

[<img src="https://github.com/CharlesCreativeContent/runware-pokemon-generator/blob/main/public/runware.gif?raw=true" alt="Runware" width="100%" />](https://youtu.be/oQU5E0bBPYQ)


> Generate **Pokémon-inspired images and videos** using the [Runware SDK](https://docs.runware.ai) with a lightweight Express.js server. Runware SDK is used to run AI image generation with the Runware API, powered by the RunWare inference platform. It also allows the use of an existing library of more than 150k models, including any model or LoRA from the CivitAI gallery. The API also supports upscaling, background removal, inpainting, outpainting, ControlNets, and more. Visit the Runware site for [detailed feature breakdown](https://runware.ai/features/).

---

## 🔑 Get API access

For an API Key and free trial credits, [create a free account](https://my.runware.ai/) with [Runware](https://runware.ai)


## 🚀 Deploy with Vercel

Click below to clone and deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CharlesCreativeContent/runware-pokemon-generator&env=RUNWARE_API_KEY&envDescription=Set%20your%20Runware%20API%20key%20and%20custom%20port.&envLink=https://docs.runware.ai/&demo-image=https://shawncharles.com/images/runware.png)


## 📦 Installation (Local Development)

Clone the repo:

```bash
git clone https://github.com/CharlesCreativeContent/runware-pokemon-generator.git
cd runware-pokemon-generator
```

Install Runware SDK and packages:

```bash
npm install
```

Add API-Key to environment variables:

```bash
export RUNWARE_API_KEY="your-runware-api-key"
```

Run local server:

```bash
node server.js
```




## 🌟 Features (in app /runware.js file)

- Image and Video Generation using RunwareSDK
```javascript
import { Runware } from "@runware/sdk-js";

const runware = new Runware({
  apiKey: process.env.RUNWARE_API_KEY,
  timeout: 600000, // 10 minutes for complex video generation
  maxRetries: 30,
  retryDelay: 2000,
});
```

- Image Generation → POST /generate-image

    - Returns both the raw image URL and a background-removed version.

```javascript
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
    
    const backgroundRemoved = await runware.removeImageBackground({
      inputImage: images[0].imageURL,
    });
```

- Video Generation → POST /generate-video

    - Uses Google’s veo3 model to animate your Pokémon image with audio and prompt enhancement.

```javascript
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
      positivePrompt: prompt,
    };
    // This call handles all async complexity internally
    const response = await runware.videoInference(payload);
```



## More Projects

<table bordercolor="#66b2b2">
  
  <tr>
    <td width="33.3%"  style="align:center;" valign="top">
<a target="_blank" href="https://github.com/CharlesCreativeContent/elastic-path-demo">Elastic Path API</a>
        <br />
      <a target="_blank" href="https://github.com/CharlesCreativeContent/elastic-path-demo">
            <img src="https://github.com/CharlesCreativeContent/myimages/raw/main/images/elastic-path-demo.gif?raw=true" width="100%"  alt="Elastic Path API"/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/CharlesCreativeContent/CoinGecko-Thesys-MCP">CoinGecko-Thesys-MCP</a>
      <br />
        <a target="_blank" href="https://github.com/CharlesCreativeContent/CoinGecko-Thesys-MCP">
          <img src="https://camo.githubusercontent.com/0dd2f60eb61954fb96f89c3c31fe17bdd70d5eede3adf617adca4db22e937638/68747470733a2f2f736861776e696d616765732e6e65746c6966792e6170702f696d616765732f436f696e4765636b6f2e676966" width="100%" alt="CoinGecko-Thesys-MCP"/>
        </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/CharlesCreativeContent/Demo-Day">Travel Web-Application</a>
        <br />
        <a target="_blank" href="https://github.com/CharlesCreativeContent/Demo-Day">
          <img src="https://github.com/CharlesCreativeContent/CharlesCreativeContent/raw/main/images/gif1.gif?raw=true" width="100%" alt="Portfolio"/>
        </a>
    </td>
  </tr>
</table>
