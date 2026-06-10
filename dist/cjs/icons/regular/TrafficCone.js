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
var TrafficCone_exports = {};
__export(TrafficCone_exports, {
  default: () => TrafficCone_default
});
module.exports = __toCommonJS(TrafficCone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrafficConeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M487.998 463.959L474.623 463.96L294.455 11.498C291.705 4.623 284.954 -0.001 277.454 0L234.454 0.004C226.954 0.005 220.205 4.63 217.455 11.505L37.373 464.001L23.998 464.002C10.743 464.003 -0.001 474.749 0 488.003V488.003C0.001 501.258 10.747 512.001 24.002 512L488.002 511.956C501.257 511.955 512.001 501.21 512 487.955V487.955C511.999 474.701 501.253 463.957 487.998 463.959ZM365.609 319.977L146.359 319.997L190.849 207.998L321.099 207.986L365.609 319.977ZM256.001 48.004L301.969 159.99L209.969 159.999L256.001 48.004ZM127.239 367.997L384.739 367.973L422.998 463.965L88.998 463.996L127.239 367.997Z" })
  }
));
TrafficConeRegular.displayName = "TrafficConeRegular";
var TrafficCone_default = TrafficConeRegular;
