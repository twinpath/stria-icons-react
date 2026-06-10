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
var ArrowUpTriangleSquare_exports = {};
__export(ArrowUpTriangleSquare_exports, {
  default: () => ArrowUpTriangleSquare_default
});
module.exports = __toCommonJS(ArrowUpTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpTriangleSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.995 274.234H319.993C302.319 274.234 287.993 288.562 287.993 306.234V434.219C287.993 451.891 302.319 466.219 319.993 466.219H447.995C465.669 466.219 479.995 451.891 479.995 434.219V306.234C479.995 288.562 465.669 274.234 447.995 274.234ZM492.12 169.113L408.993 32C397.868 13.625 370.243 13.625 359.118 32L275.868 169.113C264.868 187.363 278.618 210.234 300.868 210.234H467.118C489.37 210.234 503.12 187.363 492.12 169.113Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M239.591 138.039C251.527 151.086 250.652 171.352 237.623 183.305C224.031 195.766 203.826 193.785 192.404 181.332L160 145.938V447.969C160 465.672 145.671 480 128 480S96 465.672 96 447.969V145.938L63.595 181.332C51.642 194.344 31.392 195.25 18.377 183.305C5.347 171.352 4.472 151.086 16.408 138.039L104.406 41.945C116.531 28.684 139.468 28.684 151.593 41.945L239.591 138.039Z" })
    ]
  }
));
ArrowUpTriangleSquareDuotone.displayName = "ArrowUpTriangleSquareDuotone";
var ArrowUpTriangleSquare_default = ArrowUpTriangleSquareDuotone;
