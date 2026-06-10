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
var CompactDisc_exports = {};
__export(CompactDisc_exports, {
  default: () => CompactDisc_default
});
module.exports = __toCommonJS(CompactDisc_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompactDiscThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 15.999C123.451 15.999 16 123.45 16 255.999S123.451 495.999 256 495.999S496 388.548 496 255.999S388.549 15.999 256 15.999ZM256 479.999C132.486 479.999 32 379.512 32 255.999S132.486 31.999 256 31.999S480 132.485 480 255.999S379.514 479.999 256 479.999ZM256 159.999C202.98 159.999 160 202.979 160 255.999S202.98 351.999 256 351.999S352 309.018 352 255.999S309.02 159.999 256 159.999ZM256 335.999C211.889 335.999 176 300.11 176 255.999S211.889 175.999 256 175.999S336 211.887 336 255.999S300.111 335.999 256 335.999ZM264 79.999C264 75.577 260.406 71.999 256 71.999C154.531 71.999 72 154.546 72 255.999C72 260.421 75.594 263.999 80 263.999S88 260.421 88 255.999C88 163.358 163.375 87.999 256 87.999C260.406 87.999 264 84.421 264 79.999ZM256 239.999C247.164 239.999 240 247.163 240 255.999C240 264.835 247.164 271.999 256 271.999S272 264.835 272 255.999C272 247.163 264.836 239.999 256 239.999Z" })
  }
));
CompactDiscThin.displayName = "CompactDiscThin";
var CompactDisc_default = CompactDiscThin;
