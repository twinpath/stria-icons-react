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
var Sunrise_exports = {};
__export(Sunrise_exports, {
  default: () => Sunrise_default
});
module.exports = __toCommonJS(Sunrise_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunriseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M62.408 432.016H167.936C186.928 385.23 232.225 352.004 285.826 352.004S384.725 385.23 403.717 432.016H509.242L539.088 388.998C545.42 379.871 540.191 367.252 529.262 365.275L420.256 345.572L400.555 236.545C398.58 225.611 385.961 220.385 376.834 226.719L285.826 289.881L194.816 226.717C185.691 220.383 173.072 225.609 171.096 236.543L151.396 345.572L42.389 365.273C31.459 367.25 26.23 379.871 32.562 388.996L62.408 432.016ZM203.303 432.016H368.35C351.793 403.424 321.254 384.01 285.826 384.01S219.859 403.424 203.303 432.016ZM551.993 463.99H24.003C10.801 463.99 0 474.792 0 487.993V487.993C0 501.197 10.803 512 24.007 512H551.997C565.199 512 576 501.199 576 487.997V487.997C576 474.793 565.197 463.99 551.993 463.99ZM227.984 121L256 98.578V192C256 209.688 270.328 224 288 224S320 209.688 320 192V98.578L348.016 121C361.781 132.031 381.938 129.75 392.984 116C404.031 102.188 401.797 82.062 387.984 71L307.984 7C306.525 5.838 304.818 5.254 303.225 4.379C301.959 3.678 300.84 2.844 299.477 2.316C295.771 0.887 291.918 0 288 0S280.229 0.887 276.523 2.316C275.16 2.844 274.041 3.678 272.775 4.379C271.182 5.254 269.475 5.838 268.016 7L188.016 71C174.203 82.062 171.969 102.188 183.016 116C194.031 129.812 214.203 132.031 227.984 121Z" })
  }
));
SunriseSolid.displayName = "SunriseSolid";
var Sunrise_default = SunriseSolid;
