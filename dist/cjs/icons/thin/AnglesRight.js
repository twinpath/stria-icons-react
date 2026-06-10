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
var AnglesRight_exports = {};
__export(AnglesRight_exports, {
  default: () => AnglesRight_default
});
module.exports = __toCommonJS(AnglesRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M258.213 109.533L396.922 256.002L258.217 402.467C255.186 405.623 255.279 410.686 258.467 413.779C261.654 416.842 266.732 416.717 269.779 413.529L413.781 261.533C415.266 259.971 416 258.002 416 256.002C416 254.002 415.266 252.033 413.781 250.471L269.775 98.471C266.729 95.283 261.65 95.158 258.463 98.221C255.275 101.252 255.182 106.314 258.213 109.533ZM221.775 261.533C223.26 259.971 223.994 258.002 223.994 256.002C223.994 254.002 223.26 252.033 221.775 250.471L77.771 98.471C74.724 95.283 69.646 95.158 66.459 98.221C63.271 101.252 63.178 106.314 66.209 109.533L204.916 256.002L66.211 402.467C63.18 405.623 63.273 410.686 66.461 413.779C69.648 416.842 74.726 416.717 77.773 413.529L221.775 261.533Z" })
  }
));
AnglesRightThin.displayName = "AnglesRightThin";
var AnglesRight_default = AnglesRightThin;
