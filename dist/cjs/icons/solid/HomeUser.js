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
var HomeUser_exports = {};
__export(HomeUser_exports, {
  default: () => HomeUser_default
});
module.exports = __toCommonJS(HomeUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeUserSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M565.077 231.922L309.078 7.951C303.047 2.668 295.523 0.029 287.999 0.029C281.868 0.029 273.895 1.845 266.921 7.951L10.922 231.922C3.842 238.119 0 246.962 0 256.015C0 273.57 14.223 288.013 32 288.013H64.023V448.004C64.023 483.347 92.678 512 128.023 512H447.993C483.339 512 511.993 483.347 511.993 448.004V288.013H543.999C561.735 288.013 575.999 273.615 575.999 256.015C575.999 246.962 572.157 238.119 565.077 231.922ZM287.994 192.018C323.339 192.018 351.994 220.671 351.994 256.015S323.339 320.011 287.994 320.011S223.994 291.358 223.994 256.015S252.648 192.018 287.994 192.018ZM383.994 448.004H191.994C183.158 448.004 175.994 440.84 175.994 432.005C175.994 387.824 211.81 352.009 255.994 352.009H319.994C364.177 352.009 399.993 387.824 399.993 432.005C399.993 440.84 392.829 448.004 383.994 448.004Z " })
  }
));
HomeUserSolid.displayName = "HomeUserSolid";
var HomeUser_default = HomeUserSolid;
