import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '@common-components/core',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    vueOutputTarget({
      componentCorePackage: '@common-components/core', // i.e.: stencil-library
      proxiesFile: '../vue/src/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@common-components/core',
      directivesProxyFile: '../angular/projects/angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/angular/src/lib/stencil-generated/index.ts',
    }),
  ],
};
