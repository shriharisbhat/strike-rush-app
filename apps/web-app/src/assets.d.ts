// To fix Cannot find module './*.(png|svg|jp)' or its corresponding type declarations.ts, if not this assets.d.ts file have to import it with commonJS (require)

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.jpg" {
  const value: any;
  export = value;
}
