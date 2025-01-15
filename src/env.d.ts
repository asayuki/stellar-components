/// <reference path="../.astro/types.d.ts" />
declare module '*.astro' {
    import type { AstroComponentFactory } from 'astro/client';
    const Component: AstroComponentFactory;
    export default Component;
  }