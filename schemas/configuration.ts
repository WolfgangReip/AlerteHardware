export const configuration = {
  name: "configuration",
  type: "document",
  fields: [
    {
      name: "prix",
      type: "string",
      title: "Prix de la Configuration",
    },
    {
      name: "slogan",
      type: "string",
      title: "Slogan",
    },
    {
      name: "composants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "composant" }] }],
      title: "Liste des Composants",
    },
  ],
};
