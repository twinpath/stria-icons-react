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
var UpRightAndDownLeftFromCenter_exports = {};
__export(UpRightAndDownLeftFromCenter_exports, {
  default: () => UpRightAndDownLeftFromCenter_default
});
module.exports = __toCommonJS(UpRightAndDownLeftFromCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightAndDownLeftFromCenterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 0H368.032C355.032 0 343.438 7.766 338.469 19.766C333.5 31.766 336.219 45.453 345.407 54.625L390.078 99.297L292.686 196.687C286.438 202.937 286.438 213.066 292.686 219.312C298.934 225.562 309.063 225.562 315.311 219.312L412.696 121.93L457.375 166.609C463.531 172.734 471.656 175.984 479.969 175.984C484.094 175.984 488.281 175.172 492.25 173.531C504.25 168.547 512 156.953 512 143.969V32C512 14.328 497.674 0 480 0ZM480 143.969L367.875 32.016C367.875 32.016 367.938 32 368.032 32H480V143.969ZM32 512H143.968C156.968 512 168.562 504.234 173.531 492.234C178.5 480.234 175.781 466.547 166.593 457.375L121.922 412.703L219.314 315.312C225.562 309.062 225.562 298.934 219.314 292.688C213.066 286.438 202.937 286.438 196.689 292.688L99.304 390.07L54.625 345.391C48.469 339.266 40.344 336.016 32.031 336.016C27.906 336.016 23.719 336.828 19.75 338.469C7.75 343.453 0 355.047 0 368.031V480C0 497.672 14.326 512 32 512ZM32 368.031L144.125 479.984C144.125 479.984 144.062 480 143.968 480H32V368.031Z" })
  }
));
UpRightAndDownLeftFromCenterLight.displayName = "UpRightAndDownLeftFromCenterLight";
var UpRightAndDownLeftFromCenter_default = UpRightAndDownLeftFromCenterLight;
