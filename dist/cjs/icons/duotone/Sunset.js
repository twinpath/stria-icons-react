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
var Sunset_exports = {};
__export(Sunset_exports, {
  default: () => Sunset_default
});
module.exports = __toCommonJS(Sunset_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SunsetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M529.435 365.276L420.429 345.573L400.728 236.545C398.754 225.612 386.135 220.386 377.008 226.719L286 289.881L194.99 226.717C185.865 220.384 173.246 225.61 171.269 236.543L151.57 345.573L42.562 365.274C31.633 367.251 26.404 379.872 32.736 388.997L62.582 432.017H168.109C187.101 385.231 232.398 352.004 286 352.004S384.898 385.231 403.89 432.017H509.416L539.262 388.999C545.594 379.872 540.365 367.253 529.435 365.276ZM286 384.01C250.572 384.01 220.033 403.423 203.476 432.017H368.523C351.967 403.423 321.428 384.01 286 384.01Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M551.993 463.99H24.003C10.801 463.99 0 474.792 0 487.993V487.993C0 501.197 10.803 512 24.007 512H551.997C565.199 512 576 501.199 576 487.997V487.997C576 474.793 565.197 463.99 551.993 463.99ZM268.016 217C269.475 218.162 271.182 218.746 272.775 219.621C274.041 220.322 275.16 221.156 276.523 221.684C280.229 223.113 284.082 224 288 224S295.771 223.113 299.477 221.684C300.84 221.156 301.959 220.322 303.225 219.621C304.818 218.746 306.525 218.162 307.984 217L387.984 153C401.797 141.938 404.031 121.812 392.984 108C381.969 94.188 361.797 91.969 348.016 103L320 125.422V32C320 14.312 305.672 0 288 0S256 14.312 256 32V125.422L227.984 103C214.219 91.969 194.062 94.25 183.016 108C171.969 121.812 174.203 141.938 188.016 153L268.016 217Z" })
    ]
  }
));
SunsetDuotone.displayName = "SunsetDuotone";
var Sunset_default = SunsetDuotone;
