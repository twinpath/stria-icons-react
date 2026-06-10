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
var EggFried_exports = {};
__export(EggFried_exports, {
  default: () => EggFried_default
});
module.exports = __toCommonJS(EggFried_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggFriedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.358 150.493C438.854 109.74 377.598 104.114 333.843 68.237C284.088 27.233 245.709 -9.269 175.327 2.106C88.569 16.108 63.566 82.113 50.315 159.244C39.189 223.624 -4.066 286.254 0.31 352.134S53.19 480.644 115.321 502.895C208.331 536.273 262.211 471.143 319.967 416.514C363.596 375.01 413.351 378.761 460.856 342.508C517.237 299.755 532.613 201.997 478.358 150.493ZM223.957 352.384C162.201 352.384 111.946 302.13 111.946 240.25C111.946 178.495 162.201 128.116 223.957 128.116S335.968 178.495 335.968 240.25C335.968 302.13 285.713 352.384 223.957 352.384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224.012 128.115C162.256 128.115 112 178.494 112 240.25C112 302.129 162.256 352.383 224.012 352.383S336.023 302.129 336.023 240.25C336.023 178.494 285.768 128.115 224.012 128.115ZM216.012 191.996C193.885 191.996 176.008 209.873 176.008 231.998C176.008 240.875 168.881 248 160.006 248C151.129 248 144.004 240.875 144.004 231.998C144.004 192.246 176.258 159.994 216.012 159.994C224.887 159.994 232.012 167.119 232.012 175.994C232.012 184.871 224.887 191.996 216.012 191.996Z" })
    ]
  }
));
EggFriedDuotone.displayName = "EggFriedDuotone";
var EggFried_default = EggFriedDuotone;
