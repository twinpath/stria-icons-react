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
var TrafficLight_exports = {};
__export(TrafficLight_exports, {
  default: () => TrafficLight_default
});
module.exports = __toCommonJS(TrafficLight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrafficLightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 160C218.5 160 240 138.5 240 112S218.5 64 192 64S144 85.5 144 112S165.5 160 192 160ZM192 192C165.5 192 144 213.5 144 240S165.5 288 192 288S240 266.5 240 240S218.5 192 192 192ZM192 320C165.5 320 144 341.5 144 368S165.5 416 192 416S240 394.5 240 368S218.5 320 192 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 192.001H320V154.126C357.25 140.876 384 105.751 384 64.001H320V32.001C320 14.376 305.625 0.001 288 0.001H96C78.375 0.001 64 14.376 64 32.001V64.001H0C0 105.751 26.75 140.876 64 154.126V192.001H0C0 233.751 26.75 268.876 64 282.126V320.001H0C0 362.876 28.25 398.751 67 411.001C79.375 468.751 130.625 512.001 192 512.001S304.625 468.751 317 411.001C355.75 398.751 384 362.876 384 320.001H320V282.126C357.25 268.876 384 233.751 384 192.001ZM192 416.001C165.5 416.001 144 394.501 144 368.001S165.5 320.001 192 320.001S240 341.501 240 368.001S218.5 416.001 192 416.001ZM192 288.001C165.5 288.001 144 266.501 144 240.001S165.5 192.001 192 192.001S240 213.501 240 240.001S218.5 288.001 192 288.001ZM192 160.001C165.5 160.001 144 138.501 144 112.001S165.5 64.001 192 64.001S240 85.501 240 112.001S218.5 160.001 192 160.001Z" })
    ]
  }
));
TrafficLightDuotone.displayName = "TrafficLightDuotone";
var TrafficLight_default = TrafficLightDuotone;
