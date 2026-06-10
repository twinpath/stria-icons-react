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
var CircleChevronLeft_exports = {};
__export(CircleChevronLeft_exports, {
  default: () => CircleChevronLeft_default
});
module.exports = __toCommonJS(CircleChevronLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleChevronLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 256C16 388.547 123.451 496 256 496S496 388.547 496 256S388.549 16 256 16S16 123.453 16 256ZM480 256C480 379.514 379.514 480 256 480S32 379.514 32 256S132.486 32 256 32S480 132.486 480 256ZM170.547 250.143C167.297 253.143 167.297 258.83 170.547 261.83L290.547 373.83C293.766 376.861 298.828 376.674 301.844 373.455C304.844 370.205 304.703 365.174 301.453 362.143L187.719 255.986L301.453 149.83C303.141 148.268 304 146.111 304 143.986C304 142.018 303.281 140.08 301.844 138.518C298.828 135.299 293.766 135.111 290.547 138.143L170.547 250.143Z" })
  }
));
CircleChevronLeftThin.displayName = "CircleChevronLeftThin";
var CircleChevronLeft_default = CircleChevronLeftThin;
