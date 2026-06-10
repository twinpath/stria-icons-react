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
var SquareStar_exports = {};
__export(SquareStar_exports, {
  default: () => SquareStar_default
});
module.exports = __toCommonJS(SquareStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareStarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.652 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM359.299 200.463L276.971 188.484L240.166 114.016C236.863 107.357 230.41 103.998 223.961 104C217.551 104 211.143 107.318 207.834 114.016L171.029 188.484L88.701 200.463C73.926 202.598 68.01 220.764 78.717 231.168L138.291 289.1L124.203 370.934C122.199 382.631 131.523 392 141.982 392C144.756 392 147.611 391.34 150.354 389.891L224 351.248L297.646 389.891C300.383 391.326 303.229 391.979 305.998 391.979C316.463 391.979 325.803 382.639 323.797 370.934L309.709 289.1L369.283 231.168C379.99 220.764 374.074 202.598 359.299 200.463ZM281.356 272.035C277.574 275.713 275.848 281.02 276.743 286.22L287.447 348.4L231.434 319.01C226.779 316.568 221.221 316.568 216.566 319.01L160.553 348.4L171.257 286.22C172.152 281.02 170.427 275.713 166.644 272.035L121.404 228.041L183.953 218.94C189.16 218.183 193.662 214.914 195.993 210.196L224 153.529L252.007 210.196C254.338 214.914 258.84 218.183 264.047 218.94L326.598 228.041L281.356 272.035Z" })
  }
));
SquareStarLight.displayName = "SquareStarLight";
var SquareStar_default = SquareStarLight;
