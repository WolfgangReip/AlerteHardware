import { defineType, defineField, defineArrayMember } from 'sanity';

const configuration = defineType({
    title: 'Configuration',
    name: 'configuration',
    type: 'document',
    fields: [
        defineField({
            title: 'Prix de la configuration',
            name: 'prix_config',
            type: 'string',
        }),
        defineField({
            title: 'Slogan',
            name: 'slogan',
            type: 'string',
        }),
        defineField({
            title: 'Les composants de la config',
            name: 'liste_composants',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'composant_details',
                    fields: [
                        {
                            type: 'reference',
                            name: 'composant_reference',
                            to: [{ type: 'composant' }],
                        },
                        {
                            type: 'string',
                            name: 'prix',
                        },
                        {
                            type: 'url',
                            name: 'url',
                        },
                    ],
                }),
            ],
        }),
    ],
});

export default configuration;
