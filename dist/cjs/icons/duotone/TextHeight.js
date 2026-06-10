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
var TextHeight_exports = {};
__export(TextHeight_exports, {
  default: () => TextHeight_default
});
module.exports = __toCommonJS(TextHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextHeightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 72V120C320 142.094 302.094 160 280 160S240 142.094 240 120V112H199.357C199.449 113.107 200 114.057 200 115.188V416H224C241.672 416 256 430.312 256 448S241.672 480 224 480H96C78.328 480 64 465.688 64 448S78.328 416 96 416H120V115.188C120 114.057 120.551 113.107 120.643 112H80V120C80 142.094 62.094 160 40 160S0 142.094 0 120V72C0 49.906 17.906 32 40 32H280C302.094 32 320 49.906 320 72Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M571.247 395.289L491.251 475.311C485.001 481.563 475.001 481.563 468.751 475.311L388.753 395.289C378.629 385.286 385.753 368.031 400.003 368.031H448.002V143.969H400.003C384.378 143.969 379.378 125.964 388.753 116.711L468.751 36.689C475.001 30.437 485.001 30.437 491.251 36.689L571.247 116.711C581.372 126.714 574.247 143.969 559.997 143.969H511.998V368.031H559.997C575.622 368.031 580.622 386.036 571.247 395.289Z" })
    ]
  }
));
TextHeightDuotone.displayName = "TextHeightDuotone";
var TextHeight_default = TextHeightDuotone;
