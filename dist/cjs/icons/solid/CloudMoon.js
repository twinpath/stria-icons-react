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
var CloudMoon_exports = {};
__export(CloudMoon_exports, {
  default: () => CloudMoon_default
});
module.exports = __toCommonJS(CloudMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudMoonSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M342.75 352.75C348.5 343.125 352 332 352 320C352 284.75 323.25 256 288 256C270.75 256 255.25 262.875 243.75 273.875C227.375 244.25 196.25 224 160 224C107 224 64 267 64 320C64 322 64.5 323.75 64.625 325.75C27.125 338.75 0 374.125 0 416C0 469 43 512 96 512H336C380.25 512 416 476.25 416 432C416 390.125 383.75 356.25 342.75 352.75ZM565.25 298.375C472.25 316.125 386.75 244.75 386.75 150.75C386.75 96.5 415.75 46.75 462.875 19.875C470.25 15.75 468.25 4.75 460.125 3.25C448.375 1.125 436.75 0 425 0C319.125 0 233.125 85.875 233.125 192C233.125 200.5 233.75 208.75 234.875 217C240.75 221.25 246.5 225.875 251.625 231.25C263 226.5 275.25 224 288 224C340.875 224 384 267.125 384 320C384 323.625 383.75 327.25 383.375 330.75C407 341.5 425.75 360.25 436.875 383.25C491.25 379.875 540.625 354 573.999 312.875C579.25 306.375 573.5 296.75 565.25 298.375Z" })
  }
));
CloudMoonSolid.displayName = "CloudMoonSolid";
var CloudMoon_default = CloudMoonSolid;
