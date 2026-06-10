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
const TirePressureWarningDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 284.125C512 360.875 479.5 430.25 432 480V496C432 504.875 424.875 512 416 512H384C375.125 512 368 504.875 368 496V480H336V496C336 504.875 328.875 512 320 512H288C279.125 512 272 504.875 272 496V480H240V496C240 504.875 232.875 512 224 512H192C183.125 512 176 504.875 176 496V480H144V496C144 504.875 136.875 512 128 512H96C87.125 512 80 504.875 80 496V480C32.5 430.25 0 360.875 0 284.125C0 231.75 13.75 183 37.5 141.5C53.625 113.25 64 80.625 64 46.125V17.125C64 7.625 71.125 0 80 0H112C120.875 0 128 7.125 128 16V64C128 96 112.75 138.875 93.125 173.25C73.999 206.5 64 244.875 64 284.125C64 325.25 76.75 366.625 99.75 402.25C105.5 411 115.75 416 126.25 416H385.75C396.25 416 406.5 411 412.25 402.25C435.25 366.625 448 325.25 448 284.125C448 244.875 437.999 206.5 419 173.25C399.25 138.875 384 96 384 64V16C384 7.125 391.125 0 400 0H432C440.875 0 448 7.625 448 17.125V46.125C448 80.625 458.375 113.25 474.5 141.5C498.25 183 512 231.75 512 284.125Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 288C238.375 288 224 302.375 224 320C224 337.75 238.375 352 256 352S288 337.75 288 320C288 302.375 273.625 288 256 288ZM255.998 256C269.248 256 279.998 245.25 279.998 232V96C279.998 82.75 269.248 72 255.998 72S231.998 82.75 231.998 96V232C231.998 245.25 242.748 256 255.998 256Z" })
    ]
  }
));
TirePressureWarningDuotone.displayName = "TirePressureWarningDuotone";
var TirePressureWarning_default = TirePressureWarningDuotone;
