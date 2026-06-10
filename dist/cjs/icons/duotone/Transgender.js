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
var Transgender_exports = {};
__export(Transgender_exports, {
  default: () => Transgender_default
});
module.exports = __toCommonJS(Transgender_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TransgenderDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 176C229.491 176 208 197.489 208 224C208 250.509 229.491 272 256 272S304 250.509 304 224C304 197.489 282.509 176 256 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 0.001H367.631C346.248 0.001 335.541 25.852 350.66 40.971L380.217 70.528L353.107 97.639C326.109 76.854 292.705 64.001 256 64.001C167.635 64.001 96 135.635 96 224.001C96 301.405 150.971 365.948 224 380.776V400.001H192C183.164 400.001 176 407.163 176 416.001V448.001C176 456.837 183.164 464.001 192 464.001H224V496.001C224 504.837 231.164 512.001 240 512.001H272C280.838 512.001 288 504.837 288 496.001V464.001H320C328.838 464.001 336 456.837 336 448.001V416.001C336 407.163 328.838 400.001 320 400.001H288V380.776C361.029 365.948 416 301.405 416 224.001C416 195.616 407.982 169.348 395.02 146.235L425.473 115.784L455.029 145.34C470.148 160.46 496 149.753 496 128.37V16.001C496 7.165 488.836 0.001 480 0.001ZM256 304.001C211.889 304.001 176 268.112 176 224.001C176 179.887 211.889 144.001 256 144.001C300.113 144.001 336 179.887 336 224.001C336 268.112 300.113 304.001 256 304.001Z" })
    ]
  }
));
TransgenderDuotone.displayName = "TransgenderDuotone";
var Transgender_default = TransgenderDuotone;
