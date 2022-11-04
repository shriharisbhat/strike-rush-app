## @strike/web-rig

A rig package for web projects that build using [Heft](https://www.npmjs.com/package/@rushstack/heft)
build system. To learn more about rig packages, consult the
[rushstacks using rigpackages](https://rushstack.io/pages/heft/rig_packages/)
[@rushstack/rig-package](https://www.npmjs.com/package/@rushstack/rig-package) documentation.

This rig provides the following profiles:

- [app-rofile](./profiles/app-rofile/): For applications that get bundled using Webpack.
- [library-profile](./profiles/library-profile/): For creating library packages to be consumed by other web projects. **_Also use this profile for a library meant to be used by both Node.js and web apps._**

To enable it, add a **rig.json** file to your project, as shown below:

**config/rig.json**

```js
{
  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",

  "rigPackageName": "@strike/web-rig",
  "rigProfile": "library-profile"
}
```

The config files provided by this rig profile can be found in the [web-rig/profiles/library-profile/config] folder.

## Some useful Links to check
- https://www.npmjs.com/package/@rushstack/heft-web-rig
- https://www.npmjs.com/package/@rushstack/heft-node-rig
- https://github.com/microsoft/rushstack-samples/tree/main/heft/heft-node-rig-tutorial

