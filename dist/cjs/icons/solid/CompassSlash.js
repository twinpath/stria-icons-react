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
var CompassSlash_exports = {};
__export(CompassSlash_exports, {
  default: () => CompassSlash_default
});
module.exports = __toCommonJS(CompassSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassSlashSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M220.064 382.135C203.408 389.744 186.252 372.588 193.877 355.932L229.984 276.929L95.569 171.577C85.671 197.872 80.003 226.241 80.003 255.996C80.003 388.545 187.451 495.992 320.001 495.992C370.395 495.992 417.11 480.395 455.723 453.858L311.118 340.52L220.064 382.135ZM630.811 469.102L522.531 384.236C546.122 347.12 559.999 303.236 559.999 255.996C559.999 123.447 452.551 16 320.001 16C251.968 16 190.789 44.521 147.137 90.01L38.813 5.109C28.211 -3.162 13.174 -1.099 5.126 9.187C-3.061 19.625 -1.249 34.718 9.189 42.89L601.187 506.883C611.686 515.086 626.749 513.211 634.874 502.805C643.061 492.367 641.249 477.274 630.811 469.102ZM446.125 156.044L389.495 279.966L350.686 249.549C349.561 243.664 347.225 237.965 342.626 233.371C335.977 226.723 327.169 223.874 318.468 224.295L279.73 193.935L419.938 129.842C436.594 122.248 453.75 139.404 446.125 156.044Z" })
  }
));
CompassSlashSolid.displayName = "CompassSlashSolid";
var CompassSlash_default = CompassSlashSolid;
