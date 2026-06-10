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
var House_exports = {};
__export(House_exports, {
  default: () => House_default
});
module.exports = __toCommonJS(House_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.996 216V296C223.996 309.219 234.762 320 247.996 320H327.996C341.23 320 351.996 309.219 351.996 296V216C351.996 202.781 341.23 192 327.996 192H247.996C234.762 192 223.996 202.781 223.996 216ZM335.996 216V296C335.996 300.406 332.402 304 327.996 304H247.996C243.59 304 239.996 300.406 239.996 296V216C239.996 211.594 243.59 208 247.996 208H327.996C332.402 208 335.996 211.594 335.996 216ZM575.996 255.987C575.996 253.785 575.091 251.592 573.311 250.014L512.001 195.709V47.998C512.001 39.162 504.837 31.998 496.001 31.998H399.999C391.163 31.998 383.999 39.162 383.999 47.998V82.338L293.31 2.014C291.794 0.671 289.896 0 287.998 0S284.202 0.671 282.685 2.014L2.685 250.014C0.905 251.592 0 253.785 0 255.987C0 260.309 3.479 263.985 7.968 263.985C9.865 263.985 11.773 263.317 13.31 261.982L63.997 217.814V447.998C63.997 483.344 92.651 511.998 127.997 511.998H447.999C483.344 511.998 511.999 483.344 511.999 447.998V217.814L562.686 261.982C564.217 263.326 566.092 263.998 567.998 263.998C572.457 263.998 575.996 260.359 575.996 255.987ZM495.999 447.998C495.999 474.508 474.509 495.998 447.999 495.998H127.997C101.487 495.998 79.997 474.508 79.997 447.998V203.592L287.998 18.701L495.999 203.592V447.998ZM496.001 181.537L399.999 96.51V47.998H496.001V181.537Z " })
  }
));
HouseThin.displayName = "HouseThin";
var House_default = HouseThin;
