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
var PersonSnowmobiling_exports = {};
__export(PersonSnowmobiling_exports, {
  default: () => PersonSnowmobiling_default
});
module.exports = __toCommonJS(PersonSnowmobiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSnowmobilingDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 96C266.51 96 288 74.51 288 48S266.51 0 240 0S192 21.49 192 48S213.49 96 240 96ZM288 448H32C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512H288C305.672 512 320 497.672 320 480C320 462.326 305.672 448 288 448ZM636.799 446.4L627.199 433.6C624.195 429.559 619.453 427.182 614.42 427.189C610.949 427.191 607.574 428.318 604.799 430.4L570.699 456C563.781 461.205 555.355 464.014 546.699 464H546L499.379 403.109L492.109 408C484.223 413.23 474.965 416.016 465.5 416H449.25L486 464H432C423.162 464 416 471.162 416 480V496C416 504.836 423.162 512 432 512H546.699C565.738 511.986 584.26 505.812 599.5 494.4L633.6 468.799C640.668 463.498 642.102 453.469 636.799 446.4ZM246 136.799C221.014 111.799 180.49 111.789 155.49 136.775C150.627 141.637 146.578 147.25 143.5 153.4L113.699 213.1C100.947 238.25 106.395 268.787 127.021 288H263.6L196.6 254.5L222.199 203.4L256.1 237.299C268.059 249.34 284.33 256.107 301.299 256.1H312L360 192H301.299L246 136.799Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M567.248 251.699L407.947 172L366.449 88.9C362.5 80.975 352.873 77.75 344.949 81.699C337.023 85.648 333.799 95.273 337.748 103.199L373.347 174.4L288.049 288L96.049 288.1C83.924 288.08 72.84 294.939 67.449 305.799L35.449 369.799C24.748 391 40.248 416 64.049 416H465.549C475.013 416.016 484.271 413.23 492.158 408L568.947 356.799C573.394 353.836 576.06 348.842 576.049 343.5V266C576.066 259.949 572.658 254.41 567.248 251.699Z" })
    ]
  }
));
PersonSnowmobilingDuotone.displayName = "PersonSnowmobilingDuotone";
var PersonSnowmobiling_default = PersonSnowmobilingDuotone;
