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
var ColonSign_exports = {};
__export(ColonSign_exports, {
  default: () => ColonSign_default
});
module.exports = __toCommonJS(ColonSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ColonSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M338.986 392.472C308.013 417.434 271.039 429.826 233.81 431.363L313.361 102.562C322.213 107.483 330.853 112.991 338.986 119.542C342.392 122.292 347.408 121.76 350.236 118.354C353.002 114.917 352.455 109.854 349.017 107.104C338.976 98.999 328.32 92.152 317.289 86.332L335.783 9.888C336.814 5.607 334.174 1.264 329.877 0.232C325.595 -0.83 321.283 1.857 320.22 6.138L302.347 80.008C278.044 69.688 252.415 64.41 226.599 64.383L239.782 9.888C240.814 5.607 238.173 1.264 233.876 0.232C229.657 -0.83 225.267 1.857 224.22 6.138L210.003 64.904C165.792 68.627 122.686 86.9 88.953 120.229C52.234 156.478 32 204.696 32 256.007S52.234 355.535 88.953 391.784C99.813 402.509 111.819 411.288 124.336 418.977L104.219 502.125C103.188 506.406 105.829 510.75 110.125 511.781C110.75 511.938 111.391 512 112 512C115.61 512 118.891 509.531 119.782 505.875L138.958 426.621C162.514 438.461 187.735 445.322 213.552 447.023L200.22 502.125C199.188 506.406 201.829 510.75 206.126 511.781C206.751 511.938 207.392 512 208.001 512C211.61 512 214.892 509.531 215.782 505.875L229.792 447.969C271.902 447.232 313.982 433.174 349.017 404.909C352.455 402.159 353.002 397.097 350.236 393.659C347.408 390.253 342.392 389.722 338.986 392.472ZM100.204 380.41C66.547 347.161 48 303.006 48 256.007S66.547 164.853 100.204 131.604C129.794 102.372 167.274 86.029 205.962 81.601L128.245 402.821C118.36 396.353 108.905 389.001 100.204 380.41ZM142.79 410.782L222.765 80.224C248.585 79.709 274.341 85.041 298.546 95.724L217.189 431.986C191.374 430.666 166.124 423.118 142.79 410.782Z" })
  }
));
ColonSignThin.displayName = "ColonSignThin";
var ColonSign_default = ColonSignThin;
