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
var ArrowUpSquareTriangle_exports = {};
__export(ArrowUpSquareTriangle_exports, {
  default: () => ArrowUpSquareTriangle_default
});
module.exports = __toCommonJS(ArrowUpSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpSquareTriangleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.993 224H447.995C465.669 224 479.995 209.672 479.995 192V64C479.995 46.328 465.669 32 447.995 32H319.993C302.319 32 287.993 46.328 287.993 64V192C287.993 209.672 302.319 224 319.993 224ZM492.12 438.875L408.993 301.75C397.868 283.375 370.243 283.375 359.118 301.75L275.868 438.875C264.868 457.125 278.618 480 300.868 480H467.118C489.37 480 503.12 457.125 492.12 438.875Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M239.591 138.039C251.527 151.086 250.652 171.352 237.623 183.305C224.031 195.766 203.826 193.785 192.404 181.332L160 145.938V447.969C160 465.672 145.671 480 128 480S96 465.672 96 447.969V145.938L63.595 181.332C51.642 194.344 31.392 195.25 18.377 183.305C5.347 171.352 4.472 151.086 16.408 138.039L104.406 41.945C116.531 28.684 139.468 28.684 151.593 41.945L239.591 138.039Z" })
    ]
  }
));
ArrowUpSquareTriangleDuotone.displayName = "ArrowUpSquareTriangleDuotone";
var ArrowUpSquareTriangle_default = ArrowUpSquareTriangleDuotone;
