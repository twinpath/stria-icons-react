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
var TruckRampCouch_exports = {};
__export(TruckRampCouch_exports, {
  default: () => TruckRampCouch_default
});
module.exports = __toCommonJS(TruckRampCouch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampCouchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.394 235.115C61.017 224.49 95.14 248.49 106.89 278.488L232.012 244.99C226.637 209.242 248.512 174.242 284.26 164.744C286.76 164.119 289.51 164.119 292.26 163.744C282.262 126.744 246.262 108.621 213.513 117.369L58.892 158.744C26.142 167.619 4.144 201.367 13.769 237.865C16.269 236.865 18.769 235.74 21.394 235.115ZM416.008 0C380.661 0 352.008 28.654 352.008 64V355.611L5.894 449.982C1.644 451.232 -0.856 455.607 0.269 459.732L12.894 506.105C14.144 510.355 18.519 512.855 22.769 511.73L416.381 404.234C418.851 466.516 471.637 515.812 535.342 511.746C595.327 507.917 640 453.993 640 393.885L640 0H416.008ZM528.004 447.982C501.504 447.982 480.004 426.484 480.004 399.984C480.004 373.486 501.504 351.986 528.004 351.986C554.502 351.986 576.002 373.486 576.002 399.984C576.002 426.484 554.502 447.982 528.004 447.982ZM24.144 399.984L320.01 320.738V198.742C311.76 194.742 302.01 193.117 292.385 195.617C271.137 201.242 258.387 223.24 264.137 244.615L270.262 267.74L84.892 317.488L78.767 294.238C73.017 272.988 51.017 260.24 29.767 265.99C8.394 271.74 -4.231 293.738 1.394 314.988L24.144 399.984Z" })
  }
));
TruckRampCouchSolid.displayName = "TruckRampCouchSolid";
var TruckRampCouch_default = TruckRampCouchSolid;
