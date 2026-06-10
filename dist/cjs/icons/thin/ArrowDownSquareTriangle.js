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
var ArrowDownSquareTriangle_exports = {};
__export(ArrowDownSquareTriangle_exports, {
  default: () => ArrowDownSquareTriangle_default
});
module.exports = __toCommonJS(ArrowDownSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSquareTriangleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304.006 224H432.008C449.68 224 464.008 209.674 464.008 192V64C464.008 46.326 449.68 32 432.008 32H304.006C286.332 32 272.006 46.326 272.006 64V192C272.006 209.674 286.332 224 304.006 224ZM288.006 64C288.006 55.178 295.184 48 304.006 48H432.008C440.83 48 448.008 55.178 448.008 64V192C448.008 200.822 440.83 208 432.008 208H304.006C295.184 208 288.006 200.822 288.006 192V64ZM476.133 438.875L393.006 301.75C387.443 292.563 377.756 287.969 368.068 287.969S348.693 292.563 343.131 301.75L259.881 438.875C248.881 457.125 262.631 480 284.881 480H451.133C473.383 480 487.133 457.125 476.133 438.875ZM462.592 457.689C460.361 461.641 456.076 464 451.133 464H284.881C279.936 464 275.652 461.641 273.42 457.689C272.301 455.707 270.832 451.699 273.557 447.178L356.818 310.037C360.135 304.561 365.791 303.969 368.068 303.969C370.348 303.969 376.004 304.561 379.324 310.045L462.43 447.135C465.18 451.699 463.713 455.707 462.592 457.689ZM210.098 370.676L136 451.529V40.002C136 35.594 132.406 32 128 32S120 35.594 120 40.002V451.529L45.902 370.676C44.309 368.957 42.152 368.082 39.996 368.082C38.059 368.082 36.121 368.77 34.59 370.176C31.34 373.178 31.121 378.24 34.09 381.492L122.094 477.516C125.156 480.828 130.844 480.828 133.906 477.516L221.91 381.492C224.879 378.24 224.66 373.178 221.41 370.176C218.16 367.176 213.098 367.395 210.098 370.676Z" })
  }
));
ArrowDownSquareTriangleThin.displayName = "ArrowDownSquareTriangleThin";
var ArrowDownSquareTriangle_default = ArrowDownSquareTriangleThin;
