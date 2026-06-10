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
var RightToLine_exports = {};
__export(RightToLine_exports, {
  default: () => RightToLine_default
});
module.exports = __toCommonJS(RightToLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32.023 319.998H160.115V392C160.115 401.578 165.822 410.25 174.625 414.047C183.428 417.828 193.654 416.031 200.627 409.453L344.73 273.451C354.332 264.389 354.332 247.607 344.73 238.545L200.627 102.541C193.654 95.963 183.428 94.166 174.625 97.947C165.822 101.744 160.115 110.416 160.115 119.996V191.996H32.023C14.336 191.996 0 206.324 0 223.998V287.998C0 305.672 14.336 319.998 32.023 319.998ZM415.999 63.992H415.999C398.327 63.992 384 78.319 384 95.991V416.001C384 433.674 398.326 448 415.999 448H416.001C433.673 448 448 433.673 448 416.001V95.993C448 78.319 433.673 63.992 415.999 63.992Z" })
  }
));
RightToLineSolid.displayName = "RightToLineSolid";
var RightToLine_default = RightToLineSolid;
