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
var Stocking_exports = {};
__export(Stocking_exports, {
  default: () => Stocking_default
});
module.exports = __toCommonJS(Stocking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StockingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.993 0H95.999C78.4 0 64 14.4 64 32V64C64 81.6 78.4 96 95.999 96H351.993C369.592 96 383.992 81.6 383.992 64V32C383.992 14.4 369.592 0 351.993 0ZM223.996 368C223.996 400.418 237.982 429.379 259.997 449.832L280.745 436C325.243 406.25 351.868 356.5 351.868 302.875V257.6C346.637 256.852 341.431 256 335.993 256C274.139 256 223.996 306.145 223.996 368Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M260.005 449.832L199.005 490.5C177.255 505 152.506 512 128.131 512C86.757 512 46.258 492 21.509 455C-17.74 396.25 -1.74 316.75 57.008 277.5L96.007 251.5V96H351.876V257.6C346.645 256.852 341.439 256 336.001 256C274.147 256 224.004 306.145 224.004 368C224.004 400.418 237.99 429.379 260.005 449.832Z" })
    ]
  }
));
StockingDuotone.displayName = "StockingDuotone";
var Stocking_default = StockingDuotone;
