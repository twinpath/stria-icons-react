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
var SnowmanHead_exports = {};
__export(SnowmanHead_exports, {
  default: () => SnowmanHead_default
});
module.exports = __toCommonJS(SnowmanHead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnowmanHeadThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 176C92.422 176 96 172.406 96 168V40C96 26.781 106.766 16 120 16H328C341.234 16 352 26.781 352 40V168C352 172.406 355.578 176 360 176S368 172.406 368 168V40C368 17.938 350.063 0 328 0H120C97.938 0 80 17.938 80 40V168C80 172.406 83.578 176 88 176ZM440 208H356.453H91.891H8C3.578 208 0 211.594 0 216S3.578 224 8 224H75.307C47.756 258.07 32 299.758 32 344C32 405.969 62.266 464.469 112.953 500.5C123.563 508.031 137.078 512 152.031 512H295.5C311.234 512 326.859 506.75 339.5 497.219C398.828 452.469 426.672 378.844 412.156 305.125C406.348 275.516 392.867 247.949 373.582 224H440C444.422 224 448 220.406 448 216S444.422 208 440 208ZM396.469 308.188C409.781 375.875 384.266 443.406 329.875 484.469C319.984 491.906 307.781 496 295.5 496H152.031C143.922 496 132.172 494.531 122.219 487.438C75.75 454.438 48 400.812 48 344C48 299.188 64.781 256.719 95.328 224H353.016C375.328 248 390.328 277.031 396.469 308.188ZM144 320C135.164 320 128 312.836 128 304S135.164 288 144 288C152.838 288 160 295.164 160 304S152.838 320 144 320ZM304 320C295.164 320 288 312.836 288 304S295.164 288 304 288C312.838 288 320 295.164 320 304S312.838 320 304 320ZM224 336C197.533 336 176 357.531 176 384C176 404.527 200.367 441.961 210.842 457.105C213.832 461.422 218.748 464 224 464S234.17 461.422 237.158 457.105C247.635 441.961 272 404.527 272 384C272 357.531 250.467 336 224 336ZM224 448C224 448 192 401.75 192 384S206.25 352 224 352S256 366.25 256 384S224 448 224 448Z" })
  }
));
SnowmanHeadThin.displayName = "SnowmanHeadThin";
var SnowmanHead_default = SnowmanHeadThin;
