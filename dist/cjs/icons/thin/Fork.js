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
var Fork_exports = {};
__export(Fork_exports, {
  default: () => Fork_default
});
module.exports = __toCommonJS(Fork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M346.344 213.914C349.471 217.041 354.53 217.041 357.657 213.914L485.657 85.762C488.78 82.637 488.78 77.574 485.657 74.449C482.532 71.324 477.469 71.324 474.344 74.449L346.344 202.602C343.219 205.727 343.219 210.789 346.344 213.914ZM298.344 165.854C301.471 168.98 306.53 168.98 309.657 165.854L437.657 37.701C440.782 34.576 440.782 29.514 437.657 26.389S429.469 23.264 426.344 26.389L298.344 154.541C295.219 157.666 295.219 162.729 298.344 165.854ZM508.061 122.043C504.28 119.793 499.358 121.074 497.108 124.887L435.594 229.508C417.219 257.883 387.407 276.225 353.813 279.787C334.266 281.85 307.938 278.131 291.141 270.943C288.079 269.6 284.563 270.318 282.235 272.725L71.409 491.594C65.1 498.203 55.682 496.289 51.268 491.875L20.096 460.689C15.253 455.846 13.956 446.643 20.425 440.502L239.61 230.07C242.001 227.758 242.719 224.195 241.423 221.133C234.235 204.32 230.516 177.947 232.563 158.416C236.126 124.762 254.751 94.73 283.376 76.199L388.048 14.92C391.86 12.67 393.141 7.795 390.907 3.982C388.673 0.139 383.766 -1.143 379.954 1.107L274.985 62.576C241.985 83.918 220.721 118.23 216.659 156.729C214.518 177.104 217.784 203.133 224.659 222.227L9.362 428.939C3.518 434.502 0.112 442.314 0.003 450.377S3.112 466.344 8.8 472L39.94 503.188C45.55 508.812 53.253 512 61.143 512H61.596C69.628 511.875 77.409 508.469 82.956 502.688L290.048 287.693C309.11 294.568 335.079 297.693 355.485 295.725C393.923 291.6 428.016 270.662 449.204 237.914L510.889 133.01C513.139 129.199 511.858 124.293 508.061 122.043Z" })
  }
));
ForkThin.displayName = "ForkThin";
var Fork_default = ForkThin;
