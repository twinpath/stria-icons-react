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
var Pinball_exports = {};
__export(Pinball_exports, {
  default: () => Pinball_default
});
module.exports = __toCommonJS(Pinball_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PinballSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M145.404 211.609C137.492 205.309 128.148 200.021 118.109 196.631C70.816 180.66 19.943 207.318 4.484 256.172C-10.977 305.023 14.83 357.574 62.123 373.543L372.416 478.322C385.359 482.664 400.166 478.494 409.002 466.754C420.269 451.775 417.652 430.195 403.152 418.555L145.404 211.609ZM96.166 319.666C78.586 319.666 64.334 305.414 64.334 287.832C64.334 270.252 78.586 256 96.166 256C113.748 256 128 270.252 128 287.832C128 305.414 113.748 319.666 96.166 319.666ZM352 32C298.98 32 256 74.98 256 128S298.98 224 352 224S448 181.02 448 128S405.019 32 352 32Z" })
  }
));
PinballSolid.displayName = "PinballSolid";
var Pinball_default = PinballSolid;
