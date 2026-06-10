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
var Font_exports = {};
__export(Font_exports, {
  default: () => Font_default
});
module.exports = __toCommonJS(Font_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FontThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 463.982H389.566L231.5 36.717C229.188 30.428 218.812 30.428 216.5 36.717L58.434 463.982H8C3.594 463.982 0 467.564 0 471.99C0 476.418 3.594 480 8 480H136C140.406 480 144 476.418 144 471.99C144 467.564 140.406 463.982 136 463.982H75.492L126.148 327.059C126.814 327.238 127.277 327.828 128 327.828H320C320.723 327.828 321.186 327.238 321.852 327.059L372.508 463.982H312C307.594 463.982 304 467.564 304 471.99C304 476.418 307.594 480 312 480H440C444.406 480 448 476.418 448 471.99C448 467.564 444.406 463.982 440 463.982ZM131.789 311.809L224 62.559L316.211 311.809H131.789Z" })
  }
));
FontThin.displayName = "FontThin";
var Font_default = FontThin;
