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
const HomeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 247.992C576 241.19 573.123 234.435 567.529 229.679L303.531 5.672C299.047 1.891 293.523 0 288 0S276.953 1.891 272.469 5.672L8.471 229.679C2.877 234.435 0 241.19 0 247.992C0 264.08 13.826 271.992 24.02 271.992C29.499 271.992 35.009 270.125 39.533 266.305L64.002 245.541V471.999C64.002 494.062 81.939 512 104.001 512H200.001C222.063 512 240 494.062 240 471.999V351.995H336V471.999C336 494.062 353.937 512 375.999 512H471.999C494.061 512 511.998 494.062 511.998 471.999V245.541L536.467 266.305C540.983 270.118 546.498 271.993 551.983 271.993C562.143 271.993 576 263.963 576 247.992ZM463.999 463.999H383.999V343.995C383.999 321.932 366.062 303.994 344 303.994H232C209.938 303.994 192.001 321.932 192.001 343.995V463.999H112.001V207.991C112.001 207.028 111.564 206.207 111.452 205.274L288 55.455L463.999 204.809V463.999Z " })
  }
));
HomeRegular.displayName = "HomeRegular";
var Home_default = HomeRegular;
