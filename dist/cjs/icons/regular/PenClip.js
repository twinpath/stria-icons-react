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
var PenClip_exports = {};
__export(PenClip_exports, {
  default: () => PenClip_default
});
module.exports = __toCommonJS(PenClip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenClipRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.255 56.234L455.764 18.744C430.772 -6.248 390.249 -6.248 365.255 18.744L321.014 63.016L295.655 37.656C273.88 15.879 238.245 15.879 216.467 37.656L111.092 143.031C101.717 152.406 101.717 167.594 111.092 176.969C115.78 181.656 121.905 184 128.061 184S140.342 181.656 145.03 176.969L250.405 71.594C253.53 68.469 258.592 68.469 261.717 71.594L287.077 96.953L94.001 290.02C48.046 335.973 0.155 420.385 0.155 485.375C-1.47 499.75 9.905 512 24.03 512C29.655 512 135.03 505 222.03 418L493.255 146.744C518.249 121.752 518.249 81.229 493.255 56.234ZM188.03 384.125C151.03 421.125 104.03 447 53.28 458.75C65.03 408 90.905 361 127.905 324L320.016 131.889L380.141 192.014L188.03 384.125Z" })
  }
));
PenClipRegular.displayName = "PenClipRegular";
var PenClip_default = PenClipRegular;
