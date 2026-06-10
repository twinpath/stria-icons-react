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
var LeftFromLine_exports = {};
__export(LeftFromLine_exports, {
  default: () => LeftFromLine_default
});
module.exports = __toCommonJS(LeftFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeftFromLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.999 63.992H415.999C398.327 63.992 384 78.319 384 95.991V416.001C384 433.674 398.326 448 415.999 448H416.001C433.673 448 448 433.673 448 416.001V95.993C448 78.319 433.673 63.992 415.999 63.992Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.932 223.996V287.996C351.932 305.67 337.596 319.998 319.908 319.998H191.816V391.998C191.816 401.578 186.109 410.25 177.307 414.047C168.504 417.828 158.277 416.031 151.305 409.453L7.201 273.449C-2.4 264.387 -2.4 247.605 7.201 238.543L151.305 102.541C158.277 95.963 168.504 94.166 177.307 97.947C186.109 101.744 191.816 110.416 191.816 119.994V191.996H319.908C337.596 191.996 351.932 206.322 351.932 223.996Z" })
    ]
  }
));
LeftFromLineDuotone.displayName = "LeftFromLineDuotone";
var LeftFromLine_default = LeftFromLineDuotone;
