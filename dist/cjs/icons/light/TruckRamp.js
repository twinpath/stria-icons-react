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
var TruckRamp_exports = {};
__export(TruckRamp_exports, {
  default: () => TruckRamp_default
});
module.exports = __toCommonJS(TruckRamp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckRampLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528.005 288C477.382 288 435.259 321.875 421.259 368H384.011V64C384.011 46.4 398.411 32 416.011 32H623.999C632.835 32 639.999 24.836 639.999 16C639.999 7.162 632.835 0 623.999 0H416.009C380.81 0 352.013 28.799 352.013 63.998V372.297L11.167 480.75C2.73 483.438 -1.926 492.438 0.761 500.844C2.917 507.656 9.23 512 16.011 512C17.605 512 19.259 511.766 20.853 511.25L370.49 400H416.009C416.009 462.402 466.99 512.852 529.589 511.988C589.076 511.168 639.167 461.072 639.988 401.584C640.853 338.982 590.404 288 528.005 288ZM528.005 480C483.88 480 448.009 444.125 448.009 400S483.88 320 528.005 320C572.128 320 607.999 355.875 607.999 400S572.128 480 528.005 480Z" })
  }
));
TruckRampLight.displayName = "TruckRampLight";
var TruckRamp_default = TruckRampLight;
