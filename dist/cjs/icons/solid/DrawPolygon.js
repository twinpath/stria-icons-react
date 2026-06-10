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
var DrawPolygon_exports = {};
__export(DrawPolygon_exports, {
  default: () => DrawPolygon_default
});
module.exports = __toCommonJS(DrawPolygon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrawPolygonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352C383.625 352 383.375 352.125 383 352.125L343.75 286.75C348.875 277.625 352 267.25 352 256C352 244.75 348.875 234.375 343.75 225.25L383 159.875C383.375 159.875 383.625 160 384 160C419.375 160 448 131.375 448 96S419.375 32 384 32C360.375 32 340 45 328.875 64H119.125C108 45 87.625 32 64 32C28.625 32 0 60.625 0 96C0 119.625 13 140 32 151.125V360.875C13 372 0 392.375 0 416C0 451.375 28.625 480 64 480C87.625 480 108 467 119.125 448H328.875C340 467 360.375 480 384 480C419.375 480 448 451.375 448 416S419.375 352 384 352ZM96 360.875V151.125C105.625 145.5 113.5 137.625 119.125 128H327.5L289 192.125C288.625 192.125 288.375 192 288 192C252.625 192 224 220.625 224 256S252.625 320 288 320C288.375 320 288.625 319.875 289 319.875L327.5 384H119.125C113.5 374.375 105.625 366.5 96 360.875ZM272 256C272 247.125 279.125 240 288 240S304 247.125 304 256C304 264.875 296.875 272 288 272S272 264.875 272 256ZM400 96C400 104.875 392.875 112 384 112S368 104.875 368 96S375.125 80 384 80S400 87.125 400 96ZM64 80C72.875 80 80 87.125 80 96S72.875 112 64 112S48 104.875 48 96S55.125 80 64 80ZM48 416C48 407.125 55.125 400 64 400S80 407.125 80 416S72.875 432 64 432S48 424.875 48 416ZM384 432C375.125 432 368 424.875 368 416S375.125 400 384 400S400 407.125 400 416S392.875 432 384 432Z" })
  }
));
DrawPolygonSolid.displayName = "DrawPolygonSolid";
var DrawPolygon_default = DrawPolygonSolid;
