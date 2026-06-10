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
var Coffin_exports = {};
__export(Coffin_exports, {
  default: () => Coffin_default
});
module.exports = __toCommonJS(Coffin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffinThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M406.537 115.25L298.766 9.375C292.639 3.375 284.264 0 275.637 0H172.363C163.736 0 155.361 3.375 149.234 9.375L41.463 115.25C33.461 123.125 30.211 134.625 32.961 145.625L120.103 487.75C123.728 502 136.732 512 151.736 512H296.389C311.268 512 324.271 502 327.896 487.75L415.039 145.625C417.789 134.625 414.539 123.125 406.537 115.25ZM312.391 483.805C310.564 490.984 303.984 496 296.389 496H151.736C144.068 496 137.436 490.984 135.607 483.801L48.482 141.744C47.107 136.24 48.678 130.598 52.676 126.664L160.43 20.807C163.549 17.752 167.898 16 172.363 16H275.637C280.102 16 284.451 17.752 287.553 20.789L395.314 126.654C399.322 130.598 400.893 136.24 399.533 141.676L312.391 483.805Z" })
  }
));
CoffinThin.displayName = "CoffinThin";
var Coffin_default = CoffinThin;
