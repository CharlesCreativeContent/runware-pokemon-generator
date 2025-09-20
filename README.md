# Runware Pokémon Generator

<img src="https://shawncharles.com/images/runware.png" alt="Runware" width="600" />

Generate **Pokémon-inspired images and videos** using the [Runware SDK](https://docs.runware.ai) with a lightweight Express.js server.

Ships with two HTTP endpoints:

•	POST /generate-image → creates an image (and a background-removed variant)

•	POST /generate-video → animates an image into a short video
 

---

## 🚀 Deploy with Vercel

Click below to clone and deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CharlesCreativeContent/runware-pokemon-generator&env=RUNWARE_API_KEY&envDescription=Set%20your%20Runware%20API%20key%20and%20custom%20port.&envLink=https://docs.runware.ai/&demo-image=https://shawncharles.com/images/runware.png)

---

## 📦 Installation (Local Development)

Clone the repo:

```bash
git clone https://github.com/CharlesCreativeContent/runware-pokemon-generator.git
cd runware-pokemon-generator
```
# Runware Pokémon Generator

<img src="https://shawncharles.com/images/runware.png" alt="Runware" width="600" />

Generate **Pokémon-inspired images and videos** using the [Runware SDK](https://docs.runware.ai) with a lightweight Express.js server.

## 🌟 Features

- Image Generation → POST /generate-image with { "prompt": "your description" }

- - Returns both the raw image URL and a background-removed version.

- Video Generation → POST /generate-video with { "imageURL": "...", "prompt": "..." }

- - Uses Google’s veo3 model to animate your Pokémon image with audio and prompt enhancement.
 

---

## 🚀 Try Now and Deploy with Vercel

Click below to clone and deploy instantly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CharlesCreativeContent/runware-pokemon-generator&env=RUNWARE_API_KEY&envDescription=Set%20your%20Runware%20API%20key%20and%20custom%20port.&envLink=https://docs.runware.ai/&demo-image=https://shawncharles.com/images/runware.png)

---

## 📦 Installation (Local Development)

Clone the repo:

```bash
git clone https://github.com/CharlesCreativeContent/runware-pokemon-generator.git
cd runware-pokemon-generator
```

Add API-Key to environment variables:

```bash
export RUNWARE_API_KEY="your-runware-api-key"
```

Run local server:

```bash
node server.js
```
