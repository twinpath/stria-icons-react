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
var CameraMovie_exports = {};
__export(CameraMovie_exports, {
  default: () => CameraMovie_default
});
module.exports = __toCommonJS(CameraMovie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraMovieRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M557.609 262.359C546.078 254.949 531.734 253.963 519.328 259.67L435.381 298.17C423.727 282.373 405.137 272 384 272H24C10.746 272 0 282.744 0 296C0 309.254 10.746 320 24 320H66.264C64.932 325.143 64 330.441 64 336V448C64 483.346 92.654 512 128 512H384C410.383 512 433.006 496.02 442.799 473.229L519.328 508.326C524.672 510.779 530.359 512 536.016 512C543.547 512 551.031 509.857 557.609 505.637C569.125 498.227 576 485.641 576 471.943V296.051C576 282.355 569.125 269.77 557.609 262.359ZM400 448C400 456.822 392.822 464 384 464H128C119.178 464 112 456.822 112 448V336C112 327.178 119.178 320 128 320H384C392.822 320 400 327.178 400 336V448ZM528 459.469L448 422.779V345.217L528 308.527V459.469ZM152 240H344C410.275 240 464 186.273 464 120C464 53.725 410.275 0 344 0C304.561 0 269.873 19.281 248 48.656C226.127 19.281 191.439 0 152 0C85.727 0 32 53.725 32 120C32 186.273 85.727 240 152 240ZM344 48C383.701 48 416 80.299 416 120S383.701 192 344 192S272 159.701 272 120S304.299 48 344 48ZM152 48C191.701 48 224 80.299 224 120S191.701 192 152 192S80 159.701 80 120S112.299 48 152 48Z" })
  }
));
CameraMovieRegular.displayName = "CameraMovieRegular";
var CameraMovie_default = CameraMovieRegular;
