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
var Section_exports = {};
__export(Section_exports, {
  default: () => Section_default
});
module.exports = __toCommonJS(Section_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SectionLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M203.934 342.596C230.893 329.566 249.256 308.662 254.264 280.654C268.448 201.188 192.905 180.258 132.202 163.42L117.487 159.328C54.317 141.305 25.606 125.248 33.198 82.766C41.696 35.035 103.491 27.1 154.165 34.691C168.317 36.846 185.063 41.252 206.87 48.561C215.305 51.527 224.303 46.873 227.114 38.502C229.926 30.131 225.428 21.072 217.055 18.26C193.467 10.326 175.005 5.484 158.946 3.078C73.811 -9.979 12.079 19.197 1.706 77.143C-7.074 126.217 19.323 153.041 51.409 169.408C24.616 182.391 6.692 203.451 1.706 231.361C-12.322 309.83 63.471 331.416 108.741 344.285L123.643 348.471C190.717 367.059 231.395 380.896 222.772 429.252C214.274 476.982 152.26 485.01 101.743 477.295C79.811 474.109 54.505 465.268 32.198 457.459L21.233 453.648C12.798 450.773 3.768 455.209 0.895 463.551C-1.98 471.922 2.456 481.012 10.798 483.887L21.639 487.666C45.288 495.943 72.126 505.314 97.024 508.937C110.489 511 123.331 512 135.514 512C200.403 512 245.548 483.668 254.264 434.875C262.899 386.494 238.217 359.869 203.934 342.596ZM33.198 236.984C38.092 209.641 63.02 192.459 100.962 187.832C103.624 188.604 106.245 189.355 108.741 190.066L123.643 194.252C190.717 212.838 231.395 226.676 222.772 275.031C217.897 302.266 193.208 319.678 155.503 324.266C147.639 321.922 139.803 319.75 132.202 317.641L117.487 313.549C55.661 295.93 25.637 279.25 33.198 236.984Z" })
  }
));
SectionLight.displayName = "SectionLight";
var Section_default = SectionLight;
