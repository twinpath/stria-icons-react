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
var LampDesk_exports = {};
__export(LampDesk_exports, {
  default: () => LampDesk_default
});
module.exports = __toCommonJS(LampDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampDeskThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 89.03C512 71.768 498.082 57.137 480.125 57.137H353.393L317.27 21.02C303.239 7.406 284.984 0 265.696 0C224.933 0 192.141 32.859 192.141 73.697C192.141 92.262 199.036 110.841 212.856 125.086L230.234 142.461L122.349 250.344C120.831 251.861 119.997 253.901 119.997 255.998C119.997 256.664 120.081 257.337 120.255 258L181.677 496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H376.015C380.421 512 384.015 508.406 384.015 504S380.421 496 376.015 496H198.209L136.88 258.438L241.547 153.773L249.149 161.379V288.105C249.149 305.691 263.501 320 281.144 320C289.5 320 297.424 316.719 303.453 310.758L502.711 111.504C508.792 105.356 512 97.265 512 89.03ZM496.02 89.13C496.02 93.008 494.59 96.962 491.396 100.191L292.205 299.379C288.974 302.57 285.021 304 281.144 304C272.978 304 265.149 297.66 265.149 288.105V154.75L224.341 113.945C213.448 102.718 208.008 88.196 208.008 73.685C208.008 42.701 232.985 16 265.696 16C280.206 16 294.729 21.441 305.957 32.332L346.766 73.137H480.125C489.679 73.137 496.02 80.963 496.02 89.13ZM460.233 191.353C455.798 191.353 452.202 194.914 452.202 199.34C452.202 206.446 463.989 210.471 463.989 230.912C463.989 241.31 459.998 251.695 452.112 259.531C444.311 267.381 433.975 271.346 423.619 271.346C403.114 271.346 399.153 259.541 392.046 259.541C387.668 259.541 384.012 263.063 384.012 267.535C384.012 276.053 404.685 287.312 423.642 287.312C438.111 287.312 452.549 281.781 463.425 270.844C474.417 259.933 479.975 245.457 479.975 230.947C479.975 212.059 468.729 191.353 460.233 191.353Z " })
  }
));
LampDeskThin.displayName = "LampDeskThin";
var LampDesk_default = LampDeskThin;
