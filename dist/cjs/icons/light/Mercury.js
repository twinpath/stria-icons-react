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
var Mercury_exports = {};
__export(Mercury_exports, {
  default: () => Mercury_default
});
module.exports = __toCommonJS(Mercury_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MercuryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 223.995C368 152.637 325.219 91.177 264.025 63.58C282.938 54.717 300.502 42.731 315.531 27.086C321.656 20.711 321.469 10.585 315.094 4.46S298.594 -1.446 292.469 4.898C265.75 32.68 230.094 47.992 192 47.992S118.25 32.68 91.531 4.898C85.438 -1.446 75.312 -1.665 68.906 4.46C62.531 10.585 62.344 20.711 68.469 27.086C83.498 42.731 101.062 54.717 119.975 63.58C58.781 91.177 16 152.637 16 223.995C16 315.628 86.445 391.064 176 399.188V431.999H128C119.156 431.999 112 439.155 112 447.999S119.156 463.999 128 463.999H176V496C176 504.844 183.156 512 192 512S208 504.844 208 496V463.999H256C264.844 463.999 272 456.843 272 447.999S264.844 431.999 256 431.999H208V399.188C297.555 391.064 368 315.628 368 223.995ZM48 223.995C48 144.588 112.594 79.993 192 79.993S336 144.588 336 223.995S271.406 367.998 192 367.998S48 303.403 48 223.995Z" })
  }
));
MercuryLight.displayName = "MercuryLight";
var Mercury_default = MercuryLight;
