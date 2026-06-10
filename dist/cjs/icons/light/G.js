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
var G_exports = {};
__export(G_exports, {
  default: () => G_default
});
module.exports = __toCommonJS(G_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.943 480C166.569 480 109.196 458.146 65.513 414.47C-21.838 327.087 -21.838 184.897 65.513 97.514C152.727 10.314 294.515 10.162 381.919 97.06C387.532 102.641 388.726 111.775 384.063 118.172C378.106 126.344 366.596 127.004 359.743 120.149C284.849 45.303 163.037 45.303 88.143 120.149C13.265 195.058 13.265 316.926 88.143 391.835C163.022 466.681 284.865 466.744 359.743 391.835C389.735 361.821 409.818 325.961 416.258 290.914L416.211 288.007L224.778 288.007C216.807 288.007 209.428 282.549 208.156 274.679C206.535 264.644 214.219 255.992 223.943 255.992H431.996C440.835 255.992 448 263.159 448 271.999V271.999C448 291.827 444.953 311.639 437.927 330.179C426.305 360.844 407.282 389.535 382.374 414.47C338.691 458.146 281.317 480 223.943 480Z" })
  }
));
GLight.displayName = "GLight";
var G_default = GLight;
