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
var Carrot_exports = {};
__export(Carrot_exports, {
  default: () => Carrot_default
});
module.exports = __toCommonJS(Carrot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarrotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M298.231 156.627C245.477 130.877 183.721 146.127 147.967 189.379L203.223 244.629C209.473 250.879 209.473 261.004 203.223 267.254C200.096 270.254 195.971 271.879 191.846 271.879S183.721 270.254 180.596 267.254L130.34 217.004L2.203 479.76C-0.672 485.76 -0.797 493.01 2.203 499.385C7.703 510.51 21.205 515.135 32.207 509.76L165.844 444.508L116.715 395.258C110.338 389.133 110.338 378.883 116.715 372.756C122.965 366.506 133.09 366.506 139.217 372.756L196.221 429.758L298.231 379.883C322.233 368.256 342.735 348.631 355.362 322.756C385.489 261.129 359.862 186.754 298.231 156.627Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.634 152.002C470.005 202.254 404.125 204.504 359.746 159.877L351.746 151.877C307.115 107.502 309.367 41.75 359.621 0C399.375 32.875 409.375 81.002 389.873 121.752C430.626 102.252 478.755 112.252 511.634 152.002Z" })
    ]
  }
));
CarrotDuotone.displayName = "CarrotDuotone";
var Carrot_default = CarrotDuotone;
