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
const HouseTurretDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0.029H272C263.164 0.029 256 7.191 256 16.029V96.029H224V16.029C224 7.191 216.836 0.029 208 0.029H144C135.164 0.029 128 7.191 128 16.029V96.029H96V16.029C96 7.191 88.836 0.029 80 0.029H16C7.164 0.029 0 7.191 0 16.029V197.52C0 214.492 6.742 230.771 18.746 242.773L64 288.029V480.029C64 497.701 78.326 512.029 96 512.029H234.098C227.811 501.836 224 489.951 224 477.119V281.467C224 257.752 234.064 235 251.613 219.043L352 127.781V16.029C352 7.191 344.836 0.029 336 0.029ZM212 224.029C212 232.865 204.836 240.029 196 240.029H156C147.164 240.029 140 232.865 140 224.029V196.029C140 176.146 156.117 160.029 176 160.029S212 176.146 212 196.029V224.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M622.883 242.746L471.477 105.107C458.162 93.002 437.828 93.002 424.514 105.107L273.139 242.72C262.223 252.646 256 266.715 256 281.467V477.119C256 496.4 271.629 512.029 290.908 512.029H605.084C624.361 512.029 639.99 496.429 639.992 477.15C639.996 424.568 640 328.992 640 281.31C639.998 266.58 633.783 252.656 622.883 242.746ZM496 368.029C496 376.904 488.875 384.029 480 384.029H416C407.125 384.029 400 376.904 400 368.029V304.029C400 295.154 407.125 288.029 416 288.029H480C488.875 288.029 496 295.154 496 304.029V368.029Z" })
    ]
  }
));
HouseTurretDuotone.displayName = "HouseTurretDuotone";
var HouseTurret_default = HouseTurretDuotone;
