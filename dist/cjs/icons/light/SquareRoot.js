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
var SquareRoot_exports = {};
__export(SquareRoot_exports, {
  default: () => SquareRoot_default
});
module.exports = __toCommonJS(SquareRoot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareRootLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.125 477.27C182.625 473.645 175.25 465.894 171 456.644L90 281.261C87.5 275.636 81.75 272.011 75.5 272.011H16.001C7.2 272.011 0 264.811 0 256.01V256.01C0 247.21 7.2 240.009 16.001 240.009H75.5C94.125 240.009 111.25 251.01 119.125 267.886L200.375 444.143C202.75 449.269 211.5 448.519 213.125 443.018L314.25 67.502C319.75 46.626 338.875 32 360.5 32H559.999C568.8 32 576 39.2 576 48.001V48.001C576 56.801 568.8 64.001 559.999 64.001H360.5C353.25 64.001 347 68.877 345.125 75.877L244 451.269C238.125 472.77 215 486.021 192.125 477.27Z" })
  }
));
SquareRootLight.displayName = "SquareRootLight";
var SquareRoot_default = SquareRootLight;
