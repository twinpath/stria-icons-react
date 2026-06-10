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
var ShieldCheck_exports = {};
__export(ShieldCheck_exports, {
  default: () => ShieldCheck_default
});
module.exports = __toCommonJS(ShieldCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShieldCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M466.5 83.68L274.5 3.672C269.625 1.641 261.344 0 256.062 0C250.75 0 242.5 1.641 237.594 3.672L45.594 83.68C27.688 91.07 16 108.574 16 127.984C16 385.157 205.164 512 255.953 512C307.975 512 496 383.813 496 127.984C496 108.574 484.312 91.07 466.5 83.68ZM255.953 496C212.107 496 32 374.012 32 127.984C32 114.992 39.734 103.41 51.75 98.449L243.719 18.453C246.711 17.215 252.824 16 256.062 16C259.25 16 265.445 17.234 268.348 18.441L460.367 98.461C472.297 103.406 480 114.996 480 127.984C480 405.589 270.923 496 255.953 496ZM360.065 175.991C357.938 175.991 355.824 176.837 354.266 178.5L224.234 316.203L158.016 242.641C156.448 240.881 154.266 239.989 152.078 239.989C147.587 239.989 144.082 243.664 144.082 248.009C144.082 249.914 144.76 251.826 146.141 253.359L218.141 333.359C219.672 335.031 222.141 335.516 224.078 336C226.266 336 228.391 335.094 229.891 333.5L365.891 189.5C367.353 187.947 368.081 185.965 368.081 183.988C368.081 179.014 363.896 175.991 360.065 175.991Z " })
  }
));
ShieldCheckThin.displayName = "ShieldCheckThin";
var ShieldCheck_default = ShieldCheckThin;
