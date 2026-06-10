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
const BluetoothSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.594 255.994L309.063 168.086C316.031 161.992 320 153.211 320 143.992S316.031 125.991 309.063 119.897L181.063 7.895C171.657 -0.355 158.188 -2.324 146.782 2.863C135.345 8.051 128.001 19.426 128.001 31.989V185.461L53.064 119.897C39.783 108.272 19.564 109.553 7.908 122.929C-3.717 136.21 -2.373 156.429 10.939 168.086L111.407 255.994L10.939 343.902C-2.373 355.559 -3.717 375.778 7.908 389.06C19.564 402.404 39.783 403.685 53.064 392.091L128.001 326.527V479.999C128.001 492.562 135.345 503.937 146.782 509.125C151.001 511.062 155.532 512 160.001 512C167.594 512 175.126 509.281 181.063 504.094L309.063 392.091C316.031 385.997 320 377.216 320 367.997S316.031 349.996 309.063 343.902L208.594 255.994ZM192.001 102.522L239.407 143.992L192.001 185.461V102.522ZM192.001 409.466V326.527L239.407 367.997L192.001 409.466Z" })
  }
));
BluetoothSolid.displayName = "BluetoothSolid";
var Bluetooth_default = BluetoothSolid;
