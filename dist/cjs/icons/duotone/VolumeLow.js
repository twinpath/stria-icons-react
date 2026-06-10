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
var VolumeLow_exports = {};
__export(VolumeLow_exports, {
  default: () => VolumeLow_default
});
module.exports = __toCommonJS(VolumeLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VolumeLowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M412.189 181.942C401.908 173.599 386.783 175.067 378.439 185.348C370.033 195.598 371.533 210.723 381.814 219.129C393.127 228.379 399.627 241.816 399.627 256.004C399.627 270.191 393.127 283.628 381.814 292.878C371.533 301.284 370.033 316.409 378.439 326.659C383.158 332.471 390.064 335.471 397.002 335.471C402.345 335.471 407.752 333.69 412.189 330.065C434.72 311.628 447.627 284.66 447.627 256.004S434.72 200.38 412.189 181.942Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 64.006V448.001C320 460.595 312.609 472.032 301.109 477.188C296.906 479.094 292.438 480.001 288 480.001C280.312 480.001 272.719 477.219 266.734 471.907L131.84 352.002H48C21.49 352.002 0 330.51 0 304.003V208.004C0 181.497 21.49 160.005 48 160.005H131.84L266.734 40.101C276.156 31.726 289.609 29.632 301.109 34.819C312.609 39.976 320 51.413 320 64.006Z" })
    ]
  }
));
VolumeLowDuotone.displayName = "VolumeLowDuotone";
var VolumeLow_default = VolumeLowDuotone;
