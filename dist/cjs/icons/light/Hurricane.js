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
var Hurricane_exports = {};
__export(Hurricane_exports, {
  default: () => Hurricane_default
});
module.exports = __toCommonJS(Hurricane_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HurricaneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 400.08C256 391.236 248.844 384.078 240 384.078C142.969 384.078 64 305.102 64 207.998C64 118.111 130.594 42.416 218.906 31.916C227.688 30.883 233.969 22.914 232.906 14.164C231.844 5.35 223.406 -1.119 215.156 0.162C110.75 12.568 32 101.924 32 207.998C32 322.729 125.312 416.082 240 416.082C248.844 416.082 256 408.926 256 400.08ZM208 95.953C199.156 95.953 192 103.111 192 111.955C192 120.801 199.156 127.957 208 127.957C305.031 127.957 384 206.934 384 304.008C384 393.893 317.406 469.619 229.094 480.121C220.312 481.152 214.031 489.121 215.094 497.873C216.062 506.029 222.969 512 230.938 512C231.594 512 232.219 511.969 232.844 511.875C337.25 499.467 416 410.113 416 304.008C416 189.275 322.688 95.953 208 95.953ZM224 336.043C267.312 336.043 302.562 300.164 302.562 256.064C302.562 211.936 267.312 176.057 224 176.057S145.438 211.936 145.438 256.064C145.438 300.164 180.688 336.043 224 336.043ZM224 208.061C249.688 208.061 270.562 229.594 270.562 256.064C270.562 282.506 249.687 304.039 224 304.039S177.438 282.506 177.438 256.064C177.438 229.594 198.312 208.061 224 208.061Z" })
  }
));
HurricaneLight.displayName = "HurricaneLight";
var Hurricane_default = HurricaneLight;
