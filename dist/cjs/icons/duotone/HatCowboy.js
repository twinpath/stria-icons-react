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
var HatCowboy_exports = {};
__export(HatCowboy_exports, {
  default: () => HatCowboy_default
});
module.exports = __toCommonJS(HatCowboy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatCowboyDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.826 286.61C462.388 304.65 399.07 320 319.893 320C240.896 320 177.558 304.56 130 286.44C130.12 285.57 130.24 284.73 130.35 283.91C132.94 268.6 136.43 248.79 140.97 226.68C180.058 242.28 237.686 256 319.893 256S459.758 242.29 498.886 226.7C503.446 248.88 506.936 268.7 509.526 284.05C509.586 284.89 509.706 285.74 509.826 286.61V286.61Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M499.018 226.699C481.939 143.832 450.639 32 401.352 32C385.602 32 371.543 38.672 359.723 47.7C336.277 65.579 303.772 65.579 280.326 47.7C268.506 38.699 254.457 32 238.697 32C189.42 32 158.131 143.817 141.092 226.679C180.19 242.281 237.818 256.001 320.025 256.001S459.889 242.289 499.018 226.699ZM632.922 227.718L633.014 227.699C626.875 223.578 618.709 224.195 613.264 229.199C612.264 230.101 511.998 319.98 320.115 319.98C129.301 319.98 27.906 230.039 26.885 229.14C20.41 223.124 10.287 223.503 4.275 229.976C0.139 234.433 -1.115 240.844 1.037 246.531C1.766 248.547 78.354 448 320.025 448C561.695 448 638.283 248.547 639.012 246.531C641.563 239.605 639.047 231.836 632.922 227.718Z" })
    ]
  }
));
HatCowboyDuotone.displayName = "HatCowboyDuotone";
var HatCowboy_default = HatCowboyDuotone;
