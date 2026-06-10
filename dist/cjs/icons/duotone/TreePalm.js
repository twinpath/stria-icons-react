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
const TreePalmDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.736 172.875C577.611 182.75 569.236 192 557.988 192H503.99L479.992 144L455.992 192H264.646C264.63 191.85 109.507 346.375 109.507 346.375C101.507 354.375 89.134 353.75 83.384 345.375C48.011 293.625 61.759 213 118.757 156C122.132 152.625 125.882 150 129.507 146.875L96.009 80L72.009 128H18.011C6.763 128 -1.612 118.75 0.263 108.875C11.886 47.25 78.634 0 159.255 0C233.376 0 295.125 40.125 313.748 94.5C341.748 75.75 377.371 64 416.744 64C497.365 64 564.113 111.25 575.736 172.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M229.993 472.375C244.346 415.332 275.376 296.643 264.887 192H321.489C336.364 248.625 362.612 371.5 347.864 485C345.864 500.625 331.864 512 316.114 512H260.993C240.243 512 224.868 492.5 229.993 472.375Z" })
    ]
  }
));
TreePalmDuotone.displayName = "TreePalmDuotone";
var TreePalm_default = TreePalmDuotone;
