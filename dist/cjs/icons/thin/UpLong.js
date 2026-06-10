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
var UpLong_exports = {};
__export(UpLong_exports, {
  default: () => UpLong_default
});
module.exports = __toCommonJS(UpLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpLongThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24.001 191.818H96.001V479.977C96.001 497.664 110.329 512 128 512H192C209.673 512 223.999 497.664 223.999 479.977V191.818H295.999C305.577 191.818 314.249 186.109 318.045 177.307C321.827 168.504 320.03 158.277 313.452 151.305L177.453 7.201C172.922 2.4 166.461 0 160 0S147.078 2.4 142.547 7.201L6.548 151.305C-0.03 158.277 -1.827 168.504 1.955 177.307C5.751 186.109 14.423 191.818 24.001 191.818ZM18.185 162.287L154.182 18.184C155.473 16.816 157.648 16 160 16S164.527 16.816 165.816 18.184L301.813 162.285C304.014 164.617 304.614 168.035 303.354 170.971C302.083 173.916 299.196 175.818 295.999 175.818H208V479.977C208 488.812 200.822 496 192 496H128C119.178 496 112 488.812 112 479.977V175.818H24.001C20.804 175.818 17.917 173.916 16.656 170.992C15.386 168.035 15.986 164.617 18.185 162.287Z" })
  }
));
UpLongThin.displayName = "UpLongThin";
var UpLong_default = UpLongThin;
