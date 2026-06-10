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
var IndianRupeeSign_exports = {};
__export(IndianRupeeSign_exports, {
  default: () => IndianRupeeSign_default
});
module.exports = __toCommonJS(IndianRupeeSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndianRupeeSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 144C14.328 144 0 158.328 0 176S14.328 208 32 208H167.1C172.611 198.549 176 187.709 176 176S172.611 153.451 167.1 144H32ZM288 144H252.064C254.557 154.273 256 164.943 256 176C256 187.053 254.334 197.656 251.965 208H288C305.672 208 320 193.672 320 176S305.672 144 288 144Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280.008 112H240.326C250.033 131.367 256.008 152.902 256.008 176C256.008 241.984 211.399 297.75 150.742 314.703L272.399 408.297C289.914 421.766 293.18 446.875 279.711 464.391C271.836 474.625 259.977 480 247.977 480C239.461 480 230.883 477.297 223.617 471.703L15.617 311.703C2.039 301.266 -3.383 283.328 2.133 267.125C7.649 250.906 22.883 240 40.008 240H112.008C147.305 240 176.008 211.297 176.008 176S147.305 112 112.008 112H40.008C17.914 112 0.008 94.094 0.008 72S17.914 32 40.008 32H280.008C302.102 32 320.008 49.906 320.008 72S302.102 112 280.008 112Z" })
    ]
  }
));
IndianRupeeSignDuotone.displayName = "IndianRupeeSignDuotone";
var IndianRupeeSign_default = IndianRupeeSignDuotone;
