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
const BluetoothThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M172.656 256.004L317.063 138.195C318.906 136.695 320 134.414 320 132.008S318.906 127.32 317.063 125.82L165.063 1.82C162.656 -0.117 159.375 -0.586 156.563 0.789C153.781 2.102 152 4.914 152 8.008V239.16L13.061 125.82C9.592 123.008 4.592 123.508 1.811 126.945C-1.002 130.383 -0.471 135.414 2.936 138.195L147.344 256.004L2.936 373.813C-0.471 376.594 -1.002 381.625 1.811 385.063C4.592 388.469 9.592 389 13.061 386.188L152 272.848V504C152 507.094 153.781 509.906 156.563 511.219C157.656 511.75 158.844 512 160 512C161.813 512 163.594 511.375 165.063 510.188L317.063 386.188C318.906 384.688 320 382.406 320 380S318.906 375.312 317.063 373.812L172.656 256.004ZM168 24.852L299.344 132.008L168 239.16V24.852ZM168 487.156V272.848L299.344 380L168 487.156Z" })
  }
));
BluetoothThin.displayName = "BluetoothThin";
var Bluetooth_default = BluetoothThin;
