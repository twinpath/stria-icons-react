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
var Bahai_exports = {};
__export(Bahai_exports, {
  default: () => Bahai_default
});
module.exports = __toCommonJS(Bahai_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BahaiDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M338.403 311.625L286.52 300.375L288.52 354.125L255.89 311.625L223.26 354.125L225.26 300.375L173.377 311.625L209.007 271.75L162 246.625L214.633 239.25L194.63 189.375L239.637 218L255.89 166.75L272.143 218L317.15 189.375L297.146 239.25L349.78 246.625L302.772 271.75L338.403 311.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.288 202.5L386.271 187.125L428.152 82.75C434.779 66.125 416.526 50.5 401.523 60.125L307.508 120L273.378 12.875C270.627 4.25 263.376 0 256 0S241.373 4.25 238.622 12.875L204.492 120L110.477 60.125C95.474 50.625 77.222 66.125 83.848 82.75L125.729 187.125L15.712 202.5C-1.791 205 -5.917 228.75 9.711 237.25L107.851 289.875L33.34 373.375C22.463 385.625 31.589 404.375 46.717 404.375C47.967 404.375 49.342 404.125 50.717 403.875L159.36 380.25L155.234 492.75C154.734 504.375 164.11 512 173.612 512C178.738 512 183.989 509.75 187.864 504.75L256 415.875L324.261 504.75C328.011 509.75 333.262 512 338.388 512C347.89 512 357.266 504.375 356.766 492.75L352.765 380.25L461.283 403.875C478.66 407.625 490.537 386.625 478.66 373.375L404.149 289.875L502.289 237.125C517.917 228.75 513.791 205 496.288 202.5ZM338.513 311.625L286.63 300.375L288.63 354.125L256 311.625L223.37 354.125L225.37 300.375L173.487 311.625L209.118 271.75L162.11 246.625L214.743 239.25L194.74 189.375L239.747 218L256 166.75L272.253 218L317.26 189.375L297.257 239.25L349.89 246.625L302.882 271.75L338.513 311.625Z" })
    ]
  }
));
BahaiDuotone.displayName = "BahaiDuotone";
var Bahai_default = BahaiDuotone;
