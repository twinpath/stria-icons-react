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
var BaseballBatBall_exports = {};
__export(BaseballBatBall_exports, {
  default: () => BaseballBatBall_default
});
module.exports = __toCommonJS(BaseballBatBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BaseballBatBallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 320C459.125 320 416 363.125 416 416S459.125 512 512 512S608 468.875 608 416S564.875 320 512 320ZM511.981 464.008C485.471 464.008 463.963 442.5 463.963 415.984S485.471 367.953 511.981 367.953C538.493 367.953 560 389.469 560 415.984S538.493 464.008 511.981 464.008ZM625.586 54.414L608.836 32.41C581.711 -4.598 531.211 -9.473 496.586 15.531L308.713 152.18C260.713 186.812 216.713 225.445 177.715 269.953C122.965 332.594 71.715 371.223 42.215 392.477C33.715 382.727 19.215 381.227 8.965 389.227C-1.285 397.477 -3.035 412.605 5.215 422.859L69.215 502.875C77.09 512.75 92.215 515.25 103.09 506.625C112.34 499.125 114.215 486.242 108.465 476.242C137.59 455.238 190.34 419.609 264.463 388.227C319.213 365.223 370.963 336.094 419.088 301.336L604.961 165.937C640.836 140.055 651.711 90.047 625.586 54.414ZM575.961 128.305L390.838 263.953C315.838 316.711 254.463 339.969 229.213 351.594L202.088 314.461C220.963 294.211 261.838 245.199 336.838 191.062L524.711 54.789C538.211 45.039 558.961 45.914 570.211 61.164L583.211 82.672C593.461 96.922 590.336 116.676 575.961 128.305Z" })
  }
));
BaseballBatBallRegular.displayName = "BaseballBatBallRegular";
var BaseballBatBall_default = BaseballBatBallRegular;
