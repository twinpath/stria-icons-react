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
var CloudFog_exports = {};
__export(CloudFog_exports, {
  default: () => CloudFog_default
});
module.exports = __toCommonJS(CloudFog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudFogLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168 320H472C529.25 320 576 273.25 576 216C576 161.25 533.375 116.25 479.75 112.25C475.75 67.375 437.875 32 392 32C374.25 32 357.25 37.25 342.75 47.25C320.25 17.75 285.5 0 248 0C181.75 0 128 53.75 128 120V120.375C89.75 136.375 64 173.875 64 216C64 273.25 110.75 320 168 320ZM149.25 146.75L149.262 146.748C156.928 144.742 161.947 137.398 161.035 129.527C160.352 123.635 160 122.967 160 120C160 71.5 199.5 32 248 32C280.25 32 309.75 49.875 325.25 78.75L325.256 78.76C330.379 88.459 343.555 90.182 351 82.125C363.771 68.326 381.543 61.939 400.264 64.588C425.613 68.172 444.584 89.902 447.602 115.324C448.232 120.633 448.115 120.391 447.25 126.875L447.227 127.07C445.959 137.209 454.443 145.895 464.609 144.867C470.24 144.299 469.818 144.125 472 144.125C511.75 144.125 544 176.375 544 216.125C544 255.75 511.75 288.125 472 288.125H168C128.25 288.125 96 255.75 96 216.125C96 183.75 117.875 155.25 149.25 146.75ZM208 480H80C71.201 480 64 487.199 64 496S71.201 512 80 512H208C216.801 512 224 504.801 224 496S216.801 480 208 480ZM624 480H304C295.201 480 288 487.199 288 496S295.201 512 304 512H624C632.801 512 640 504.801 640 496S632.801 480 624 480ZM576 400C576 391.199 568.801 384 560 384H16C7.201 384 0 391.199 0 400S7.201 416 16 416H560C568.801 416 576 408.801 576 400Z" })
  }
));
CloudFogLight.displayName = "CloudFogLight";
var CloudFog_default = CloudFogLight;
