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
var Dove_exports = {};
__export(Dove_exports, {
  default: () => Dove_default
});
module.exports = __toCommonJS(Dove_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoveDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400.005 64.001C355.801 64.039 319.992 99.893 320.008 144.098V203.496C218.122 197.644 128.12 135.163 87.018 41.751C81.518 29.252 63.819 28.552 58.019 40.851C40.88 77.011 31.999 116.531 32.02 156.547C32.02 227.345 66.119 293.442 117.117 342.441C129.386 354.174 142.378 365.129 156.015 375.239L12.121 411.238C3.506 413.437 -1.695 422.204 0.504 430.819C0.941 432.531 1.656 434.158 2.622 435.637C20.021 462.536 63.019 508.135 155.895 511.984C163.995 512.236 171.89 509.414 177.994 504.085L243.191 447.987H320.008C408.293 448.064 479.924 376.558 480.001 288.273C480.001 288.266 480.001 288.259 480.001 288.253V127.998L512 64.001H400.005ZM400.036 160H399.965C391.129 159.98 383.981 152.801 384.001 143.965C384.02 135.128 391.2 127.981 400.036 128C408.873 128.02 416.02 135.199 416.001 144.035C415.981 152.844 408.845 159.981 400.036 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.113 176.687V203.496C254.712 199.743 192.874 172.471 146 126.708C147.12 121.029 148.44 115.369 150 109.709C160.788 71.181 180.012 35.534 206.277 5.353C215.187 -4.937 232.036 0.513 233.966 14.002C242.86 76.608 273.328 134.146 320.113 176.687Z" })
    ]
  }
));
DoveDuotone.displayName = "DoveDuotone";
var Dove_default = DoveDuotone;
