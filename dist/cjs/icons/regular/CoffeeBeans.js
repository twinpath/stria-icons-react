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
var CoffeeBeans_exports = {};
__export(CoffeeBeans_exports, {
  default: () => CoffeeBeans_default
});
module.exports = __toCommonJS(CoffeeBeans_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CoffeeBeansRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170.201 196.446C162.025 193.331 144.379 192.001 127.336 192.001C110.51 192.001 94.274 193.298 88.322 195.45C29.402 216.782 -0.047 283.788 0 351.638C0.045 418.404 28.699 485.789 85.799 507.553C93.975 510.67 111.623 512 128.664 512C145.49 512 161.725 510.703 167.676 508.549C226.6 487.221 256.047 420.213 256 352.363C255.955 285.597 227.301 218.212 170.201 196.446ZM111.188 463.383C106.432 463.013 103.262 462.568 101.826 462.281C64.697 447.285 48.029 396.076 48 351.605C47.971 311.038 62.387 265.321 93.84 246.212C77.707 290.085 82.025 333.324 107.563 370.658C128.041 400.693 129.145 431.881 111.188 463.383ZM166.668 455.228C177.709 417.451 171.242 378.841 147.188 343.564C126.436 313.239 127.164 278.724 148.984 241.017C151.334 241.274 153.24 241.532 154.176 241.72C191.305 256.718 207.971 307.925 208 352.396C208.027 391.058 195.108 434.672 166.668 455.228ZM455.551 56.93C421.809 23.233 377.129 0 334.373 0C319.389 0 304.647 2.852 290.686 9.106C275.379 15.965 239.371 53.147 234.16 64.274C208.522 119.01 234.139 184.8 280.447 231.046C314.192 264.743 358.871 287.976 401.625 287.976C416.61 287.976 431.354 285.124 445.313 278.87C460.621 272.011 496.627 234.829 501.838 223.702C527.481 168.965 501.862 103.176 455.551 56.93ZM424.604 235.536C417.613 238.483 409.891 239.976 401.625 239.976C374.295 239.976 340.86 223.54 314.365 197.081C289.717 172.467 270.188 137.184 272.58 105.666C294.029 141.002 326.205 164.126 367.094 171.813C400.697 178.141 423.297 196.843 435.778 226.157C431.403 230.196 427.295 233.786 424.604 235.536ZM375.969 124.625C341.047 118.055 316.582 96.039 302.926 59.272C306.254 56.305 309.254 53.832 311.397 52.44C318.387 49.492 326.11 48 334.373 48C361.703 48 395.139 64.436 421.633 90.895C444.996 114.225 463.785 147.143 463.676 177.358C443.211 149.944 413.404 131.686 375.969 124.625Z" })
  }
));
CoffeeBeansRegular.displayName = "CoffeeBeansRegular";
var CoffeeBeans_default = CoffeeBeansRegular;
