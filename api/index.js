const express = require("express");
const { createCanvas, loadImage } = require("canvas");

const [width, height] = [1280, 720];

const app = express()
  .get("/", function (req, res) {
    res.type("txt").send("Hello World.");
  })
  .get("/image", function (req, res) {
    const { colors = [] } = req.query;

    if (!colors.length) {
      return res.status(400).send({ error: "colors are missing" });
    }

    const colorWidth = width / colors.length;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    for (const [index, color] of colors.entries()) {
      ctx.fillStyle = color;
      ctx.fillRect(colorWidth * index, 0, colorWidth, height);
    }

    res.type("png").send(canvas.toBuffer());
  });

module.exports = app;
