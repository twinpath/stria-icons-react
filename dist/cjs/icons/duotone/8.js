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
var __exports = {};
__export(__exports, {
  default: () => __default
});
module.exports = __toCommonJS(__exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Icon8Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M278.586 246.605C294.445 224.363 304 197.342 304 168C304 93 243 32 168 32H152C77 32 16 93 16 168C16 197.342 25.555 224.363 41.414 246.605C15.955 271.334 0 305.783 0 344C0 419 61 480 136 480H184C259 480 320 419 320 344C320 305.783 304.045 271.334 278.586 246.605ZM152 128H168C190.062 128 208 145.938 208 168S190.062 208 168 208H152C129.938 208 112 190.062 112 168S129.938 128 152 128ZM184 384H136C113.938 384 96 366.062 96 344S113.938 304 136 304H184C206.062 304 224 321.938 224 344S206.062 384 184 384Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
Icon8Duotone.displayName = "Icon8Duotone";
var __default = Icon8Duotone;
