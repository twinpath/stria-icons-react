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
var Sack_exports = {};
__export(Sack_exports, {
  default: () => Sack_default
});
module.exports = __toCommonJS(Sack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SackLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M325.947 115.875L381.32 34.75C385.07 27.25 384.695 18.5 380.32 11.375C375.947 4.375 368.197 0 359.947 0H151.955C143.58 0 135.955 4.25 131.58 11.375C127.207 18.5 126.707 27.25 130.457 34.75L185.953 115.875C-9.914 235.625 0.086 392 0.086 412C0.086 467.25 49.209 512 109.707 512H402.195C462.818 512 511.941 467.25 511.941 412C511.941 392.375 520.691 235 325.947 115.875ZM167.346 32H344.455L289.848 112H222.074L167.346 32ZM479.941 412C479.941 449.494 445.064 480 402.195 480H109.707C66.906 480 32.086 449.494 32.086 412C31.275 331.913 64.51 228.224 201.387 144H310.514C446.935 227.998 480.602 332.118 479.941 412Z" })
  }
));
SackLight.displayName = "SackLight";
var Sack_default = SackLight;
