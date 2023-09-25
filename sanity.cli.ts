/* eslint-disable no-process-env */
import { loadEnvConfig } from '@next/env';
import { defineCliConfig } from 'sanity/cli';

const dev = process.env.NODE_ENV !== 'production';
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const projectId = 'k8aak0t8';
const dataset = 'production';

export default defineCliConfig({ api: { projectId, dataset } });
