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
var Steak_exports = {};
__export(Steak_exports, {
  default: () => Steak_default
});
module.exports = __toCommonJS(Steak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SteakRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368.883 96C341.508 96 317.008 119.75 306.258 156.375C300.008 177.75 279.508 262.625 133.133 326.375C51.008 362.125 123.383 414.875 228.883 414.875C301.633 414.875 390.133 389.75 454.383 316.625C492.508 273.125 487.133 190.625 442.758 140C417.883 111.625 391.633 96 368.883 96ZM384.008 255.875C366.383 255.875 352.008 241.625 352.008 223.875C352.008 206.25 366.383 191.875 384.008 191.875S416.008 206.25 416.008 223.875C416.008 241.625 401.633 255.875 384.008 255.875ZM514.884 76.625C467.883 23.125 416.258 0 368.883 0C298.258 0 237.008 51.125 214.133 129.375C165.008 269.375 1.382 212.375 0.007 351.625C-1.118 467.5 126.383 512 239.258 512C244.883 512 250.508 511.875 256.008 511.625C343.758 508.25 443.383 474.625 526.509 379.875C596.759 299.75 591.634 164 514.884 76.625ZM490.383 348.125C410.508 439.125 317.883 461.25 254.133 463.75C249.258 463.875 244.258 464 239.258 464C167.633 464 103.508 444.25 71.883 412.375C55.633 395.875 47.758 376.125 48.008 352.125C48.383 312.625 63.008 304.5 113.883 282.25C162.383 261.125 228.883 232.25 259.383 145.25L259.758 144.125L260.133 142.875C277.008 85.25 319.758 48 368.883 48C406.133 48 444.258 68.875 478.883 108.375C539.009 176.875 544.384 286.75 490.383 348.125Z" })
  }
));
SteakRegular.displayName = "SteakRegular";
var Steak_default = SteakRegular;
