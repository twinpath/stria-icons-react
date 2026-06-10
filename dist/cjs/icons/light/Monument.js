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
var Monument_exports = {};
__export(Monument_exports, {
  default: () => Monument_default
});
module.exports = __toCommonJS(Monument_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MonumentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256C151.156 256 144 263.156 144 272S151.156 288 160 288H224C232.844 288 240 280.844 240 272S232.844 256 224 256H160ZM78.127 383.846C87.002 385.096 94.861 378.594 95.893 369.84L127.234 103.23L191.953 38.453L256.766 103.23L288.107 369.84C289.061 377.969 295.982 383.971 303.982 383.971C304.607 383.971 305.232 383.939 305.873 383.846C314.639 382.814 320.92 374.873 319.889 366.088L287.889 93.977C287.467 90.412 285.857 87.066 283.311 84.535L203.25 4.502C197.234 -1.533 186.609 -1.471 180.625 4.502L100.689 84.535C98.143 87.066 96.533 90.412 96.111 93.977L64.111 366.088C63.08 374.873 69.361 382.814 78.127 383.846ZM352 416H32C14.326 416 0 430.326 0 448V480C0 497.674 14.326 512 32 512H352C369.674 512 384 497.674 384 480V448C384 430.326 369.674 416 352 416ZM352 480H32V448H352V480Z" })
  }
));
MonumentLight.displayName = "MonumentLight";
var Monument_default = MonumentLight;
