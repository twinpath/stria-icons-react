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
var FireFlameSimple_exports = {};
__export(FireFlameSimple_exports, {
  default: () => FireFlameSimple_default
});
module.exports = __toCommonJS(FireFlameSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M203.113 4.365C196.937 -1.456 187.058 -1.454 180.879 4.364C74.519 104.508 0 234.137 0 312C0 437.945 79 512 192 512S384 437.945 384 312C384 233.902 309.032 104.166 203.113 4.365ZM192 432C135.5 432 96 394.239 96 340.259C96 327.793 100.207 284.941 179.868 197.215C186.181 190.262 197.819 190.262 204.132 197.215C283.793 284.941 288 327.793 288 340.259C288 394.239 248.5 432 192 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 432C135.5 432 96 394.239 96 340.259C96 327.793 100.207 284.941 179.868 197.215C186.181 190.262 197.819 190.262 204.132 197.215C283.793 284.941 288 327.793 288 340.259C288 394.239 248.5 432 192 432Z" })
    ]
  }
));
FireFlameSimpleDuotone.displayName = "FireFlameSimpleDuotone";
var FireFlameSimple_default = FireFlameSimpleDuotone;
