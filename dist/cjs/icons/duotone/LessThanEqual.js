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
var LessThanEqual_exports = {};
__export(LessThanEqual_exports, {
  default: () => LessThanEqual_default
});
module.exports = __toCommonJS(LessThanEqual_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LessThanEqualDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 439.998V440C0 462.092 17.902 480 39.984 480H408.016C430.098 480 448 462.092 448 440S430.098 400 408.016 400H39.984C17.902 400 0 417.908 0 439.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390.682 274.777L180.936 191.992L390.682 109.209C411.227 101.082 421.305 77.863 413.195 57.299C405.117 36.768 381.932 26.736 361.307 34.768L57.312 154.771C42.031 160.805 32 175.555 32 191.992C32 208.432 42.031 223.182 57.312 229.213L361.307 349.219C366.135 351.094 371.104 352 375.979 352C391.932 352 406.992 342.406 413.195 326.686C421.305 306.123 411.227 282.902 390.682 274.777Z" })
    ]
  }
));
LessThanEqualDuotone.displayName = "LessThanEqualDuotone";
var LessThanEqual_default = LessThanEqualDuotone;
