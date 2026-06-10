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
var GaugeSimpleMax_exports = {};
__export(GaugeSimpleMax_exports, {
  default: () => GaugeSimpleMax_default
});
module.exports = __toCommonJS(GaugeSimpleMax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeSimpleMaxDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32.001C129 32.001 0 161.001 0 320.001C0 372.751 14.25 422.251 39 464.751C44.625 474.376 55.375 480.001 66.5 480.001H509.5C520.625 480.001 531.375 474.376 537 464.751C561.75 422.251 576 372.751 576 320.001C576 161.001 447 32.001 288 32.001ZM484 375.626L350 398.001C348.5 404.376 346.375 410.501 343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 348.626 252.625 320.001 288 320.001C311 320.001 331.125 332.251 342.375 350.626L476 328.376C489.125 326.126 501.5 335.001 503.625 348.001C505.875 361.126 497 373.501 484 375.626Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M484 375.626L350 398.001C348.5 404.376 346.375 410.501 343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 348.626 252.625 320.001 288 320.001C311 320.001 331.125 332.251 342.375 350.626L476 328.376C489.125 326.126 501.5 335.001 503.625 348.001C505.875 361.126 497 373.501 484 375.626Z" })
    ]
  }
));
GaugeSimpleMaxDuotone.displayName = "GaugeSimpleMaxDuotone";
var GaugeSimpleMax_default = GaugeSimpleMaxDuotone;
