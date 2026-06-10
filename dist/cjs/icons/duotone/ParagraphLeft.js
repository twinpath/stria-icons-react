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
var ParagraphLeft_exports = {};
__export(ParagraphLeft_exports, {
  default: () => ParagraphLeft_default
});
module.exports = __toCommonJS(ParagraphLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParagraphLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M147.887 224H159.999V288.001C159.999 305.674 174.325 320 191.997 320H192C209.672 320 223.999 305.674 223.999 288.001V64H255.999V288.001C255.999 305.674 270.325 320 287.997 320H288C305.672 320 319.999 305.674 319.999 288.001V64H319.999C337.672 64 351.999 49.673 351.999 32V31.999C351.999 14.326 337.672 0 320 0H143.999C80.391 0 32.588 47.413 32.005 110.824C31.432 173.078 85.63 224 147.887 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352.001 384H128.021V336C128.021 329.797 124.426 324.141 118.801 321.516C113.253 318.922 106.564 319.734 101.767 323.703L5.751 403.703C2.11 406.75 0 411.25 0 416S2.11 425.25 5.751 428.297L101.767 508.297C104.705 510.734 108.346 512 112.018 512C114.315 512 116.644 511.5 118.801 510.484C124.426 507.859 128.021 502.203 128.021 496V448H351.999C369.673 448 384 433.673 384 415.999V415.999C384 398.326 369.674 384 352.001 384Z" })
    ]
  }
));
ParagraphLeftDuotone.displayName = "ParagraphLeftDuotone";
var ParagraphLeft_default = ParagraphLeftDuotone;
