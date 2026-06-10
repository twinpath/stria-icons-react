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
var Vial_exports = {};
__export(Vial_exports, {
  default: () => Vial_default
});
module.exports = __toCommonJS(Vial_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VialThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M439.035 194.939L380.191 253.656H130.704L314.356 70.251C317.481 67.126 317.481 62.064 314.356 58.939C311.263 55.845 306.201 55.782 303.045 58.939L33.127 328.5C-7.214 368.844 -11.245 432.5 23.972 473.375C43.783 496.438 72.531 509.656 103.216 509.656C131.089 509.656 157.244 498.844 176.898 479.188L450.347 206.251C453.472 203.126 453.472 198.064 450.347 194.939C447.253 191.814 442.191 191.814 439.035 194.939ZM165.587 467.875C148.963 484.5 126.808 493.656 102.779 493.656C77.187 493.656 52.876 482.469 36.096 462.938C6.317 428.344 9.973 374.281 44.439 339.813L114.684 269.656H364.163L165.587 467.875ZM509.656 176L333.669 0C330.544 -3.125 325.482 -3.125 322.357 0S319.232 8.188 322.357 11.313L498.345 187.313C499.907 188.875 501.938 189.656 504.001 189.656C506.063 189.656 508.094 188.875 509.656 187.313C512.781 184.188 512.781 179.125 509.656 176Z" })
  }
));
VialThin.displayName = "VialThin";
var Vial_default = VialThin;
