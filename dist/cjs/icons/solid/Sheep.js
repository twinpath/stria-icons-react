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
var Sheep_exports = {};
__export(Sheep_exports, {
  default: () => Sheep_default
});
module.exports = __toCommonJS(Sheep_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SheepSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624.344 100.76L571.238 47.654C561.215 37.631 547.621 32 533.445 32H464C464 14.326 449.674 0 432 0S400 14.326 400 32V117.74C388.281 104.42 371.137 96 352 96C340.932 96 330.678 99.064 321.598 104.01C309.865 89.48 292.129 80 272 80S234.135 89.48 222.402 104.01C213.322 99.064 203.068 96 192 96C171.871 96 154.135 105.48 142.402 120.01C133.322 115.064 123.068 112 112 112C76.654 112 48 140.654 48 176C48 182.082 49.119 187.85 50.705 193.424C21.748 199.549 0 225.219 0 256S21.748 312.451 50.705 318.576C49.119 324.15 48 329.918 48 336C48 371.346 76.654 400 112 400C113.053 400 113.996 399.645 115.035 399.59L153.965 496.914C157.609 506.025 166.436 512 176.248 512H200C213.254 512 224 501.254 224 488V409.59C235.721 423.133 252.686 432 272 432S308.279 423.133 320 409.59V488C320 501.254 330.746 512 344 512H367.752C377.564 512 386.391 506.025 390.035 496.914L428.965 399.59C430.004 399.645 430.947 400 432 400C467.346 400 496 371.346 496 336C496 329.918 494.881 324.15 493.295 318.576C522.252 312.451 544 286.781 544 256C544 225.578 522.725 200.23 494.273 193.727C494.137 193.131 493.873 192.59 493.721 192H586.553C606.797 192 625.303 180.562 634.355 162.455C644.645 141.879 640.611 117.027 624.344 100.76ZM512 112C503.164 112 496 104.836 496 96S503.164 80 512 80S528 87.164 528 96S520.836 112 512 112Z" })
  }
));
SheepSolid.displayName = "SheepSolid";
var Sheep_default = SheepSolid;
