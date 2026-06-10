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
var Disease_exports = {};
__export(Disease_exports, {
  default: () => Disease_default
});
module.exports = __toCommonJS(Disease_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiseaseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472.235 195.902L405.235 172.907C385.985 166.283 371.735 152.036 367.11 134.664L351.11 74.175C339.485 30.434 274.485 17.061 241.11 51.555L194.985 99.296C181.735 113.043 161.485 120.167 140.735 118.542L68.86 112.918C16.86 108.919 -18.015 157.909 9.86 195.777L48.485 248.267C59.485 263.264 61.235 282.011 53.11 298.383L24.61 355.372C3.985 396.614 47.485 440.231 98.11 429.233L168.11 413.986C188.235 409.487 209.485 413.986 225.11 425.609L279.485 466.476C318.86 496.095 380.485 474.099 383.985 429.233L388.61 367.37C389.985 349.623 401.485 333.501 419.235 324.378L481.235 292.759C526.11 269.763 520.86 212.524 472.235 195.902ZM159.985 256.016C142.36 256.016 127.985 241.643 127.985 224.022S142.36 192.028 159.985 192.028S191.985 206.4 191.985 224.022S177.61 256.016 159.985 256.016ZM287.985 351.998C270.36 351.998 255.985 337.625 255.985 320.004S270.36 288.01 287.985 288.01S319.985 302.382 319.985 320.004S305.61 351.998 287.985 351.998ZM303.985 224.022C295.11 224.022 287.985 216.898 287.985 208.025C287.985 199.152 295.11 192.028 303.985 192.028S319.985 199.152 319.985 208.025C319.985 216.898 312.86 224.022 303.985 224.022Z" })
  }
));
DiseaseSolid.displayName = "DiseaseSolid";
var Disease_default = DiseaseSolid;
