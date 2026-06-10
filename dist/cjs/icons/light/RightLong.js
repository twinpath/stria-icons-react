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
var RightLong_exports = {};
__export(RightLong_exports, {
  default: () => RightLong_default
});
module.exports = __toCommonJS(RightLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightLongLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 279.999V232.001C0 209.94 17.969 192.003 40.031 192.003L320.484 192.003V152.004C320.484 136.099 329.922 121.693 344.484 115.349C359.109 108.975 376.047 111.85 387.703 122.693L499.766 226.689C507.924 234.221 512.002 245.107 512 256C511.998 266.888 507.92 277.782 499.766 285.343L387.703 389.307C376.047 400.15 359.109 403.025 344.484 396.651C329.922 390.307 320.484 375.901 320.484 359.996V319.997L40.031 319.998C17.969 319.998 0 302.061 0 279.999ZM480.578 256C480.578 254.688 480.234 252.219 478.016 250.156L365.953 146.129C360.844 141.429 352.484 144.987 352.484 152.004V224.001L40.031 224.001C35.594 224.001 32 227.595 32 232.001V279.999C32 284.405 35.594 287.999 40.031 287.999L352.484 287.999V359.996C352.484 367.018 360.848 370.567 365.953 365.871L478.016 261.875C480.234 259.781 480.578 257.312 480.578 256Z" })
  }
));
RightLongLight.displayName = "RightLongLight";
var RightLong_default = RightLongLight;
