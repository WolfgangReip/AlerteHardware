// ./sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { visionTool } from '@sanity/vision';

const projectId = 'k8aak0t8';
const dataset = 'production';

export default defineConfig({
    name: 'bons-plans-hardware',
    title: 'Bons Plans Hardware',
    basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
    projectId,
    dataset,
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
