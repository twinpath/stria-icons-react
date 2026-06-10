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
var Axe_exports = {};
__export(Axe_exports, {
  default: () => Axe_default
});
module.exports = __toCommonJS(Axe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.374 434.734C-3.125 447.234 -3.125 467.492 9.374 479.992L32.008 502.625C38.258 508.875 46.448 512 54.637 512S71.016 508.875 77.264 502.625L308.438 271.437L240.563 203.562L9.374 434.734ZM525.75 160L472.813 107.062L502.627 77.25C515.125 64.75 515.125 44.488 502.627 31.992L480.008 9.375C473.76 3.125 465.571 0 457.381 0S441.002 3.125 434.752 9.375L404.938 39.188L375.125 9.375C368.875 3.125 360.688 0 352.5 0S336.125 3.125 329.875 9.375L233.377 105.859C220.879 118.352 220.879 138.613 233.375 151.109L384 301.734V416H416C539.711 416 640 315.711 640 192V160H525.75ZM432 367.277V281.852L417.942 267.793L278.635 128.484L352.5 54.633L370.999 73.129L404.93 107.062L491.809 193.941L505.87 208H591.28C583.651 292.312 516.313 359.648 432 367.277Z" })
  }
));
AxeRegular.displayName = "AxeRegular";
var Axe_default = AxeRegular;
