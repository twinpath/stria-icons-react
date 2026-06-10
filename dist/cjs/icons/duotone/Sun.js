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
var Sun_exports = {};
__export(Sun_exports, {
  default: () => Sun_default
});
module.exports = __toCommonJS(Sun_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.263 347.01L446.109 256L509.262 164.989C515.594 155.864 510.365 143.247 499.435 141.271L390.429 121.571L370.728 12.563C368.754 1.631 356.135 -3.593 347.008 2.739L256 65.889L164.99 2.737C155.865 -3.595 143.246 1.629 141.269 12.561L121.57 121.571L12.562 141.269C1.633 143.245 -3.596 155.864 2.736 164.988L65.89 256.001L2.738 347.012C-3.594 356.137 1.633 368.754 12.562 370.728L121.57 390.428L141.269 499.438C143.244 510.368 155.863 515.596 164.99 509.262L256 446.11L347.01 509.262C356.137 515.596 368.756 510.37 370.73 499.44L390.428 390.428L499.437 370.728C510.369 368.754 515.596 356.137 509.263 347.01ZM256 384.002C185.306 384.002 128 326.693 128 256.001C128 185.308 185.306 128.001 256 128.001S384 185.308 384 256.001C384 326.693 326.693 384.002 256 384.002Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 160.002C202.98 160.002 160 202.982 160 256.002S202.98 352.002 256 352.002S352 309.022 352 256.002S309.02 160.002 256 160.002Z" })
    ]
  }
));
SunDuotone.displayName = "SunDuotone";
var Sun_default = SunDuotone;
