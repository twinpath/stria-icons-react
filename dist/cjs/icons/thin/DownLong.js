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
var DownLong_exports = {};
__export(DownLong_exports, {
  default: () => DownLong_default
});
module.exports = __toCommonJS(DownLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLongThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M295.999 320.182H223.999V32.023C223.999 14.336 209.671 0 192 0H128C110.327 0 96.001 14.336 96.001 32.023V320.182H24.001C14.423 320.182 5.751 325.891 1.955 334.693C-1.827 343.496 -0.03 353.723 6.548 360.695L142.547 504.799C147.078 509.6 153.539 512 160 512S172.922 509.6 177.453 504.799L313.452 360.695C320.03 353.723 321.827 343.496 318.045 334.693C314.249 325.891 305.577 320.182 295.999 320.182ZM301.815 349.713L165.818 493.816C164.527 495.184 162.352 496 160 496S155.473 495.184 154.184 493.816L18.187 349.715C15.986 347.383 15.386 343.965 16.646 341.029C17.917 338.084 20.804 336.182 24.001 336.182H112V32.023C112 23.187 119.178 16 128 16H192C200.822 16 208 23.187 208 32.023V336.182H295.999C299.196 336.182 302.083 338.084 303.344 341.008C304.614 343.965 304.014 347.383 301.815 349.713Z" })
  }
));
DownLongThin.displayName = "DownLongThin";
var DownLong_default = DownLongThin;
