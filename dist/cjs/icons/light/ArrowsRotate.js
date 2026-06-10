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
var ArrowsRotate_exports = {};
__export(ArrowsRotate_exports, {
  default: () => ArrowsRotate_default
});
module.exports = __toCommonJS(ArrowsRotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRotateLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 32C455.156 32 448 39.156 448 48V177.305C416.162 99.719 340.561 48 256 48C154 48 67.734 120.906 50.875 221.344C49.422 230.062 55.297 238.312 64.016 239.781C64.906 239.938 65.797 240 66.672 240C74.344 240 81.125 234.469 82.438 226.656C96.688 141.688 169.688 80 256 80C328.494 80 393.33 124.879 419.623 192H304C295.156 192 288 199.156 288 208S295.156 224 304 224H464C472.844 224 480 216.844 480 208V48C480 39.156 472.844 32 464 32ZM447.984 272.219C439.219 270.656 431.016 276.625 429.562 285.344C415.312 370.312 342.312 432 256 432C183.506 432 118.67 387.121 92.377 320H208C216.844 320 224 312.844 224 304S216.844 288 208 288H48C39.156 288 32 295.156 32 304V464C32 472.844 39.156 480 48 480S64 472.844 64 464V334.695C95.838 412.281 171.439 464 256 464C358 464 444.266 391.094 461.125 290.656C462.578 281.938 456.703 273.688 447.984 272.219Z" })
  }
));
ArrowsRotateLight.displayName = "ArrowsRotateLight";
var ArrowsRotate_default = ArrowsRotateLight;
