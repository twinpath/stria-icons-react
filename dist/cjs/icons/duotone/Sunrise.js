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
const SunriseDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M286 384.01C250.572 384.01 220.033 403.423 203.476 432.017H368.523C351.967 403.423 321.428 384.01 286 384.01ZM529.435 365.276L420.429 345.573L400.728 236.545C398.754 225.612 386.135 220.386 377.008 226.719L286 289.881L194.99 226.717C185.865 220.384 173.246 225.61 171.269 236.543L151.57 345.573L42.562 365.274C31.633 367.251 26.404 379.872 32.736 388.997L62.582 432.017H168.109C187.101 385.231 232.398 352.004 286 352.004S384.898 385.231 403.89 432.017H509.416L539.262 388.999C545.594 379.872 540.365 367.253 529.435 365.276Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M551.993 463.99H24.003C10.801 463.99 0 474.792 0 487.993V487.993C0 501.197 10.803 512 24.007 512H551.997C565.199 512 576 501.199 576 487.997V487.997C576 474.793 565.197 463.99 551.993 463.99ZM227.984 121L256 98.578V192C256 209.688 270.328 224 288 224S320 209.688 320 192V98.578L348.016 121C361.781 132.031 381.938 129.75 392.984 116C404.031 102.188 401.797 82.062 387.984 71L307.984 7C306.525 5.838 304.818 5.254 303.225 4.379C301.959 3.678 300.84 2.844 299.477 2.316C295.771 0.887 291.918 0 288 0S280.229 0.887 276.523 2.316C275.16 2.844 274.041 3.678 272.775 4.379C271.182 5.254 269.475 5.838 268.016 7L188.016 71C174.203 82.062 171.969 102.188 183.016 116C194.031 129.812 214.203 132.031 227.984 121Z" })
    ]
  }
));
SunriseDuotone.displayName = "SunriseDuotone";
var Sunrise_default = SunriseDuotone;
