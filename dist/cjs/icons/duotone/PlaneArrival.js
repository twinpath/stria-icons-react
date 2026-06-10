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
var PlaneArrival_exports = {};
__export(PlaneArrival_exports, {
  default: () => PlaneArrival_default
});
module.exports = __toCommonJS(PlaneArrival_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneArrivalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 448H32C14.327 448 0 462.327 0 480V480C0 497.673 14.327 512 32 512H608C625.673 512 640 497.673 640 480V480C640 462.327 625.673 448 608 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M574.865 343.521C570.99 358.02 557.24 370.891 527.615 379.141C501.117 386.514 473.117 385.014 446.617 377.891L158.998 299.529C149.498 296.904 140.873 292.156 133.498 285.531L44.75 205.547C38.25 199.672 32.375 191.299 32.25 182.301L32 80.568C32.25 69.695 42.375 61.822 52.75 64.695L92.5 75.568C97.5 76.943 101.5 80.568 103.5 85.443L130.998 153.305L233.246 181.176L185.373 16.955C185.123 5.832 195.498 -2.291 205.996 0.582L271.121 18.205C276.871 19.83 281.246 24.328 282.746 30.203L383.119 222.043L480.617 248.539C507.117 255.787 532.24 268.66 551.49 288.531C573.115 310.777 578.74 329.023 574.865 343.521Z" })
    ]
  }
));
PlaneArrivalDuotone.displayName = "PlaneArrivalDuotone";
var PlaneArrival_default = PlaneArrivalDuotone;
