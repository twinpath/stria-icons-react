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
var C_exports = {};
__export(C_exports, {
  default: () => C_default
});
module.exports = __toCommonJS(C_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.59 480C158.286 480 103.579 456.438 62.537 413.656C20.846 370.188 0 313.094 0 256C0 198.906 20.846 141.813 62.537 98.344C103.579 55.562 158.286 32 216.59 32S329.6 55.562 370.643 98.344C388.998 117.5 388.357 147.875 369.204 166.219C350.036 184.5 319.625 183.938 301.285 164.781C255.787 117.344 177.361 117.344 131.894 164.781C83.644 215.094 83.644 296.906 131.894 347.219C177.361 394.656 255.787 394.656 301.285 347.219C319.625 328.063 350.036 327.438 369.204 345.781C388.357 364.125 388.998 394.5 370.643 413.656C329.6 456.438 274.893 480 216.59 480Z" })
  }
));
CSolid.displayName = "CSolid";
var C_default = CSolid;
