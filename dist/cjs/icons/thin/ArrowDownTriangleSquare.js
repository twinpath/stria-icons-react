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
var ArrowDownTriangleSquare_exports = {};
__export(ArrowDownTriangleSquare_exports, {
  default: () => ArrowDownTriangleSquare_default
});
module.exports = __toCommonJS(ArrowDownTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownTriangleSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.008 288.014H304.006C286.332 288.014 272.006 302.34 272.006 320.014V448C272.006 465.674 286.332 480 304.006 480H432.008C449.68 480 464.008 465.674 464.008 448V320.014C464.008 302.34 449.68 288.014 432.008 288.014ZM448.008 448C448.008 456.822 440.83 464 432.008 464H304.006C295.184 464 288.006 456.822 288.006 448V320.014C288.006 311.191 295.184 304.014 304.006 304.014H432.008C440.83 304.014 448.008 311.191 448.008 320.014V448ZM476.133 182.895L393.006 45.779C387.443 36.594 377.756 32 368.068 32S348.693 36.594 343.131 45.779L259.881 182.895C248.881 201.145 262.631 224.018 284.881 224.018H451.133C473.383 224.018 487.133 201.145 476.133 182.895ZM462.594 201.707C460.361 205.658 456.076 208.018 451.133 208.018H284.881C279.936 208.018 275.652 205.658 273.42 201.709C272.301 199.727 270.832 195.719 273.557 191.199L356.818 54.066C360.133 48.592 365.791 48 368.068 48C370.348 48 376.004 48.592 379.324 54.074L462.43 191.156C465.18 195.719 463.713 199.727 462.594 201.707ZM210.098 370.676L136 451.529V40.002C136 35.594 132.406 32 128 32S120 35.594 120 40.002V451.529L45.904 370.676C44.309 368.957 42.152 368.082 39.996 368.082C38.059 368.082 36.121 368.77 34.59 370.176C31.34 373.178 31.121 378.24 34.09 381.492L122.094 477.516C125.156 480.828 130.844 480.828 133.906 477.516L221.91 381.492C224.879 378.24 224.66 373.178 221.41 370.176C218.16 367.176 213.098 367.395 210.098 370.676Z" })
  }
));
ArrowDownTriangleSquareThin.displayName = "ArrowDownTriangleSquareThin";
var ArrowDownTriangleSquare_default = ArrowDownTriangleSquareThin;
