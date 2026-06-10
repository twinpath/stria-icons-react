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
var ListOl_exports = {};
__export(ListOl_exports, {
  default: () => ListOl_default
});
module.exports = __toCommonJS(ListOl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListOlRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.001 120H488.001C501.255 120 512.001 109.254 512.001 96S501.255 72 488.001 72H216.001C202.747 72 192.001 82.746 192.001 96S202.747 120 216.001 120ZM488.001 392H216.001C202.747 392 192.001 402.746 192.001 416S202.747 440 216.001 440H488.001C501.255 440 512.001 429.254 512.001 416S501.255 392 488.001 392ZM488.001 232H216.001C202.747 232 192.001 242.746 192.001 256S202.747 280 216.001 280H488.001C501.255 280 512.001 269.254 512.001 256S501.255 232 488.001 232ZM40.001 224H120.001C133.251 224 144.001 213.25 144.001 199.998S133.251 175.996 120.001 175.996H104.001V55.986C104.001 47.393 99.407 39.453 91.938 35.172C84.501 30.906 75.282 30.953 67.907 35.25L35.907 53.924C24.469 60.611 20.594 75.301 27.282 86.754C33.126 96.85 45.313 101.1 56.001 97.287V175.996H40.001C26.751 175.996 16.001 186.746 16.001 199.998S26.751 224 40.001 224ZM136.323 432.002H86.88L123.284 399.52C153.2 373.693 156.819 328.164 131.333 298.023C118.573 282.963 100.669 273.807 80.891 272.244C61.27 270.65 41.928 276.932 26.924 289.867L14.417 300.664C4.372 309.32 3.249 324.477 11.889 334.521C20.561 344.584 35.69 345.662 45.672 337.037L58.182 326.242C63.422 321.711 70.286 319.57 77.147 320.086C84.073 320.633 90.342 323.82 94.772 329.055C103.475 339.334 102.258 354.318 91.715 363.412L8.02 438.08C0.596 444.705 -1.962 455.236 1.563 464.547C5.12 473.844 14.01 480 23.962 480H136.323C149.549 480 160.28 469.25 160.28 456.002C160.28 442.752 149.549 432.002 136.323 432.002Z" })
  }
));
ListOlRegular.displayName = "ListOlRegular";
var ListOl_default = ListOlRegular;
