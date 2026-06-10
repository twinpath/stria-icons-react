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
var Stocking_exports = {};
__export(Stocking_exports, {
  default: () => Stocking_default
});
module.exports = __toCommonJS(Stocking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StockingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.049 160H335.924C327.119 160 319.981 167.135 319.981 175.938V302.875H320.106C320.106 345.75 298.85 385.625 263.088 409.375L181.314 463.875C165.434 474.5 147.055 480 128.174 480C95.914 480 65.904 464 48.148 437.25C33.895 415.875 28.768 390.25 33.77 365.125S53.275 318.25 74.781 304.125L113.793 278.125L127.924 268.625V175.938C127.924 167.135 120.785 160 111.98 160S96.039 167.135 96.039 175.938V251.5L57.027 277.5C-1.74 316.75 -17.746 396.25 21.516 455C46.273 492 86.785 512 128.174 512C152.555 512 177.313 505 199.07 490.5L280.844 436C325.357 406.25 351.99 356.5 351.99 302.875V175.938C351.99 167.135 344.854 160 336.049 160ZM335.986 0H112.043C85.525 0 64.029 21.49 64.029 48V80C64.029 106.51 85.525 128 112.043 128H335.986C362.504 128 384 106.51 384 80V48C384 21.49 362.504 0 335.986 0ZM352.115 80C352.115 88.836 344.949 96 336.111 96H112.043C103.203 96 96.039 88.836 96.039 80V48C96.039 39.162 103.203 32 112.043 32H336.111C344.949 32 352.115 39.162 352.115 48V80Z" })
  }
));
StockingLight.displayName = "StockingLight";
var Stocking_default = StockingLight;
