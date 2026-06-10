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
var Saxophone_exports = {};
__export(Saxophone_exports, {
  default: () => Saxophone_default
});
module.exports = __toCommonJS(Saxophone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SaxophoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.004 128H272.004C280.848 128 288.004 120.844 288.004 112S280.848 96 272.004 96H16.004C7.16 96 0.004 103.156 0.004 112S7.16 128 16.004 128ZM144 232C144 218.75 133.25 208 120 208S96 218.75 96 232S106.75 256 120 256S144 245.25 144 232ZM80 312C80 325.25 90.75 336 104 336S128 325.25 128 312S117.25 288 104 288S80 298.75 80 312ZM635.25 100.75L592 41.375C586 35.375 577.875 32 569.375 32H522.5C505.5 32 489.25 38.75 477.25 50.75L256 256C246.875 265 232.5 265.875 222.5 258C212.375 250.125 209.75 236 216.25 225L241.109 184.35C247.629 173.688 239.955 160 227.457 160C221.893 160 216.727 162.891 213.816 167.635L188.75 208.5C178.125 226.25 177.875 248.25 188 266.25C198.25 284.25 217.375 295.375 238 295.5C253.375 295.5 267.75 289.5 277.75 279.5L499.875 73.375C505.875 67.375 514 64 522.5 64H568.875L592.25 96H521.375L511.75 107.125C462.125 164.75 421.125 213.125 386.875 253.625C234 434.25 221 448 160 448C76.5 448 32 373.625 32 320C32 291.875 43.783 226.967 55.436 179.814C57.932 169.719 50.305 160 39.904 160H39.861C32.516 160 26.117 164.941 24.344 172.07C14.844 210.246 0 284.4 0 320C0 390.25 57.375 480 160 480C254.5 480 263.75 444.25 536 128H624C638.25 128 645.375 110.75 635.25 100.75Z" })
  }
));
SaxophoneLight.displayName = "SaxophoneLight";
var Saxophone_default = SaxophoneLight;
