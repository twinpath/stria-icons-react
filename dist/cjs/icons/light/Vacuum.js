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
var Vacuum_exports = {};
__export(Vacuum_exports, {
  default: () => Vacuum_default
});
module.exports = __toCommonJS(Vacuum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VacuumLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 400C343.125 400 336 407.125 336 416S343.125 432 352 432S368 424.875 368 416S360.875 400 352 400ZM640 112C639.875 50.125 589.875 0.125 528 0H302.125C249.125 0.125 203.375 37.375 192.5 89.25L124.875 416H80C35.875 416 0 451.875 0 496C0 504.875 7.125 512 16 512H208C216.875 512 224 504.875 224 496V432C224 423.125 216.875 416 208 416H157.625L223.75 95.75C231.625 58.75 264.25 32.125 302.125 32H528C572.125 32 608 67.875 608 112S572.125 192 528 192H494.875C458.5 151.25 406.5 128 352 128C334.375 128 320 142.375 320 160V325.875C282.875 339.125 256 374.375 256 416C256 469 299 512 352 512H480C515.375 512 544 483.375 544 448V320C544 286.25 535.125 253.125 518.125 224H528C589.875 223.875 639.875 173.875 640 112ZM192 448V480H34.75C41.5 460.875 59.625 448 80 448H192ZM352 480C316.625 480 288 451.375 288 416S316.625 352 352 352S416 380.625 416 416S387.375 480 352 480ZM512 448C512 465.625 497.625 480 480 480H423C448.625 452 455.125 411.5 439.75 376.75C424.375 342.125 389.875 319.875 352 320V160C440.25 160 512 231.75 512 320V448Z" })
  }
));
VacuumLight.displayName = "VacuumLight";
var Vacuum_default = VacuumLight;
