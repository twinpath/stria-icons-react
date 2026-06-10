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
var Campground_exports = {};
__export(Campground_exports, {
  default: () => Campground_default
});
module.exports = __toCommonJS(Campground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampgroundRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M562.781 415.155L318.844 113.152L378.656 39.089C387 28.776 385.406 13.651 375.094 5.338C364.719 -3.006 349.656 -1.349 341.344 8.901L288 74.933L234.656 8.901C226.375 -1.381 211.25 -3.006 200.906 5.338C190.594 13.651 189 28.776 197.344 39.089L257.156 113.152L13.188 415.186C4.688 425.718 0 438.999 0 452.531C0 485.312 26.688 512 59.469 512H516.531C549.312 512 576 485.312 576 452.531C576 438.999 571.312 425.718 562.781 415.155ZM185.994 463.999L288 327.998L390.006 463.999H185.994ZM516.531 463.999H449.992L307.188 273.591C298.125 261.529 277.875 261.529 268.812 273.591L126.008 463.999H59.469C53.156 463.999 48 458.843 48 452.531C48 449.937 48.906 447.374 50.531 445.343L288 151.34L525.438 445.312C527.094 447.374 528 449.937 528 452.531C528 458.843 522.844 463.999 516.531 463.999Z" })
  }
));
CampgroundRegular.displayName = "CampgroundRegular";
var Campground_default = CampgroundRegular;
