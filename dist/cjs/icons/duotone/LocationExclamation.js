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
var LocationExclamation_exports = {};
__export(LocationExclamation_exports, {
  default: () => LocationExclamation_default
});
module.exports = __toCommonJS(LocationExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationExclamationDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.369 0 191.988C0 268.732 25.625 291.232 172.75 502.344C182.375 515.219 201.625 515.219 211.25 502.344C358.375 291.232 384 268.732 384 191.988C384 86.369 297.625 0 192 0ZM168 104C168 90.75 178.75 80 192 80S216 90.75 216 104V216C216 229.25 205.25 240 192 240S168 229.25 168 216V104ZM192 336C174.328 336 160 321.672 160 304C160 286.326 174.328 272 192 272S224 286.326 224 304C224 321.672 209.672 336 192 336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 240C205.25 240 216 229.25 216 216V104C216 90.75 205.25 80 192 80S168 90.75 168 104V216C168 229.25 178.75 240 192 240ZM192 272C174.328 272 160 286.326 160 304C160 321.672 174.328 336 192 336S224 321.672 224 304C224 286.326 209.672 272 192 272Z" })
    ]
  }
));
LocationExclamationDuotone.displayName = "LocationExclamationDuotone";
var LocationExclamation_default = LocationExclamationDuotone;
