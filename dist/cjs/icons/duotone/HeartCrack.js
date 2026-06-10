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
var HeartCrack_exports = {};
__export(HeartCrack_exports, {
  default: () => HeartCrack_default
});
module.exports = __toCommonJS(HeartCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartCrackDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.99 255.776L268.749 474.562C261.75 481.813 250.25 481.813 243.126 474.562L31.01 255.901C-12.488 202.767 -10.363 123.504 38.26 73.621L40.76 71.245C83.734 27.215 149.38 20.807 199.907 50.343L239.948 143.792L144.005 207.768L144.122 207.885L144.017 207.955L287.999 351.791L240.059 223.927L336.008 159.947L335.959 159.783L335.996 159.76L335.526 158.338L304.461 54.77C355.759 19.877 426.016 24.902 471.24 71.12L473.74 73.621C522.363 123.504 524.488 202.767 480.99 255.776Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.181 48.691C212.651 55.723 225.367 64.557 236.31 75.855L255.997 96.187L275.684 75.855C284.224 67.041 293.97 59.978 304.135 53.738L335.992 159.947L239.996 223.958L287.982 351.791L144 207.955L239.996 143.945L199.181 48.691Z" })
    ]
  }
));
HeartCrackDuotone.displayName = "HeartCrackDuotone";
var HeartCrack_default = HeartCrackDuotone;
