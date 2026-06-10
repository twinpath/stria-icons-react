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
var Repeat_exports = {};
__export(Repeat_exports, {
  default: () => Repeat_default
});
module.exports = __toCommonJS(Repeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RepeatDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M485.444 258.344C480.991 256.75 476.461 256 471.993 256C455.571 256 440.165 266.188 434.323 282.531C416.073 333.656 367.34 368 313.077 368H192.014V328C192.014 318.297 186.168 309.547 177.2 305.828C168.229 302.109 157.917 304.172 151.04 311.031L71.03 391.031C61.657 400.402 61.657 415.598 71.03 424.969L151.04 504.969C157.917 511.828 168.229 513.891 177.2 510.172C186.168 506.453 192.014 497.703 192.014 488V448H313.077C401.057 448 480.069 392.312 509.663 309.469C517.084 288.656 506.256 265.75 485.444 258.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440.971 120.969L360.962 200.969C354.085 207.828 343.772 209.891 334.803 206.172C325.833 202.453 319.987 193.703 319.987 184V144H198.924C144.661 144 95.928 178.344 77.678 229.469C71.835 245.812 56.43 256 40.008 256C35.54 256 31.008 255.25 26.555 253.656C5.745 246.25 -5.083 223.344 2.339 202.531C31.93 119.688 110.942 64 198.924 64H319.987V24C319.987 14.297 325.833 5.547 334.803 1.828C343.772 -1.891 354.085 0.172 360.962 7.031L440.971 87.031C450.344 96.402 450.344 111.598 440.971 120.969Z" })
    ]
  }
));
RepeatDuotone.displayName = "RepeatDuotone";
var Repeat_default = RepeatDuotone;
