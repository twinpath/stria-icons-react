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
var CloudSlash_exports = {};
__export(CloudSlash_exports, {
  default: () => CloudSlash_default
});
module.exports = __toCommonJS(CloudSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudSlashRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 432C91.064 432 48 388.934 48 336C48 295.797 73.771 259.641 112.131 246.029L144.32 234.607C144.232 222.271 144.18 214.748 144.145 209.662L98.611 173.975C97.248 182.766 96.014 191.613 96.08 200.793C40.236 220.607 0 273.363 0 336C0 415.529 64.471 480 144 480H489.061L427.818 432H144ZM596.941 442.555C623.283 417.822 640 383.01 640 344C640 282.668 599.135 231.428 543.348 214.469C543.475 212.285 544 210.217 544 208C544 146.145 493.855 96 432 96C420.594 96 409.807 98.207 399.438 101.377C368.885 59.506 319.801 32 264 32C215.488 32 172.242 52.875 141.773 85.805L38.816 5.109C34.41 1.672 29.191 0 24.035 0C16.91 0 9.848 3.156 5.129 9.188C-3.059 19.625 -1.246 34.717 9.191 42.889L601.187 506.883C611.687 515.086 626.75 513.211 634.875 502.805C643.062 492.367 641.25 477.273 630.812 469.102L596.941 442.555ZM558.535 412.451L179.586 115.441C201.227 93.678 230.922 80 264 80C302.396 80 337.629 98.104 360.662 129.67L380.799 157.268L413.471 147.279C462.334 132.338 497.697 172.838 495.428 211.68L493.234 249.402L529.387 260.393C566.838 271.777 592 305.377 592 344C592 371.824 578.77 396.35 558.535 412.451Z" })
  }
));
CloudSlashRegular.displayName = "CloudSlashRegular";
var CloudSlash_default = CloudSlashRegular;
