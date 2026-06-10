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
var Certificate_exports = {};
__export(Certificate_exports, {
  default: () => Certificate_default
});
module.exports = __toCommonJS(Certificate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CertificateLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.786 272.262L479.033 255.887L495.786 239.637C525.79 210.761 512.038 160.01 471.907 150.259L449.154 144.384L455.655 121.759C466.906 81.758 429.526 45.257 390.145 56.257L367.517 62.757L361.766 39.882C351.889 0.006 300.882 -13.744 272.252 16.131L256 32.882L239.748 16.131C211.368 -13.494 160.111 -0.369 150.234 39.882L144.483 62.757L121.855 56.257C82.599 45.257 45.094 81.508 56.345 121.759L62.846 144.384L40.093 150.259C-0.038 160.01 -13.79 210.761 16.214 239.637L32.967 255.887L16.214 272.262C-13.79 301.138 -0.038 351.889 40.093 361.64L62.846 367.515L56.345 390.14C45.094 430.391 82.599 466.642 121.855 455.642L144.483 449.142L150.234 471.892C160.236 512.518 211.118 525.518 239.623 495.768L256 479.017L272.252 495.643C300.507 525.643 351.764 512.393 361.766 471.892L367.517 449.142L390.145 455.642C429.651 466.767 466.781 430.141 455.655 390.14L449.154 367.515L471.907 361.64C512.038 351.889 525.79 301.138 495.786 272.262ZM464.281 330.639L409.398 344.639L424.9 398.89C429.276 414.516 414.524 429.266 398.896 424.891L344.638 409.391L330.636 464.267C326.886 480.142 306.257 485.392 295.381 473.517L256 433.266L216.619 473.517C205.617 485.267 185.239 480.517 181.364 464.267L167.362 409.391L113.104 424.891C97.476 429.266 82.724 414.516 87.1 398.89L102.602 344.639L47.719 330.639C32.092 326.889 26.466 306.638 38.468 295.263L78.724 255.887L38.468 216.511C26.466 205.261 31.967 185.01 47.719 181.26L102.602 167.26L87.1 113.009C82.724 97.383 97.476 82.633 113.104 87.008L167.362 102.508L181.364 47.632C185.114 32.007 205.617 26.632 216.619 38.382L256 78.883L295.381 38.382C306.508 26.507 327.011 32.132 330.636 47.632L344.638 102.508L398.896 87.008C414.524 82.633 429.276 97.383 424.9 113.009L409.398 167.26L464.281 181.26C479.908 185.01 485.534 205.261 473.532 216.511L433.276 255.887L473.532 295.263C485.534 306.638 480.033 326.889 464.281 330.639Z" })
  }
));
CertificateLight.displayName = "CertificateLight";
var Certificate_default = CertificateLight;
