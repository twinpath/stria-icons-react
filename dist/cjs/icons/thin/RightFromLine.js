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
var RightFromLine_exports = {};
__export(RightFromLine_exports, {
  default: () => RightFromLine_default
});
module.exports = __toCommonJS(RightFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromLineThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 72V440C0 444.418 3.582 448 8 448S16 444.418 16 440V72C16 67.582 12.418 64 8 64S0 67.582 0 72ZM256.182 120V192H128.092C110.404 192 96.068 206.328 96.068 224V288C96.068 305.674 110.404 320 128.092 320H256.182V392C256.182 401.578 261.891 410.25 270.693 414.047C279.496 417.828 289.723 416.031 296.695 409.453L440.799 273.453C445.6 268.922 448 262.461 448 256S445.6 243.078 440.799 238.547L296.695 102.547C289.723 95.969 279.496 94.172 270.693 97.953C261.891 101.75 256.182 110.422 256.182 120ZM285.713 114.184L429.816 250.182C431.184 251.473 432 253.648 432 256S431.184 260.527 429.816 261.816L285.715 397.814C283.383 400.016 279.965 400.615 277.029 399.355C274.084 398.084 272.182 395.197 272.182 392V304H128.092C119.256 304 112.068 296.822 112.068 288V224C112.068 215.178 119.256 208 128.092 208H272.182V120C272.182 116.803 274.084 113.916 277.008 112.654C279.965 111.385 283.383 111.984 285.713 114.184Z" })
  }
));
RightFromLineThin.displayName = "RightFromLineThin";
var RightFromLine_default = RightFromLineThin;
