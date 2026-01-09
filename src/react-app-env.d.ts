// Local React JSX/type declarations to avoid missing @types/react errors
declare module 'react';
declare module 'react/jsx-runtime';

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {};
