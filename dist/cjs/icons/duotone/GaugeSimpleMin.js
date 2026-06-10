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
var GaugeSimpleMin_exports = {};
__export(GaugeSimpleMin_exports, {
  default: () => GaugeSimpleMin_default
});
module.exports = __toCommonJS(GaugeSimpleMin_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeSimpleMinDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32.001C129 32.001 0 161.001 0 320.001C0 372.751 14.25 422.251 39 464.751C44.625 474.376 55.375 480.001 66.5 480.001H509.5C520.625 480.001 531.375 474.376 537 464.751C561.75 422.251 576 372.751 576 320.001C576 161.001 447 32.001 288 32.001ZM343.125 416.001H232.875C229.625 410.501 227.5 404.376 226 398.001L92 375.626C79 373.501 70.125 361.126 72.375 348.001C74.5 335.001 86.875 326.126 100 328.376L233.625 350.626C244.875 332.251 265 320.001 288 320.001C323.375 320.001 352 348.626 352 384.001C352 395.751 348.625 406.501 343.125 416.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M343.099 416.001H232.849C229.599 410.501 227.474 404.376 225.974 398.001L91.974 375.626C78.974 373.501 70.099 361.126 72.349 348.001C74.474 335.001 86.849 326.126 99.974 328.376L233.599 350.626C244.849 332.251 264.974 320.001 287.974 320.001C323.349 320.001 351.974 348.626 351.974 384.001C351.974 395.751 348.599 406.501 343.099 416.001Z" })
    ]
  }
));
GaugeSimpleMinDuotone.displayName = "GaugeSimpleMinDuotone";
var GaugeSimpleMin_default = GaugeSimpleMinDuotone;
