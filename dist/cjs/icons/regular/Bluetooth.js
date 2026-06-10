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
const BluetoothRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M196.969 256.008L311.563 158.258C316.906 153.695 320 147.039 320 140.008S316.906 126.324 311.563 121.762L175.563 5.766C168.471 -0.328 158.44 -1.734 149.94 2.234C141.44 6.141 136.002 14.641 136.002 24.016V204.008L39.565 121.762C29.565 113.168 14.408 114.355 5.752 124.449C-2.873 134.508 -1.654 149.664 8.44 158.258L123.033 256.008L8.44 353.754C-1.654 362.348 -2.873 377.504 5.752 387.566C14.377 397.656 29.533 398.875 39.565 390.254L136.002 308.008V488C136.002 497.375 141.44 505.875 149.94 509.781C153.158 511.281 156.596 512 160.002 512C165.596 512 171.156 510.031 175.563 506.25L311.563 390.254C316.906 385.691 320 379.035 320 372.004S316.906 358.316 311.563 353.754L196.969 256.008ZM184 76.012L259.031 140.008L184 204.008V76.012ZM184 436V308.008L259.031 372.004L184 436Z" })
  }
));
BluetoothRegular.displayName = "BluetoothRegular";
var Bluetooth_default = BluetoothRegular;
