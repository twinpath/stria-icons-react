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
var TirePressureWarning_exports = {};
__export(TirePressureWarning_exports, {
  default: () => TirePressureWarning_default
});
module.exports = __toCommonJS(TirePressureWarning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TirePressureWarningSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M474.5 141.5C458.375 113.25 448 80.625 448 46.125V17.125C448 7.625 440.875 0 432 0H400C391.125 0 384 7.125 384 16V64C384 96 399.25 138.875 419 173.25C438 206.5 448 244.875 448 284.125C448 325.25 435.25 366.625 412.25 402.25C406.5 411 396.25 416 385.75 416H126.25C115.75 416 105.5 411 99.75 402.25C76.75 366.625 64 325.25 64 284.125C64 244.875 74 206.5 93.125 173.25C112.75 138.875 128 96 128 64V16C128 7.125 120.875 0 112 0H80C71.125 0 64 7.625 64 17.125V46.125C64 80.625 53.625 113.25 37.5 141.5C13.75 183 0 231.75 0 284.125C0 360.875 32.5 430.25 80 480V496C80 504.875 87.125 512 96 512H128C136.875 512 144 504.875 144 496V480H176V496C176 504.875 183.125 512 192 512H224C232.875 512 240 504.875 240 496V480H272V496C272 504.875 279.125 512 288 512H320C328.875 512 336 504.875 336 496V480H368V496C368 504.875 375.125 512 384 512H416C424.875 512 432 504.875 432 496V480C479.5 430.25 512 360.875 512 284.125C512 231.75 498.25 183 474.5 141.5ZM256.002 352C273.627 352 288.002 337.75 288.002 320C288.002 302.375 273.627 288 256.002 288S224.002 302.375 224.002 320C224.002 337.75 238.377 352 256.002 352ZM256 256C269.25 256 280 245.25 280 232V96C280 82.75 269.25 72 256 72S232 82.75 232 96V232C232 245.25 242.75 256 256 256Z" })
  }
));
TirePressureWarningSolid.displayName = "TirePressureWarningSolid";
var TirePressureWarning_default = TirePressureWarningSolid;
