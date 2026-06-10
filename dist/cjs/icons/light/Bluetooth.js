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
var Bluetooth_exports = {};
__export(Bluetooth_exports, {
  default: () => Bluetooth_default
});
module.exports = __toCommonJS(Bluetooth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BluetoothLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184.998 255.992L314.25 148.266C317.907 145.234 320 140.734 320 135.984S317.907 126.734 314.25 123.703L170.248 3.703C165.467 -0.305 158.811 -1.086 153.217 1.484C147.592 4.141 143.997 9.766 143.997 15.984V221.832L26.245 123.703C19.495 118.078 9.401 118.984 3.713 125.734C-1.943 132.516 -1.037 142.609 5.745 148.266L134.997 255.992L5.745 363.711C-1.037 369.367 -1.943 379.461 3.713 386.242S19.463 393.898 26.245 388.273L143.997 290.148V496C143.997 502.219 147.592 507.844 153.217 510.5C155.373 511.5 157.686 512 159.998 512C163.686 512 167.311 510.75 170.248 508.281L314.25 388.273C317.907 385.242 320 380.742 320 375.992S317.907 366.742 314.25 363.711L184.998 255.992ZM175.998 50.141L279 135.984L175.998 221.832V50.141ZM175.998 461.844V290.148L279 375.992L175.998 461.844Z" })
  }
));
BluetoothLight.displayName = "BluetoothLight";
var Bluetooth_default = BluetoothLight;
