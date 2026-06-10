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
var Pear_exports = {};
__export(Pear_exports, {
  default: () => Pear_default
});
module.exports = __toCommonJS(Pear_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PearRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 24C512 10.291 500.79 0 488 0C481.86 0 475.719 2.344 471.031 7.031L422.498 55.564C400.182 39.947 374.391 32 348.248 32C311.49 32 274.455 46.75 246.944 74.352C217.846 103.543 180.914 123.223 141.219 134.102C108.154 143.165 0 192.152 0 319.536C0 426.24 86.963 512 192.246 512C229.931 512 342.307 492.221 376.408 373.152C411.747 249.725 479.65 261.186 479.65 166.232C479.65 139.546 471.767 112.822 456.1 89.838L504.969 40.969C509.656 36.281 512 30.141 512 24ZM431.999 165.372C431.999 235.54 368.527 226.303 330.264 359.936C318.457 401.16 274.918 464 192.246 464C129.328 464 47.978 413.335 47.978 319.538C47.978 252.454 93.824 196.862 153.906 180.395C278.527 146.238 275.143 80 348.248 80C358.881 80 373.416 82.125 387.955 90.107L367.031 111.031C362.344 115.719 360 121.859 360 128C360 134.861 365.368 152 384 152C390.156 152 396.281 149.656 400.969 144.969L421.529 124.408C425.561 131.89 431.999 146.164 431.999 165.372Z" })
  }
));
PearRegular.displayName = "PearRegular";
var Pear_default = PearRegular;
