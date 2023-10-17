import { defineType, defineField } from 'sanity';

const composant = defineType({
    name: 'composant',
    title: 'Composant',
    type: 'document',
    fields: [
        defineField({
            name: 'nom',
            title: 'Nom',
            type: 'string',
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
        }),
    ],
});

export default composant;
