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
const BahaiRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.288 202.5L386.271 187.125L428.152 82.75C433.403 69.625 423.152 57.25 411.15 57.25C408.024 57.25 404.649 58.125 401.523 60.125L307.508 120L273.378 12.875C270.627 4.25 263.376 0 256 0S241.373 4.25 238.622 12.875L204.492 120L110.477 60.125C107.351 58.125 103.976 57.25 100.85 57.25C88.848 57.25 78.597 69.625 83.973 82.75L125.729 187.125L15.712 202.5C-1.791 205 -5.917 228.75 9.711 237.25L107.851 289.875L33.34 373.375C22.463 385.625 31.589 404.375 46.592 404.375C47.967 404.375 49.342 404.125 50.717 403.875L159.36 380.25L155.234 492.75C154.734 504.375 164.11 512 173.612 512C178.738 512 183.989 509.75 187.864 504.75L256 415.875L324.136 504.75C328.011 509.75 333.262 512 338.388 512C347.89 512 357.266 504.375 356.766 492.75L352.64 380.25L461.283 403.875C462.658 404.125 464.033 404.375 465.408 404.375C480.411 404.375 489.537 385.625 478.66 373.375L404.149 289.875L502.289 237.25C517.917 228.75 513.791 205 496.288 202.5ZM369.018 322L383.02 337.75L362.642 333.25L303.133 320.375L305.383 382L306.133 403.125L293.381 386.5L256 337.75L218.619 386.5L205.867 403.125L206.617 382L208.868 320.375L149.358 333.25L128.98 337.75L142.982 322L183.739 276.25L129.98 247.375L111.602 237.5L132.23 234.625L192.49 226.125L169.611 169L161.735 149.375L179.363 160.625L230.871 193.5L249.624 134.75L256 114.625L262.376 134.75L281.129 193.5L332.637 160.625L350.265 149.375L342.389 169L319.51 226.125L379.77 234.625L400.398 237.5L382.02 247.375L328.261 276.25L369.018 322Z" })
  }
));
BahaiRegular.displayName = "BahaiRegular";
var Bahai_default = BahaiRegular;
