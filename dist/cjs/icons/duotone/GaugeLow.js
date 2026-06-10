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
var GaugeLow_exports = {};
__export(GaugeLow_exports, {
  default: () => GaugeLow_default
});
module.exports = __toCommonJS(GaugeLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GaugeLowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32.001C129 32.001 0 161.001 0 320.001C0 372.751 14.25 422.251 39 464.751C44.625 474.376 55.375 480.001 66.5 480.001H509.5C520.625 480.001 531.375 474.376 537 464.751C561.75 422.251 576 372.751 576 320.001C576 161.001 447 32.001 288 32.001ZM288 96.001C305.625 96.001 320 110.376 320 128.001S305.625 160.001 288 160.001S256 145.626 256 128.001S270.375 96.001 288 96.001ZM96 384.001C78.375 384.001 64 369.626 64 352.001S78.375 320.001 96 320.001S128 334.376 128 352.001S113.625 384.001 96 384.001ZM343.125 416.001H232.875C227.375 406.501 224 395.751 224 384.001C224 371.876 227.5 360.751 233.375 351.126L124.75 206.376C116.875 195.751 119 180.751 129.625 172.751C140.25 164.876 155.25 167.001 163.25 177.626L271.75 322.376C277 321.001 282.375 320.001 288 320.001C323.375 320.001 352 348.626 352 384.001C352 395.751 348.625 406.501 343.125 416.001ZM400 192.001C400 174.376 414.375 160.001 432 160.001S464 174.376 464 192.001S449.625 224.001 432 224.001S400 209.626 400 192.001ZM480 384.001C462.375 384.001 448 369.626 448 352.001S462.375 320.001 480 320.001S512 334.376 512 352.001S497.625 384.001 480 384.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M343.122 416.001H232.872C227.372 406.501 223.997 395.751 223.997 384.001C223.997 371.876 227.497 360.751 233.372 351.126L124.747 206.376C116.872 195.751 118.997 180.751 129.622 172.751C140.247 164.876 155.247 167.001 163.247 177.626L271.747 322.376C276.997 321.001 282.372 320.001 287.997 320.001C323.372 320.001 351.997 348.626 351.997 384.001C351.997 395.751 348.622 406.501 343.122 416.001Z" })
    ]
  }
));
GaugeLowDuotone.displayName = "GaugeLowDuotone";
var GaugeLow_default = GaugeLowDuotone;
