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
var LocationArrow_exports = {};
__export(LocationArrow_exports, {
  default: () => LocationArrow_default
});
module.exports = __toCommonJS(LocationArrow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationArrowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M433.938 46.082C424.768 36.893 412.471 31.998 399.973 32C393.86 32 387.696 33.172 381.83 35.584L29.832 179.576C8.598 188.264 -3.527 210.762 0.91 233.262C5.332 255.791 25.067 272.01 48.004 272.01H208.002V432.002C208.002 456.002 227.178 480 256.018 480C275.19 480 292.94 468.469 300.424 450.189L444.422 98.205C451.75 80.301 447.61 59.738 433.938 46.082ZM414.805 86.09L270.811 438.064C268.338 444.1 262.534 448 256.018 448C245.092 448 240.002 438.453 240.002 432.002V240.01H48.004C40.379 240.01 33.78 234.58 32.305 227.07C30.832 219.6 34.887 212.082 41.948 209.193L394 65.18C395.903 64.396 397.914 64 399.977 64C404.194 64 408.315 65.707 411.325 68.723C415.889 73.283 417.256 80.1 414.805 86.09Z" })
  }
));
LocationArrowLight.displayName = "LocationArrowLight";
var LocationArrow_default = LocationArrowLight;
