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
var Umbrella_exports = {};
__export(Umbrella_exports, {
  default: () => Umbrella_default
});
module.exports = __toCommonJS(Umbrella_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.996 301.742V432.078C255.996 440.893 248.809 448.082 239.996 448.082C232.182 448.082 226.807 442.768 224.9 437.393C218.994 420.67 200.805 411.98 184.086 417.889C167.396 423.764 158.678 442.08 164.584 458.678C175.805 490.59 206.182 512 239.996 512C284.092 512 320 476.086 320 431.984V301.648C310.906 293.74 300.186 288.053 287.998 288.053C275.686 288.146 265.59 292.865 255.996 301.742ZM575.701 280.863C547.107 144.525 437.318 62.605 320 49.914V32.006C320 14.314 305.688 0 287.998 0S255.996 14.314 255.996 32.006V49.914C138.303 62.605 29.482 144.525 0.295 280.863C-1.926 290.959 8.795 302.148 18.982 292.24C70.986 237.23 126.676 239.855 177.586 329.248C182.898 338.75 192.492 337.873 197.305 329.248C217.494 293.865 242.184 256.047 287.998 256.047C346.502 256.047 376.191 324.871 378.691 329.248C383.504 337.873 393.098 338.75 398.41 329.248C449.414 239.73 505.51 237.855 557.014 292.24C567.326 302.242 577.922 290.959 575.701 280.863Z" })
  }
));
UmbrellaSolid.displayName = "UmbrellaSolid";
var Umbrella_default = UmbrellaSolid;
