import { defineType, defineField } from "sanity";

const composant = defineType({
  name: "composant",
  title: "Composant",
  type: "document",
  fields: [
    defineField({
      name: "nom",
      title: "Nom",
      type: "string",
    }),
    defineField({
      name: "prix",
      title: "Prix",
      type: "string",
    }),
    defineField({
      name: "lien",
      title: "Lien",
      type: "url",
    }),
  ],
});

export default composant;
