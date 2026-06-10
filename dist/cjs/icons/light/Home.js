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
var Home_exports = {};
__export(Home_exports, {
  default: () => Home_default
});
module.exports = __toCommonJS(Home_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.004 256.01C576.004 251.575 574.172 247.161 570.58 244L298.58 4C295.565 1.344 291.783 0.016 288.002 0.016S280.44 1.344 277.424 4L5.424 244C1.832 247.161 0 251.575 0 256.01C0 264.934 7.242 271.993 16.05 271.993C19.808 271.993 23.571 270.68 26.58 268L64.002 234.982V464C64.002 490.469 85.533 512 112.002 512H192.002C218.471 512 240.002 490.469 240.002 464V352H336.002V464C336.002 490.469 357.533 512 384.002 512H464.002C490.471 512 512.002 490.469 512.002 464V234.982L549.424 268C552.455 270.688 556.237 272 560.002 272C568.729 272 576.004 264.947 576.004 256.01ZM480.002 208V464C480.002 472.812 472.83 480 464.002 480H384.002C375.174 480 368.002 472.812 368.002 464V352C368.002 334.344 353.643 320 336.002 320H240.002C222.362 320 208.002 334.344 208.002 352V464C208.002 472.812 200.83 480 192.002 480H112.002C103.174 480 96.002 472.812 96.002 464V208C96.002 207.623 95.813 207.309 95.787 206.938L288.002 37.344L480.217 206.938C480.192 207.309 480.002 207.623 480.002 208Z " })
  }
));
HomeLight.displayName = "HomeLight";
var Home_default = HomeLight;
