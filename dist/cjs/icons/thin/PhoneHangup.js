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
var PhoneHangup_exports = {};
__export(PhoneHangup_exports, {
  default: () => PhoneHangup_default
});
module.exports = __toCommonJS(PhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneHangupThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 144C433.397 144 539.879 187.975 619.833 267.826C624.493 272.48 625.318 279.6 621.827 285.16L569.094 369.412C566.555 373.471 561.96 375.994 557.101 375.994C555.327 375.994 553.588 375.66 551.965 375.016L446.508 332.896C440.731 330.613 437.159 324.74 437.831 318.492L445.733 239.389C405.604 225.701 370.152 216.471 320.013 216.469C271.044 216.466 235.666 225.29 194.395 239.365L202.275 318.527C202.897 324.691 199.309 330.615 193.59 332.916L88.226 375.002C86.528 375.664 84.754 376 82.951 376C77.99 376 73.484 373.527 70.889 369.373L18.161 285.117C14.682 279.59 15.503 272.482 20.156 267.834C100.116 187.979 206.603 144 320.002 144M320.002 128C207.321 128 94.638 170.836 8.849 256.514C-1.118 266.469 -2.862 281.75 4.619 293.639L57.327 377.861C62.955 386.873 72.758 392 82.951 392C86.658 392 90.417 391.322 94.044 389.906L199.524 347.775C211.916 342.787 219.533 330.187 218.195 316.922L211.574 250.412C246.661 238.449 283.329 232.469 320.013 232.469C356.715 232.471 393.431 238.459 428.551 250.434L421.91 316.902C420.486 330.125 428.17 342.85 440.622 347.775L546.03 389.875C549.646 391.311 553.397 391.994 557.101 391.994C567.266 391.994 577.067 386.838 582.66 377.895L635.389 293.648C642.86 281.75 641.117 266.469 631.138 256.504C545.359 170.836 432.682 128 320.002 128L320.002 128Z" })
  }
));
PhoneHangupThin.displayName = "PhoneHangupThin";
var PhoneHangup_default = PhoneHangupThin;
