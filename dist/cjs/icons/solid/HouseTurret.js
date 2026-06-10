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
var HouseTurret_exports = {};
__export(HouseTurret_exports, {
  default: () => HouseTurret_default
});
module.exports = __toCommonJS(HouseTurret_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseTurretSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M251.613 219.014L352 127.752V16C352 7.162 344.836 0 336 0H272C263.164 0 256 7.162 256 16V96H224V16C224 7.162 216.836 0 208 0H144C135.164 0 128 7.162 128 16V96H96V16C96 7.162 88.836 0 80 0H16C7.164 0 0 7.162 0 16V197.49C0 214.463 6.742 230.742 18.746 242.744L64 288V480C64 497.672 78.326 512 96 512H234.098C227.811 501.807 224 489.922 224 477.09V281.438C224 257.723 234.064 234.971 251.613 219.014ZM212 224C212 232.836 204.836 240 196 240H156C147.164 240 140 232.836 140 224V196C140 176.117 156.117 160 176 160S212 176.117 212 196V224ZM622.883 242.717L471.477 105.078C458.162 92.973 437.828 92.973 424.514 105.078L273.139 242.691C262.223 252.617 256 266.686 256 281.438V477.09C256 496.371 271.629 512 290.908 512H605.084C624.361 512 639.99 496.4 639.992 477.121C639.996 424.539 640 328.963 640 281.281C639.998 266.551 633.783 252.627 622.883 242.717ZM496 368C496 376.875 488.875 384 480 384H416C407.125 384 400 376.875 400 368V304C400 295.125 407.125 288 416 288H480C488.875 288 496 295.125 496 304V368Z" })
  }
));
HouseTurretSolid.displayName = "HouseTurretSolid";
var HouseTurret_default = HouseTurretSolid;
