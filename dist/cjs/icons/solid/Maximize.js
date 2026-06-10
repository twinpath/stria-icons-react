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
var Maximize_exports = {};
__export(Maximize_exports, {
  default: () => Maximize_default
});
module.exports = __toCommonJS(Maximize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MaximizeSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 319.995V455.992C448 469.247 437.254 479.991 424 479.991H288.001C275.064 479.991 263.392 472.21 258.439 460.242C253.533 448.242 256.236 434.523 265.377 425.367L295.439 395.306L224 323.872L152.565 395.313L182.627 425.375C191.783 434.531 194.533 448.281 189.565 460.249C184.627 472.202 172.94 479.999 160.003 479.999H24.004C10.75 479.999 0.004 469.255 0.004 456V320.002C0.004 307.065 7.785 295.394 19.754 290.441C23.722 288.8 27.879 288.003 32.004 288.003C40.316 288.003 48.503 291.253 54.628 297.378L84.691 327.44L156.128 255.998L84.687 184.558L54.625 214.62C45.468 223.776 31.718 226.526 19.75 221.557C7.797 216.62 0 204.933 0 191.996V55.999C0 42.743 10.746 31.999 24 31.999H159.999C172.936 31.999 184.608 39.78 189.561 51.749C191.201 55.717 191.998 59.873 191.998 63.998C191.998 72.311 188.748 80.498 182.623 86.623L152.561 116.685L224.002 188.123L295.435 116.689L265.373 86.627C256.217 77.471 253.467 63.721 258.435 51.753C263.373 39.8 275.06 32.003 287.997 32.003H423.996C437.252 32.003 447.996 42.749 447.996 56.002V191.999C447.996 204.937 440.215 216.608 428.246 221.561C416.246 226.467 402.528 223.764 393.372 214.624L363.309 184.562L291.878 255.994L363.313 327.432L393.375 297.37C402.532 288.214 416.282 285.464 428.25 290.433C440.203 295.37 448 307.057 448 319.995Z" })
  }
));
MaximizeSolid.displayName = "MaximizeSolid";
var Maximize_default = MaximizeSolid;
