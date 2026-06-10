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
var Crown_exports = {};
__export(Crown_exports, {
  default: () => Crown_default
});
module.exports = __toCommonJS(Crown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M536 96C513.908 96 496 113.908 496 136C496 144.998 499.521 152.889 504.537 159.57L414.91 231.271C408.955 236.035 401.922 238.291 394.975 238.291C383.367 238.291 371.998 231.994 366.297 220.596L308.699 105.398C320.037 98.34 328 86.342 328 72C328 49.908 310.092 32 288 32S248 49.908 248 72C248 86.342 255.963 98.34 267.301 105.398L209.703 220.596C204.002 231.996 192.637 238.291 181.025 238.291C174.08 238.291 167.045 236.035 161.09 231.271L71.463 159.57C76.479 152.889 80 144.998 80 136C80 113.908 62.092 96 40 96S0 113.908 0 136S17.908 176 40 176C40.248 176 40.453 175.863 40.701 175.859L91.223 453.725C93.988 468.939 107.242 480 122.707 480H453.293C468.758 480 482.012 468.939 484.777 453.725L535.299 175.859C535.547 175.863 535.752 176 536 176C558.092 176 576 158.092 576 136S558.092 96 536 96ZM439.941 432H136.061L102.17 245.605L131.105 268.754C145.242 280.063 162.971 286.291 181.025 286.291C211.555 286.291 238.992 269.344 252.637 242.063L288 171.332L323.365 242.064C337.008 269.344 364.445 286.291 394.975 286.291C413.031 286.291 430.76 280.063 444.896 268.754L473.832 245.605L439.941 432Z" })
  }
));
CrownRegular.displayName = "CrownRegular";
var Crown_default = CrownRegular;
