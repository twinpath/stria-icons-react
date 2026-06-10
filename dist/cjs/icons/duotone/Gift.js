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
var Gift_exports = {};
__export(Gift_exports, {
  default: () => Gift_default
});
module.exports = __toCommonJS(Gift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 288V512H64C46.312 512 32 497.703 32 480V288H224ZM224 256V160H151.299C122.875 160 97.102 147.943 81.158 128H32C14.326 128 0 142.328 0 160V224C0 241.602 14.4 256 32 256H224ZM288 512H448C465.687 512 480 497.703 480 480V288H288V512ZM480 128H430.842C414.898 147.943 389.125 160 360.701 160H288V256H480C497.6 256 512 241.602 512 224V160C512 142.328 497.674 128 480 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 512H288V288H224V512ZM361.022 0C310.199 0 274.68 43.35 256 73.512C237.32 43.35 201.801 0 150.979 0C94.484 0 64 41.391 64 80.334C64 96.59 69.129 112.227 78.834 125.557C94.533 147.121 121.623 160 151.299 160H224V256H288V160H360.701C390.377 160 417.467 147.121 433.166 125.557C442.871 112.227 448 96.59 448 80.334C448 41.391 417.516 0 361.022 0ZM151.299 112C124.141 112 112 94.85 112 80.334C112 67.334 122.301 48 150.979 48C181.07 48 208.535 84.5 222.875 112H151.299ZM360.701 112H289.125C303.465 84.5 330.93 48 361.021 48C389.699 48 400 67.334 400 80.334C400 94.85 387.859 112 360.701 112Z" })
    ]
  }
));
GiftDuotone.displayName = "GiftDuotone";
var Gift_default = GiftDuotone;
