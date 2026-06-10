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
var Dove_exports = {};
__export(Dove_exports, {
  default: () => Dove_default
});
module.exports = __toCommonJS(Dove_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DoveRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.002 160.289C368.002 169.04 375.252 176.29 384.002 176.29S400.002 169.04 400.002 160.289C400.002 151.413 392.752 144.287 384.002 144.287C375.127 144.287 368.002 151.413 368.002 160.289ZM384.002 64.029C337.752 64.029 299.252 96.782 290.127 140.412C261.127 103.783 241.127 60.654 233.877 13.899C231.752 0.648 215.002 -5.103 206.002 5.523C180.877 35.151 161.752 70.655 151.002 110.659C149.377 116.409 148.627 122.285 147.627 128.16C122.252 103.783 101.252 74.655 87.002 41.777C81.502 29.275 63.752 28.775 57.877 41.152C41.752 75.28 32.627 113.159 32.002 153.163C30.752 249.298 86.752 316.304 127.877 352.558L13.752 391.062C1.627 394.312 -3.873 409.314 3.002 420.315C22.752 452.693 71.877 507.324 177.752 511.949C191.252 512.574 195.377 507.324 203.002 502.573L279.377 448.443H320.002C408.377 448.443 480.002 376.811 480.002 288.302V159.914L512.002 64.029H384.002ZM197.377 123.035C200.002 113.284 203.252 103.908 207.002 94.782C222.877 133.286 246.877 167.789 276.252 197.292C246.127 190.417 217.752 179.041 192.252 163.164C192.627 149.413 194.002 135.911 197.377 123.035ZM432.002 152.163V288.302C432.002 350.058 381.752 399.938 320.002 399.938H264.127L174.752 463.694C122.377 460.319 88.752 442.317 67.752 423.44L221.752 371.435C165.877 324.93 78.627 261.174 80.002 153.788C80.127 144.787 80.752 136.786 81.877 128.035C174.627 249.173 320.002 256.048 336.002 256.048V160.289C336.002 133.661 357.502 112.159 384.002 112.159H445.377L432.002 152.163Z" })
  }
));
DoveRegular.displayName = "DoveRegular";
var Dove_default = DoveRegular;
