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
var Trumpet_exports = {};
__export(Trumpet_exports, {
  default: () => Trumpet_default
});
module.exports = __toCommonJS(Trumpet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrumpetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 160C312 151.162 304.836 144 296 144H280C271.164 144 264 151.162 264 160V192H312V160ZM400 160C400 151.162 392.836 144 384 144H368C359.164 144 352 151.162 352 160V192H400V160ZM492.27 269.639C487.66 267.209 472.41 259.779 448 257.189V352C448 369.672 433.674 384 416 384H400V256H352V384H312V256H264V384H224V256H81.75C70.75 274.9 64 296.57 64 320C64 390.691 121.307 448 192 448H416C469.02 448 512 405.02 512 352V281.699C505.58 277.539 499.221 273.299 492.27 269.639ZM176 381.73C141.908 373.07 121.289 338.414 129.949 304.32C135.697 281.689 153.369 264.018 176 258.27V381.73ZM224 160C224 151.162 216.836 144 208 144H192C183.164 144 176 151.162 176 160V192H224V160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 80V368C640 380 629.189 384 624 384C618.854 383.965 614.029 381.488 611 377.33C591.082 351.541 568.934 327.555 544.811 305.65C529.43 292.65 511.881 279.99 492.27 269.65C486.721 266.719 466.52 256.049 432.27 256.02H48C48 264.855 40.836 272.02 32 272.02H16C7.164 272.02 0 264.855 0 256.02V192C0 183.162 7.164 176 16 176H32C40.836 176 48 183.162 48 192H432.27C466.52 192 486.721 181.309 492.27 178.369C511.881 168.02 529.43 155.32 544.811 142.369C568.934 120.457 591.082 96.465 611 70.67C614.035 66.516 618.855 64.043 624 64C629.189 64 640 68 640 80Z" })
    ]
  }
));
TrumpetDuotone.displayName = "TrumpetDuotone";
var Trumpet_default = TrumpetDuotone;
