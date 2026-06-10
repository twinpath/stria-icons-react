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
const BahaiSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.209 202.5L386.209 187.125L428.084 82.75C434.709 66.125 416.459 50.5 401.459 60.125L307.459 120L273.334 12.875C270.584 4.25 263.334 0 255.959 0S241.334 4.25 238.584 12.875L204.459 120L110.459 60.125C95.459 50.625 77.209 66.125 83.834 82.75L125.709 187.125L15.709 202.5C-1.791 205 -5.916 228.75 9.709 237.25L107.834 289.875L33.334 373.375C22.459 385.625 31.584 404.375 46.709 404.375C47.959 404.375 49.334 404.125 50.709 403.875L159.334 380.25L155.209 492.75C154.709 504.375 164.084 512 173.584 512C178.709 512 183.959 509.75 187.834 504.75L255.959 415.875L324.209 504.75C327.959 509.75 333.209 512 338.334 512C347.834 512 357.209 504.375 356.709 492.75L352.709 380.25L461.209 403.875C478.584 407.625 490.459 386.625 478.584 373.375L404.084 289.875L502.209 237.125C517.834 228.75 513.709 205 496.209 202.5ZM338.459 311.625L286.584 300.375L288.584 354.125L255.959 311.625L223.334 354.125L225.334 300.375L173.459 311.625L209.084 271.75L162.084 246.625L214.709 239.25L194.709 189.375L239.709 218L255.959 166.75L272.209 218L317.209 189.375L297.209 239.25L349.834 246.625L302.834 271.75L338.459 311.625Z" })
  }
));
BahaiSolid.displayName = "BahaiSolid";
var Bahai_default = BahaiSolid;
