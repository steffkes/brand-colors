import * as PImage from "pureimage";
import { createWriteStream } from "fs";

const colors = ["red", "yellow", "green"];
const [width, height] = [10, 10];

const img = PImage.make(width * colors.length, height);
const ctx = img.getContext("2d");

for(const [index, color] of colors.entries()) {
    console.debug({ index, color })
    ctx.fillStyle = color;
    ctx.fillRect(width * index, 0, width, height);
}

await PImage.encodePNGToStream(img, createWriteStream("out.png"));
