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
var Headphones_exports = {};
__export(Headphones_exports, {
  default: () => Headphones_default
});
module.exports = __toCommonJS(Headphones_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 287.734V399.875C512 444.055 476.111 480 432 480C405.533 480 384 458.438 384 431.938V304.062C384 277.562 405.533 256 432 256C442.826 256 452.9 258.643 462.287 262.598C449.697 159.871 362.072 80 256 80S62.303 159.871 49.713 262.598C59.1 258.643 69.174 256 80 256C106.467 256 128 277.562 128 304.062V431.938C128 458.438 106.467 480 80 480C35.889 480 0 444.055 0 399.875V288C0 146.844 114.844 32 256 32C396.922 32 511.582 146.469 511.965 287.305C511.971 287.451 511.994 287.588 512 287.734Z" })
  }
));
HeadphonesSolid.displayName = "HeadphonesSolid";
var Headphones_default = HeadphonesSolid;
