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
var ArrowDownTriangleSquare_exports = {};
__export(ArrowDownTriangleSquare_exports, {
  default: () => ArrowDownTriangleSquare_default
});
module.exports = __toCommonJS(ArrowDownTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownTriangleSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M492.12 169.113L408.993 32C397.868 13.625 370.243 13.625 359.118 32L275.868 169.113C264.868 187.363 278.618 210.234 300.868 210.234H467.118C489.37 210.234 503.12 187.363 492.12 169.113ZM447.995 274.234H319.993C302.319 274.234 287.993 288.562 287.993 306.234V434.219C287.993 451.891 302.319 466.219 319.993 466.219H447.995C465.669 466.219 479.995 451.891 479.995 434.219V306.234C479.995 288.562 465.669 274.234 447.995 274.234Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M237.623 328.695C250.652 340.648 251.527 360.914 239.591 373.961L151.593 470.055C139.468 483.312 116.531 483.312 104.406 470.055L16.408 373.961C4.472 360.914 5.347 340.648 18.377 328.695C31.968 316.234 52.173 318.211 63.595 330.664L96 366.062V64.031C96 46.328 110.328 32 128 32S160 46.328 160 64.031V366.063L192.404 330.664C204.357 317.656 224.607 316.75 237.623 328.695Z" })
    ]
  }
));
ArrowDownTriangleSquareDuotone.displayName = "ArrowDownTriangleSquareDuotone";
var ArrowDownTriangleSquare_default = ArrowDownTriangleSquareDuotone;
