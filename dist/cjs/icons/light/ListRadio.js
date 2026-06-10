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
var ListRadio_exports = {};
__export(ListRadio_exports, {
  default: () => ListRadio_default
});
module.exports = __toCommonJS(ListRadio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListRadioLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 112H496C504.797 112 512 104.797 512 96S504.797 80 496 80H176C167.203 80 160 87.203 160 96S167.203 112 176 112ZM496 240H176C167.203 240 160 247.203 160 256S167.203 272 176 272H496C504.797 272 512 264.797 512 256S504.797 240 496 240ZM496 400H176C167.203 400 160 407.203 160 416S167.203 432 176 432H496C504.797 432 512 424.797 512 416S504.797 400 496 400ZM64 352C28.654 352 0 380.654 0 416S28.654 480 64 480C99.348 480 128 451.346 128 416S99.348 352 64 352ZM64 448C46.355 448 32 433.645 32 416S46.355 384 64 384S96 398.355 96 416S81.645 448 64 448ZM64 192C28.654 192 0 220.654 0 256S28.654 320 64 320C99.348 320 128 291.346 128 256S99.348 192 64 192ZM64 288C46.355 288 32 273.645 32 256S46.355 224 64 224S96 238.355 96 256S81.645 288 64 288ZM64 32C28.654 32 0 60.652 0 96C0 131.346 28.654 160 64 160C99.348 160 128 131.346 128 96C128 60.652 99.348 32 64 32ZM64 128C46.355 128 32 113.645 32 96S46.355 64 64 64S96 78.355 96 96S81.645 128 64 128ZM64 80C55.164 80 48 87.162 48 96C48 104.836 55.164 112 64 112C72.838 112 80 104.836 80 96C80 87.162 72.838 80 64 80Z" })
  }
));
ListRadioLight.displayName = "ListRadioLight";
var ListRadio_default = ListRadioLight;
