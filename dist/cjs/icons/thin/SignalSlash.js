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
var SignalSlash_exports = {};
__export(SignalSlash_exports, {
  default: () => SignalSlash_default
});
module.exports = __toCommonJS(SignalSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M63.999 384C59.593 384 55.999 387.594 55.999 392V504C55.999 508.406 59.593 512 63.999 512S71.999 508.406 71.999 504V392C71.999 387.594 68.406 384 63.999 384ZM455.999 104C455.999 99.594 452.406 96 447.999 96S439.999 99.594 439.999 104V259.4L455.999 272.119V104ZM583.999 8C583.999 3.594 580.406 0 575.999 0S567.999 3.594 567.999 8V361.145L583.999 373.863V8ZM311.999 504C311.999 508.406 315.593 512 319.999 512S327.999 508.406 327.999 504V354.34L311.999 341.621V504ZM191.999 288C187.593 288 183.999 291.594 183.999 296V504C183.999 508.406 187.593 512 191.999 512S199.999 508.406 199.999 504V296C199.999 291.594 196.406 288 191.999 288ZM636.982 497.734L12.99 1.73C11.527 0.566 9.773 0 8.027 0H8.025C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734ZM439.999 504C439.999 508.406 443.593 512 447.999 512S455.999 508.406 455.999 504V456.084L439.999 443.367V504Z" })
  }
));
SignalSlashThin.displayName = "SignalSlashThin";
var SignalSlash_default = SignalSlashThin;
