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
var ShuttleSpace_exports = {};
__export(ShuttleSpace_exports, {
  default: () => ShuttleSpace_default
});
module.exports = __toCommonJS(ShuttleSpace_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttleSpaceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576.834 192.332C533 171.832 474.334 160 416 160H406.891C291.406 109.451 231.129 32 112 32H80C53.49 32 32 53.49 32 80V128C14.326 128 0 142.326 0 160V352C0 369.674 14.326 384 32 384V432C32 458.51 53.49 480 80 480H112C231.129 480 291.406 402.549 406.891 352H416C474.334 352 533 340.166 576.834 319.666C616.334 301.166 640 277.332 640 256C640 234.666 616.334 210.832 576.834 192.332ZM128 80.867C183.34 85.088 224.754 110.531 275.789 142.338C284.957 148.051 294.598 153.996 304.535 160H168.594C158.314 146.193 144.047 136.686 128 131.814V80.867ZM275.789 369.66C224.754 401.469 183.34 426.912 128 431.133V380.18C144.027 375.309 158.293 365.811 168.6 352H304.533C294.596 358.004 284.955 363.947 275.789 369.66ZM544 280.973C507.924 295.283 461.543 304 416 304H141.594L132.375 319.891C126.5 329.984 116.219 336 104.875 336H48V176H104.875C116.086 176 126.453 181.963 132.088 191.654L141.594 208H416C461.553 208 507.941 216.715 544 231.023V280.973ZM480 288C488.836 288 496 280.836 496 272V240C496 231.162 488.836 224 480 224S464 231.162 464 240V272C464 280.836 471.164 288 480 288Z" })
  }
));
ShuttleSpaceRegular.displayName = "ShuttleSpaceRegular";
var ShuttleSpace_default = ShuttleSpaceRegular;
