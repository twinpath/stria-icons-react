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
var GiftCard_exports = {};
__export(GiftCard_exports, {
  default: () => GiftCard_default
});
module.exports = __toCommonJS(GiftCard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GiftCardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 128H479.596C489.746 114.588 496 98.078 496 80C496 35.891 460.125 0 416 0C363.066 0 315.916 60.631 288 106.043C260.084 60.631 212.934 0 160 0C115.875 0 80 35.891 80 80C80 98.078 86.254 114.588 96.404 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H512C547.346 512 576 483.346 576 448V192C576 156.654 547.346 128 512 128ZM416 32C442.469 32 464 53.531 464 80S442.469 128 416 128H312.133C347.332 69.012 386.781 32 416 32ZM160 32C189.219 32 228.668 69.012 263.867 128H160C133.531 128 112 106.469 112 80S133.531 32 160 32ZM544 448C544 465.645 529.645 480 512 480H64C46.355 480 32 465.645 32 448V368H544V448ZM544 336H32V192C32 174.355 46.355 160 64 160H244.764L165.594 227.859C158.875 233.609 158.094 243.703 163.844 250.406C172.521 260.488 183.869 254.336 186.406 252.141L288 165.061L389.594 252.141C392.133 254.336 403.479 260.488 412.156 250.406C417.906 243.703 417.125 233.609 410.406 227.859L331.236 160H512C529.645 160 544 174.355 544 192V336Z" })
  }
));
GiftCardLight.displayName = "GiftCardLight";
var GiftCard_default = GiftCardLight;
