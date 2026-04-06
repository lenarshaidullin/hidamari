import type { AstroIntegration } from 'astro';
export default function CustomLogger(): AstroIntegration {
  return {
    name: 'custom-logger',
    hooks: {
      'astro:build:done': ({ logger }) => {
        logger.info(`😎 Все заебись, сбилдилось! Продолжаем ебашить!`);
      },
    },
  };
}