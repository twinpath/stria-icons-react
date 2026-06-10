var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Campfire_exports = {};
__export(Campfire_exports, {
  default: () => Campfire_default
});
module.exports = __toCommonJS(Campfire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampfireRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.984 320C335.48 320 399.978 255.5 399.978 176C399.978 142.75 366.605 74 319.982 32C306.607 44 294.482 56.75 283.857 69.5C266.359 46 244.609 22.25 219.986 0C156.863 57 111.99 131.25 111.99 176C111.99 255.5 176.488 320 255.984 320ZM220.236 67.875C229.361 77.875 237.859 88.125 245.359 98.25L281.609 146.75L318.482 102.875C339.855 133.25 351.98 165.125 351.98 176C351.98 228.875 308.982 272 255.984 272C203.111 272 159.988 228.875 159.988 176C159.988 156.625 180.736 112.625 220.236 67.875ZM496.146 465.438L326.47 404L496.146 342.562C508.615 338.062 515.084 324.281 510.552 311.844C506.052 299.344 492.273 292.969 479.836 297.438L256 378.484L32.164 297.438C19.758 292.969 5.947 299.344 1.447 311.844C-3.084 324.281 3.385 338.062 15.853 342.562L185.529 404L15.853 465.438C3.385 469.938 -3.084 483.719 1.447 496.156C4.978 505.938 14.197 512 24.008 512C26.726 512 29.476 511.531 32.164 510.562L256 429.516L479.836 510.562C482.523 511.531 485.273 512 487.992 512C497.802 512 507.021 505.938 510.552 496.156C515.084 483.719 508.615 469.938 496.146 465.438Z" })
  }
));
CampfireRegular.displayName = "CampfireRegular";
var Campfire_default = CampfireRegular;
