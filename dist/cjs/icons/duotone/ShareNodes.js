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
var ShareNodes_exports = {};
__export(ShareNodes_exports, {
  default: () => ShareNodes_default
});
module.exports = __toCommonJS(ShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShareNodesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M285.012 197.029C269.547 182.129 259.424 162.066 256.68 139.633L162 186.971C177.465 201.871 187.588 221.934 190.332 244.367L285.012 197.029ZM162 325.029L256.68 372.367C259.424 349.934 269.547 329.871 285.012 314.971L190.332 267.633C187.588 290.066 177.465 310.129 162 325.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 224C405.02 224 448 181.02 448 128S405.02 32 352 32S256 74.98 256 128S298.98 224 352 224ZM352 288C298.98 288 256 330.98 256 384S298.98 480 352 480S448 437.02 448 384S405.02 288 352 288ZM96 160C42.98 160 0 202.98 0 256S42.98 352 96 352S192 309.02 192 256S149.02 160 96 160Z" })
    ]
  }
));
ShareNodesDuotone.displayName = "ShareNodesDuotone";
var ShareNodes_default = ShareNodesDuotone;
