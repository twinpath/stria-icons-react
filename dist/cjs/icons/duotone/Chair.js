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
var Chair_exports = {};
__export(Chair_exports, {
  default: () => Chair_default
});
module.exports = __toCommonJS(Chair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChairDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384.004 288V128C384.004 57.307 326.696 0 256.002 0H192.002C121.308 0 64 57.307 64 128V288H112.001V128C112.001 98.523 128.204 73.006 152.001 59.129V288H200.002V48H248.002V288H296.003V59.129C319.8 73.006 336.003 98.523 336.003 128V288H384.004ZM32 496C32 504.836 39.164 512 48 512H80.001C88.838 512 96.001 504.836 96.001 496V384H32V496ZM352.003 384V496C352.003 504.836 359.168 512 368.004 512H400.004C408.842 512 416.004 504.836 416.004 496V384H352.003Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.065 338.594L430.299 306.594C425.065 295.25 413.721 288 401.236 288H46.764C34.279 288 22.935 295.25 17.701 306.594L2.935 338.594C-1.627 348.5 -0.83 360.062 5.045 369.25S21.092 384 31.998 384H416.002C426.908 384 437.08 378.438 442.955 369.25S449.627 348.5 445.065 338.594Z" })
    ]
  }
));
ChairDuotone.displayName = "ChairDuotone";
var Chair_default = ChairDuotone;
