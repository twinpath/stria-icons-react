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
var PenToSquare_exports = {};
__export(PenToSquare_exports, {
  default: () => PenToSquare_default
});
module.exports = __toCommonJS(PenToSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenToSquareSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.99 448H63.998V128H220.125L284.125 64H63.998C28.654 64 0 92.652 0 128V448C0 483.346 28.654 512 63.998 512H383.99C419.334 512 447.988 483.346 447.988 448V227.896L383.99 291.891V448ZM497.941 42.193L469.809 14.059C451.062 -4.687 420.672 -4.687 401.928 14.059L363.307 52.691L459.318 148.705L497.937 110.078C516.686 91.334 516.688 60.939 497.941 42.193ZM147.279 274.418L128.236 369.641C126.559 378.037 133.961 385.437 142.355 383.76L237.582 364.713C242.229 363.783 246.494 361.5 249.844 358.15L436.691 171.328L340.68 75.314L153.842 262.152C150.492 265.504 148.209 269.771 147.279 274.418Z" })
  }
));
PenToSquareSolid.displayName = "PenToSquareSolid";
var PenToSquare_default = PenToSquareSolid;
