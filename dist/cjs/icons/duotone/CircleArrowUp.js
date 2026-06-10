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
var CircleArrowUp_exports = {};
__export(CircleArrowUp_exports, {
  default: () => CircleArrowUp_default
});
module.exports = __toCommonJS(CircleArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.422 16 256S123.42 496 256 496S496 388.578 496 256S388.58 16 256 16ZM382.625 254.625C370.125 267.125 349.875 267.125 337.375 254.625L288 205.25V384C288 401.688 273.672 416 256 416S224 401.688 224 384V205.25L174.625 254.625C162.125 267.125 141.875 267.125 129.375 254.625S116.875 221.875 129.375 209.375L233.354 105.398C241.336 97.398 251.1 96 256 96C260.881 96 270.654 97.391 278.646 105.398L382.625 209.375C395.125 221.875 395.125 242.125 382.625 254.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.509 254.625C370.009 267.125 349.759 267.125 337.259 254.625L287.884 205.25V384C287.884 401.688 273.556 416 255.884 416S223.884 401.688 223.884 384V205.25L174.509 254.625C162.009 267.125 141.759 267.125 129.259 254.625S116.759 221.875 129.259 209.375L233.238 105.398C241.22 97.398 250.984 96 255.884 96C260.765 96 270.539 97.391 278.531 105.398L382.509 209.375C395.009 221.875 395.009 242.125 382.509 254.625Z" })
    ]
  }
));
CircleArrowUpDuotone.displayName = "CircleArrowUpDuotone";
var CircleArrowUp_default = CircleArrowUpDuotone;
