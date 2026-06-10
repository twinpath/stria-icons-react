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
var Siren_exports = {};
__export(Siren_exports, {
  default: () => Siren_default
});
module.exports = __toCommonJS(Siren_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SirenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M187.938 176.312C175.125 174.219 162.5 182.969 160.312 196.062L144.312 292.062C142.156 305.125 150.969 317.5 164.062 319.688C165.375 319.906 166.719 320 168.031 320C179.563 320 189.719 311.688 191.688 299.938L207.688 203.938C209.844 190.875 201.031 178.5 187.938 176.312ZM400.939 336.094L364.5 141.656C359.531 115.188 336.375 96 309.438 96H138.562C111.625 96 88.469 115.188 83.5 141.688L47.062 336.094C20.998 336.605 0 357.812 0 384V432C0 458.508 21.49 480 48 480H400C426.51 480 448 458.508 448 432V384C448 357.812 427.004 336.605 400.939 336.094ZM130.688 150.531C131.406 146.75 134.719 144 138.562 144H309.438C313.281 144 316.594 146.75 317.313 150.5L352.082 336H95.92L130.688 150.531ZM400 432H48V384H400V432Z" })
  }
));
SirenRegular.displayName = "SirenRegular";
var Siren_default = SirenRegular;
