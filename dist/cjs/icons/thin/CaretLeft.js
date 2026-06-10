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
var CaretLeft_exports = {};
__export(CaretLeft_exports, {
  default: () => CaretLeft_default
});
module.exports = __toCommonJS(CaretLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CaretLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M168.004 96C161.992 96 156.066 98.26 151.52 102.551L7.52 238.551C2.721 243.084 0 249.396 0 256S2.721 268.914 7.52 273.447L151.52 409.447C156.066 413.74 161.992 416 168.004 416C181.164 416 192 405.332 192 392V120C192 106.684 181.18 96 168.004 96ZM176 392C176 396.41 172.412 400 168.004 400C165.951 400 163.996 399.223 162.506 397.816L18.508 261.816C16.914 260.312 16 258.191 16 256S16.914 251.688 18.506 250.184L162.502 114.188C163.996 112.777 165.951 112 168.004 112C172.412 112 176 115.588 176 120V392Z" })
  }
));
CaretLeftThin.displayName = "CaretLeftThin";
var CaretLeft_default = CaretLeftThin;
