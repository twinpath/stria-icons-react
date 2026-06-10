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
var FireSmoke_exports = {};
__export(FireSmoke_exports, {
  default: () => FireSmoke_default
});
module.exports = __toCommonJS(FireSmoke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireSmokeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M148.396 261.055C145.6 248.24 144 234.961 144 221.277C144 165 198.803 71.598 276 0C306.053 27.893 332.67 57.848 354.08 87.312C367.143 71.303 381.875 55.393 398.178 40.268C455.143 93.107 496 179.438 496 221.277C496 234.961 494.4 248.24 491.604 261.055C474.543 265.52 458.418 272.717 444.154 283.09C434.367 271.037 422.811 260.732 410.145 252.07C415.809 229.373 413.107 204.58 402.92 182.76C400.289 177.125 397.281 171.168 393.912 165.039L350.41 218.355L289.361 134.338C285.35 128.818 281.119 123.277 276.693 117.74C241.594 163.744 224 205.135 224 221.277C224 232.256 226.094 242.637 229.186 252.541C216.789 261.113 205.459 271.25 195.846 283.09C181.582 272.717 165.457 265.52 148.396 261.055Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M229.186 252.541C226.094 242.637 224 232.256 224 221.277C224 205.135 241.594 163.744 276.693 117.74C281.119 123.277 285.35 128.818 289.361 134.338L350.41 218.355L393.912 165.039C397.281 171.168 400.289 177.125 402.92 182.76C413.107 204.58 415.809 229.373 410.145 252.07C384.105 234.26 352.967 224 320 224C286.748 224 255.359 234.443 229.186 252.541ZM528 288C490.875 288 458.25 306.25 437.875 334.125C418.375 288.25 373 256 320 256S221.625 288.25 202.125 334.125C181.75 306.25 149.125 288 112 288C50.125 288 0 338.125 0 400S50.125 512 112 512H528C589.875 512 640 461.875 640 400S589.875 288 528 288Z" })
    ]
  }
));
FireSmokeDuotone.displayName = "FireSmokeDuotone";
var FireSmoke_default = FireSmokeDuotone;
