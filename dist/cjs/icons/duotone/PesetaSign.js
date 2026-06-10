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
var PesetaSign_exports = {};
__export(PesetaSign_exports, {
  default: () => PesetaSign_default
});
module.exports = __toCommonJS(PesetaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PesetaSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 192C0 209.688 14.328 224 32 224V160C14.328 160 0 174.312 0 192ZM112 160V224H265.223C269.529 214.186 272 203.391 272 192S269.529 169.814 265.223 160H112ZM352 160H348.766C350.875 170.344 352 181.043 352 192S350.875 213.656 348.766 224H352C369.672 224 384 209.688 384 192S369.672 160 352 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 480C49.906 480 32 462.094 32 440V72C32 49.906 49.906 32 72 32H192C280.219 32 352 103.781 352 192S280.219 352 192 352H112V440C112 462.094 94.094 480 72 480ZM112 272H192C236.109 272 272 236.125 272 192S236.109 112 192 112H112V272Z" })
    ]
  }
));
PesetaSignDuotone.displayName = "PesetaSignDuotone";
var PesetaSign_default = PesetaSignDuotone;
