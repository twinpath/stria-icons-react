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
var TreePalm_exports = {};
__export(TreePalm_exports, {
  default: () => TreePalm_default
});
module.exports = __toCommonJS(TreePalm_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreePalmSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.737 172.875C577.612 182.75 569.237 192 557.988 192H503.99L479.991 144L455.992 192H321.248C336.123 248.625 362.372 371.5 347.622 485C345.622 500.625 331.623 512 315.874 512H260.751C240.002 512 224.628 492.5 229.753 472.375C244.127 415.25 266.251 305 255.626 200.25L109.508 346.375C101.509 354.375 89.134 353.75 83.384 345.375C48.011 293.625 61.76 213 118.758 156C122.133 152.625 125.882 150 129.507 146.875L96.009 80L72.01 128H18.012C6.763 128 -1.612 118.75 0.263 108.875C11.888 47.25 78.635 0 159.256 0C233.378 0 295.125 40.125 313.749 94.5C341.748 75.75 377.371 64 416.744 64C497.365 64 564.112 111.25 575.737 172.875Z" })
  }
));
TreePalmSolid.displayName = "TreePalmSolid";
var TreePalm_default = TreePalmSolid;
