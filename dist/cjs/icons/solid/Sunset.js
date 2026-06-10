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
const SunsetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M62.408 432.016H167.936C186.928 385.23 232.225 352.004 285.826 352.004S384.725 385.23 403.717 432.016H509.242L539.088 388.998C545.42 379.871 540.191 367.252 529.262 365.275L420.256 345.572L400.555 236.545C398.58 225.611 385.961 220.385 376.834 226.719L285.826 289.881L194.816 226.717C185.691 220.383 173.072 225.609 171.096 236.543L151.396 345.572L42.389 365.273C31.459 367.25 26.23 379.871 32.562 388.996L62.408 432.016ZM203.303 432.016H368.35C351.793 403.424 321.254 384.01 285.826 384.01S219.859 403.424 203.303 432.016ZM551.993 463.99H24.003C10.801 463.99 0 474.792 0 487.993V487.993C0 501.197 10.803 512 24.007 512H551.997C565.199 512 576 501.199 576 487.997V487.997C576 474.793 565.197 463.99 551.993 463.99ZM268.016 217C269.475 218.162 271.182 218.746 272.775 219.621C274.041 220.322 275.16 221.156 276.523 221.684C280.229 223.113 284.082 224 288 224S295.771 223.113 299.477 221.684C300.84 221.156 301.959 220.322 303.225 219.621C304.818 218.746 306.525 218.162 307.984 217L387.984 153C401.797 141.938 404.031 121.812 392.984 108C381.969 94.188 361.797 91.969 348.016 103L320 125.422V32C320 14.312 305.672 0 288 0S256 14.312 256 32V125.422L227.984 103C214.219 91.969 194.062 94.25 183.016 108C171.969 121.812 174.203 141.938 188.016 153L268.016 217Z" })
  }
));
SunsetSolid.displayName = "SunsetSolid";
var Sunset_default = SunsetSolid;
