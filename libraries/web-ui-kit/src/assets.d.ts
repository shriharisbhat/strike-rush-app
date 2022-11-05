// To fix Cannot find module './*.(png|svg|jp)' or its corresponding type declarations.ts, if not this assets.d.ts file have to import it with commonJS (require)

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
