const express = require("express");
const { createCanvas, loadImage } = require("canvas");

const app = express()
  .get("/", function (req, res) {
    res.send({ api: true, hello: "world" });
  })
  .get("/image", function (req, res) {
    const colors = ["red", "yellow", "green"];
    const [width, height] = [10, 10];

    const canvas = createCanvas(width * colors.length, height);
    const ctx = canvas.getContext("2d");

    for (const [index, color] of colors.entries()) {
      ctx.fillStyle = color;
      ctx.fillRect(width * index, 0, width, height);
    }

    res.type("png").send(canvas.toBuffer());
  });

module.exports = app;
