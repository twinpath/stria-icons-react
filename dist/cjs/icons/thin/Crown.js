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
var Crown_exports = {};
__export(Crown_exports, {
  default: () => Crown_default
});
module.exports = __toCommonJS(Crown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrownThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M536 96C513.908 96 496 113.908 496 136C496 144.998 499.521 152.889 504.537 159.57L414.91 231.271C408.955 236.035 401.92 238.291 394.975 238.291C383.365 238.291 371.998 231.996 366.297 220.596L308.699 105.398C320.037 98.34 328 86.342 328 72C328 49.908 310.092 32 288 32S248 49.908 248 72C248 86.342 255.963 98.34 267.301 105.398L209.703 220.596C204.002 231.994 192.635 238.291 181.025 238.291C174.078 238.291 167.045 236.035 161.09 231.271L71.463 159.57C76.479 152.889 80 144.998 80 136C80 113.908 62.092 96 40 96S0 113.908 0 136S17.908 176 40 176C40.248 176 40.453 175.863 40.701 175.859L91.223 453.725C93.988 468.939 107.242 480 122.707 480H453.293C468.758 480 482.012 468.939 484.777 453.725L535.299 175.859C535.547 175.863 535.752 176 536 176C558.092 176 576 158.092 576 136S558.092 96 536 96ZM264 72C264 58.766 274.766 48 288 48S312 58.766 312 72S301.234 96 288 96S264 85.234 264 72ZM40 160C26.766 160 16 149.234 16 136S26.766 112 40 112S64 122.766 64 136S53.234 160 40 160ZM469.035 450.863C467.652 458.475 461.031 464 453.293 464H122.707C114.969 464 108.348 458.475 106.965 450.863L56.326 172.348C57.436 171.848 58.258 170.93 59.311 170.336L151.094 243.766C159.701 250.65 170.051 254.291 181.025 254.291C199.355 254.291 215.828 244.121 224.014 227.752L282.449 110.879C284.342 111.154 286.031 112 288 112S291.658 111.154 293.551 110.879L351.986 227.752C360.172 244.121 376.645 254.291 394.975 254.291C405.947 254.291 416.299 250.65 424.906 243.766L516.689 170.336C517.742 170.93 518.564 171.848 519.674 172.348L469.035 450.863ZM536 160C522.766 160 512 149.234 512 136S522.766 112 536 112S560 122.766 560 136S549.234 160 536 160Z" })
  }
));
CrownThin.displayName = "CrownThin";
var Crown_default = CrownThin;
