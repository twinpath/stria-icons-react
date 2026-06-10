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
var KeySkeleton_exports = {};
__export(KeySkeleton_exports, {
  default: () => KeySkeleton_default
});
module.exports = __toCommonJS(KeySkeleton_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeySkeletonLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 0H320C266.98 0 224 42.98 224 96V192C224 212.727 230.719 231.795 241.889 247.486L4.688 484.688C-1.563 490.938 -1.563 501.063 4.688 507.312C7.812 510.438 11.906 512 16 512S24.188 510.438 27.312 507.312L75.719 458.906L119.437 502.625C125.687 508.875 133.875 511.969 142.062 511.969S158.437 508.875 164.687 502.625L214.125 453.187C226.594 440.719 226.594 420.406 214.125 407.937L170.406 364.219L264.514 270.111C280.205 281.281 299.273 288 320 288H416C469.02 288 512 245.02 512 192V96C512 42.98 469.02 0 416 0ZM191.5 430.562L142.062 480L98.344 436.281L147.781 386.844L191.5 430.562ZM480 192C480 227.289 451.291 256 416 256H320C284.711 256 256 227.289 256 192V96C256 60.711 284.711 32 320 32H416C451.291 32 480 60.711 480 96V192ZM384 96H352C334.328 96 320 110.326 320 128V160C320 177.674 334.328 192 352 192H384C401.674 192 416 177.674 416 160V128C416 110.326 401.674 96 384 96ZM384 160H352V128H384V160Z" })
  }
));
KeySkeletonLight.displayName = "KeySkeletonLight";
var KeySkeleton_default = KeySkeletonLight;
