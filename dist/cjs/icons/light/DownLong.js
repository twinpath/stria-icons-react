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
var DownLong_exports = {};
__export(DownLong_exports, {
  default: () => DownLong_default
});
module.exports = __toCommonJS(DownLong_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownLongLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136.001 0H183.999C206.06 0 223.997 17.969 223.997 40.031L223.997 320.484H263.996C279.901 320.484 294.307 329.922 300.651 344.484C307.025 359.109 304.15 376.047 293.307 387.703L189.311 499.766C181.779 507.924 170.893 512.002 160 512C149.112 511.998 138.218 507.92 130.657 499.766L26.693 387.703C15.85 376.047 12.975 359.109 19.349 344.484C25.693 329.922 40.099 320.484 56.004 320.484H96.003L96.002 40.031C96.002 17.969 113.939 0 136.001 0ZM160 480.578C161.312 480.578 163.781 480.234 165.844 478.016L269.871 365.953C274.571 360.844 271.013 352.484 263.996 352.484H191.999L191.999 40.031C191.999 35.594 188.405 32 183.999 32H136.001C131.595 32 128.001 35.594 128.001 40.031L128.001 352.484H56.004C48.982 352.484 45.433 360.848 50.129 365.953L154.125 478.016C156.219 480.234 158.688 480.578 160 480.578Z" })
  }
));
DownLongLight.displayName = "DownLongLight";
var DownLong_default = DownLongLight;
