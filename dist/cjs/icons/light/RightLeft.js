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
var RightLeft_exports = {};
__export(RightLeft_exports, {
  default: () => RightLeft_default
});
module.exports = __toCommonJS(RightLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 144H352V232C352 241.547 357.656 250.188 366.406 254.001C375.156 257.812 385.344 256.078 392.328 249.594L504.328 145.594C509.443 140.844 512 134.42 512 127.998S509.443 115.154 504.328 110.404L392.328 6.404C385.344 -0.08 375.156 -1.814 366.406 1.998S352 14.451 352 23.998V112H16C7.156 112 0 119.156 0 128S7.156 144 16 144ZM384 42.34L476.248 127.998L384 213.658V42.34ZM496 367.998H160V279.998C160 270.451 154.344 261.811 145.594 257.998S126.656 255.92 119.672 262.404L7.672 366.404C2.557 371.154 0 377.578 0 384S2.557 396.844 7.672 401.594L119.672 505.594C126.656 512.078 136.844 513.812 145.594 510.001C154.344 506.188 160 497.547 160 488V399.998H496C504.844 399.998 512 392.842 512 383.998S504.844 367.998 496 367.998ZM128 469.658L35.752 384L128 298.34V469.658Z" })
  }
));
RightLeftLight.displayName = "RightLeftLight";
var RightLeft_default = RightLeftLight;
