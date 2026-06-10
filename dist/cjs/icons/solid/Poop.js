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
var Poop_exports = {};
__export(Poop_exports, {
  default: () => Poop_default
});
module.exports = __toCommonJS(Poop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PoopSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 440C512 479.75 479.75 512 440 512H72C32.25 512 0 479.75 0 440C0 404.125 26.25 374.625 60.625 369.125C43.375 356 32 335.375 32 312C32 272.25 64.25 240 104 240H118.125C104.625 228.25 96 211.25 96 192C96 156.625 124.625 128 160 128H176C220.125 128 256 92.125 256 48C256 30.625 250.25 14.625 240.875 1.5C245.875 0.75 250.875 0 256 0C309 0 352 43 352 96C352 107.25 349.75 118 346.125 128H352C387.375 128 416 156.625 416 192C416 211.25 407.375 228.25 393.875 240H408C447.75 240 480 272.25 480 312C480 335.375 468.625 356 451.375 369.125C485.75 374.625 512 404.125 512 440Z" })
  }
));
PoopSolid.displayName = "PoopSolid";
var Poop_default = PoopSolid;
