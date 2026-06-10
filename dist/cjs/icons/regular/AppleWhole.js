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
var AppleWhole_exports = {};
__export(AppleWhole_exports, {
  default: () => AppleWhole_default
});
module.exports = __toCommonJS(AppleWhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AppleWholeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.28 177.625C396.777 151.125 371.273 134.5 341.644 129.375C307.138 123.375 255.505 138.5 224 153.125C192.495 138.5 140.987 123.375 106.357 129.375C76.727 134.5 51.348 151.125 32.72 177.625C4.841 217.5 -6.536 280.125 3.716 337.125C18.968 421.75 69.976 512 167.241 512C180.618 512 194.871 508 209.498 500C218.499 495.125 229.501 495.125 238.503 500C253.13 508 267.382 512 280.759 512C378.024 512 429.032 421.75 444.285 337.125C454.536 280.125 443.16 217.5 415.28 177.625ZM397.027 328.625C393.027 351.25 368.273 464 280.759 464C275.508 464 268.882 461.875 261.506 457.875C249.879 451.625 237.002 448.375 224 448.375S198.121 451.625 186.494 457.875C179.118 461.875 172.492 464 167.241 464C79.728 464 54.974 351.25 50.973 328.625C42.972 284.25 51.473 234.625 72.101 205.125C83.228 189.125 97.48 179.625 114.483 176.625C127.11 174.5 168.367 176.625 224 207.375C279.634 176.625 321.015 174.5 333.517 176.625C350.52 179.625 364.772 189.125 375.899 205.125C396.527 234.625 405.029 284.25 397.027 328.625ZM222.375 112C241.128 112 274.508 108.75 295.637 87.625C326.141 57 319.39 0.625 319.39 0.625S313.889 0 305.638 0C286.885 0 253.505 3.25 232.377 24.375C201.872 55 208.623 111.375 208.623 111.375S213.999 112 222.375 112Z" })
  }
));
AppleWholeRegular.displayName = "AppleWholeRegular";
var AppleWhole_default = AppleWholeRegular;
