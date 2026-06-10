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
const SectionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.13 340.185C236.382 326.165 249.943 306.208 254.242 281.147C268.673 197.038 191.203 174.628 134.63 158.282L120.98 154.312C59.691 136.122 43.541 121.649 49.007 89.771C55.849 49.888 108.017 43.542 150.781 50.356C163.277 52.294 178.302 56.421 198.045 63.327C210.57 67.642 224.189 61.108 228.595 48.575C232.968 36.073 226.377 22.384 213.851 18.007C191.328 10.13 173.648 5.349 158.248 2.911C74.998 -10.122 12.023 21.413 1.714 81.644C-6.073 127.091 13.757 154.534 40.132 172.167C19.744 186.046 5.982 205.784 1.714 230.825C-12.532 313.966 65.47 337.095 107.361 349.503L121.199 353.534C192.078 374.007 213.132 386.134 206.947 422.204C200.136 462.116 147.814 468.243 105.048 461.616C85.838 458.71 63.033 450.396 42.916 443.083L32.078 439.175C19.675 434.581 5.869 441.206 1.433 453.708C-3.034 466.181 3.463 479.933 15.959 484.37L26.517 488.185C48.726 496.278 73.935 505.468 97.709 509.062C110.297 511.032 122.418 512.001 133.974 512.001C198.826 512.001 245.494 481.464 254.242 430.329C261.916 385.573 243.494 358.384 216.13 340.185ZM49.007 238.921C53.714 211.304 80.021 201.802 101.81 198.663C103.691 199.228 105.599 199.8 107.361 200.321L121.324 204.415C192.078 224.856 213.132 236.983 206.947 273.021C202.218 300.64 175.998 310.112 154.213 313.263C147.492 311.198 140.859 309.267 134.505 307.433L120.98 303.495C59.691 285.304 43.541 270.833 49.007 238.921Z" })
  }
));
SectionRegular.displayName = "SectionRegular";
var Section_default = SectionRegular;
