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
var ArrowDownSquareTriangle_exports = {};
__export(ArrowDownSquareTriangle_exports, {
  default: () => ArrowDownSquareTriangle_default
});
module.exports = __toCommonJS(ArrowDownSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownSquareTriangleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M237.623 328.695C250.652 340.648 251.527 360.914 239.591 373.961L151.593 470.055C139.468 483.312 116.531 483.312 104.406 470.055L16.408 373.961C4.472 360.914 5.347 340.648 18.377 328.695C31.968 316.234 52.173 318.211 63.595 330.664L96 366.062V64.031C96 46.328 110.328 32 128 32S160 46.328 160 64.031V366.063L192.404 330.664C204.357 317.656 224.607 316.75 237.623 328.695Z" })
    ]
  }
));
ArrowDownSquareTriangleDuotone.displayName = "ArrowDownSquareTriangleDuotone";
var ArrowDownSquareTriangle_default = ArrowDownSquareTriangleDuotone;
