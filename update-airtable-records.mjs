import Airtable from "airtable";
import { stringify } from "qs";

const airtable = new Airtable();

const table = await airtable
  .base("apppB4VlrphSnIuea")
  .table("tblFN0LE04EBf0Xb8");

const records = await table.select({ view: "viwyoAIBlMmkDnugE" }).firstPage();

const image_url_base = "https://brand-color-image.vercel.app/image";

for (const {
  id,
  fields: { Farben: colors },
} of records) {
  const image_url =
    image_url_base +
    stringify(
      {
        colors,
      },
      { addQueryPrefix: true, arrayFormat: "brackets" },
    );
  console.dir({ id, colors, image_url }, { depth: null });

  table.update([
    {
      id,
      fields: {
        "Farben-Bild": [
          {
            url: image_url,
          },
        ],
      },
    },
  ]);
}
