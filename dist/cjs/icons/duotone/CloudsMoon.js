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
var CloudsMoon_exports = {};
__export(CloudsMoon_exports, {
  default: () => CloudsMoon_default
});
module.exports = __toCommonJS(CloudsMoon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudsMoonDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M631.004 248.75C552.753 263.5 481.002 204 481.002 125.625C481.002 80.5 505.252 39 544.878 16.625C551.003 13.25 549.503 4 542.503 2.75C532.878 0.875 523.003 0 513.128 0C424.251 0 352 71.625 352 160C352 160.75 352.25 161.25 352.25 162C368.5 178.75 379.25 200.75 382.5 225.125C421.001 230.25 454.252 255 470.127 289.875C493.252 293.875 514.128 304.25 531.253 319C573.753 314.25 611.879 293 638.255 260.75C642.755 255.25 637.88 247.375 631.004 248.75Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448.007 320H446.382C439.007 283.5 406.756 256 368.006 256C343.38 256 321.755 267.25 307.005 284.75C288.38 248.875 251.254 224 208.003 224C149.752 224 102.377 268.75 97.127 325.625C59.251 338.5 32.001 373.875 32.001 416C32.001 469 75.001 512 128.002 512H448.007C501.008 512 544.009 469 544.009 416S501.008 320 448.007 320ZM68.251 303.25C83.251 238.625 140.252 192 208.003 192C248.754 192 286.63 209.25 313.38 238.5C324.88 232 337.505 227.75 350.506 225.625C343.755 188.25 311.255 160 272.004 160H254.379C247.004 123.5 214.753 96 176.003 96S105.002 123.5 97.627 160H80.001C35.751 160 0 195.75 0 240C0 273.875 21.25 302.75 51.001 314.375C56.501 310.25 62.251 306.375 68.251 303.25Z" })
    ]
  }
));
CloudsMoonDuotone.displayName = "CloudsMoonDuotone";
var CloudsMoon_default = CloudsMoonDuotone;
