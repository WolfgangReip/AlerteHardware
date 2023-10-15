import { defineType, defineField, defineArrayMember } from "sanity";

const configuration = defineType({
  title: "Configuration",
  name: "configuratione",
  type: "document",
  fields: [
    defineField({
      title: "Prix de la configuration",
      name: "prix",
      type: "string",
    }),
    defineField({
      title: "Slogan",
      name: "slogan",
      type: "string",
    }),
    defineField({
      title: "Liste des composants",
      name: "composants",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "composant" }],
        }),
      ],
    }),
  ],
});

export default configuration;
