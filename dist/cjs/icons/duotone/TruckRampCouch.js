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
const TruckRampCouchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M21.337 235.115C60.96 224.49 95.083 248.49 106.833 278.488L231.955 244.99C226.58 209.242 248.455 174.242 284.203 164.744C286.703 164.119 289.453 164.119 292.203 163.744C282.205 126.744 246.205 108.621 213.456 117.369L58.835 158.744C26.085 167.619 4.087 201.367 13.712 237.865C16.212 236.865 18.712 235.74 21.337 235.115ZM292.328 195.617C271.08 201.242 258.33 223.24 264.08 244.615L270.205 267.74L84.835 317.488L78.71 294.238C72.96 272.988 50.96 260.24 29.71 265.99C8.337 271.74 -4.288 293.738 1.337 314.988L24.087 399.984L319.953 320.738V198.742C311.703 194.742 301.953 193.117 292.328 195.617ZM543.943 320C490.923 320 447.943 362.98 447.943 416S490.923 512 543.943 512S639.943 469.02 639.943 416S596.962 320 543.943 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 0V332.145C616.537 305.305 582.451 288 544 288C477.424 288 423.554 339.072 417.426 404.045L22.769 511.73C18.519 512.855 14.144 510.355 12.894 506.105L0.269 459.732C-0.856 455.607 1.644 451.232 5.894 449.982L352.008 355.611V64C352.008 28.652 380.662 0 416.008 0H640Z" })
    ]
  }
));
TruckRampCouchDuotone.displayName = "TruckRampCouchDuotone";
var TruckRampCouch_default = TruckRampCouchDuotone;
