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
var Ram_exports = {};
__export(Ram_exports, {
  default: () => Ram_default
});
module.exports = __toCommonJS(Ram_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RamSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624.344 100.76L571.238 47.654C561.215 37.631 547.621 32 533.445 32H456.955C435.57 12.316 407.289 0 376 0C323.537 0 279.314 34.051 263.045 81.049C246.697 83.424 232.334 91.709 222.402 104.01C213.32 99.064 203.068 96 192 96C171.871 96 154.135 105.48 142.402 120.01C133.32 115.064 123.068 112 112 112C76.654 112 48 140.654 48 176C48 182.082 49.119 187.85 50.705 193.424C21.748 199.549 0 225.219 0 256S21.748 312.451 50.705 318.576C49.119 324.15 48 329.918 48 336C48 371.346 76.654 400 112 400C113.053 400 114.035 399.74 115.076 399.689L153.965 496.914C157.609 506.025 166.436 512 176.248 512H200C213.254 512 224 501.254 224 488V409.926C235.73 423.346 252.775 432 272 432S308.27 423.346 320 409.928V488C320 501.254 330.746 512 344 512H367.752C377.564 512 386.391 506.025 390.035 496.914L428.924 399.689C429.965 399.74 430.947 400 432 400C467.348 400 496 371.346 496 336C496 329.918 494.881 324.15 493.295 318.576C522.254 312.451 544 286.781 544 256C544 225.578 522.725 200.23 494.273 193.727C494.137 193.131 493.873 192.59 493.721 192H586.553C606.797 192 625.303 180.562 634.355 162.455C644.645 141.879 640.611 117.027 624.344 100.76ZM426.383 96C417.087 76.587 397.102 63.219 373.995 64.036C344.782 65.068 320.522 89.772 320.009 118.998C319.458 150.33 344.792 176 376 176H392C400.837 176 408 183.163 408 192V192C408 200.837 400.837 208 392 208H378.567C332.766 208 292.68 174.067 288.398 128.466C283.486 76.144 324.675 32 376 32C416.156 32 449.73 59.18 460.254 96H426.383ZM512 112C503.164 112 496 104.836 496 96S503.164 80 512 80S528 87.164 528 96S520.836 112 512 112Z" })
  }
));
RamSolid.displayName = "RamSolid";
var Ram_default = RamSolid;
