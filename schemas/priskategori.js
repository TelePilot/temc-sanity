export default {
  title: "Priskategori",
  name: "priskategori",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Icon",
      name: "icon",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      title: "Kategorier",
      name: "kategorier",
      type: "array",
      of: [{ type: "kategori" }],
    },
    {
      title: "Price",
      name: "price",
      type: "string",
    },
    {
      title: "Valuta",
      name: "valuta",
      type: "string",
    },
  ],
}
