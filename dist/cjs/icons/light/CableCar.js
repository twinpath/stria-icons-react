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
var CableCar_exports = {};
__export(CableCar_exports, {
  default: () => CableCar_default
});
module.exports = __toCommonJS(CableCar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CableCarLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.455 51.875C509.174 43.375 500.487 38.188 491.863 40.547L11.888 168.547C3.357 170.812 -1.736 179.578 0.545 188.125C3.028 197.448 12.445 201.551 20.137 199.453L240.001 140.82V224H96.008C60.665 224 32.012 252.654 32.012 288V448C32.012 483.346 60.665 512 96.008 512H415.992C451.335 512 479.988 483.346 479.988 448V288C479.988 252.654 451.335 224 415.992 224H271.999V132.287L500.112 71.453C508.643 69.188 513.736 60.422 511.455 51.875ZM64.01 288C64.01 270.355 78.365 256 96.008 256H160.005V352H64.01V288ZM447.99 448C447.99 465.645 433.635 480 415.992 480H96.008C78.365 480 64.01 465.645 64.01 448V384H447.99V448ZM351.995 256H415.992C433.635 256 447.99 270.355 447.99 288V352H351.995V256ZM319.997 256V352H192.003V256H319.997ZM287.998 56C301.252 56 311.997 45.256 311.997 32S301.252 8 287.998 8S264 18.744 264 32S274.745 56 287.998 56ZM192.003 88C205.257 88 216.002 77.256 216.002 64S205.257 40 192.003 40S168.005 50.744 168.005 64S178.75 88 192.003 88Z" })
  }
));
CableCarLight.displayName = "CableCarLight";
var CableCar_default = CableCarLight;
