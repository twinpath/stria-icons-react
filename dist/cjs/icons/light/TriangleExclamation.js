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
var TriangleExclamation_exports = {};
__export(TriangleExclamation_exports, {
  default: () => TriangleExclamation_default
});
module.exports = __toCommonJS(TriangleExclamation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TriangleExclamationLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.003 360C242.75 360 232.005 370.744 232.005 384C232.005 397.254 242.75 408 256.003 408C269.256 408 280.001 397.254 280.001 384C280.001 370.744 269.256 360 256.003 360ZM256.003 320C264.846 320 272.002 312.844 272.002 304V160C272.002 151.156 264.846 144 256.003 144S240.004 151.156 240.004 160V304C240.004 312.844 247.16 320 256.003 320ZM504.343 397.344L304.452 59.375C294.375 42.266 276.314 32.031 256.112 32H256.018C235.817 32 217.693 42.219 207.538 59.359L7.647 397.359C-2.399 414.328 -2.555 434.703 7.226 451.859C17.287 469.484 35.551 480 56.097 480H455.987C476.501 480 494.734 469.469 504.796 451.828C514.56 434.672 514.389 414.312 504.343 397.344ZM476.985 435.984C472.704 443.5 464.846 448 455.987 448H56.097C47.191 448 39.317 443.516 35.02 436C30.942 428.844 31.005 420.703 35.177 413.641L235.067 75.656C239.395 68.359 247.222 64 256.034 64C256.034 64 256.05 64 256.065 64C264.83 64.016 272.611 68.359 276.907 75.641L476.813 413.641V413.656C480.985 420.703 481.063 428.844 476.985 435.984Z" })
  }
));
TriangleExclamationLight.displayName = "TriangleExclamationLight";
var TriangleExclamation_default = TriangleExclamationLight;
