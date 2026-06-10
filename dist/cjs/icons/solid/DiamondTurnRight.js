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
var DiamondTurnRight_exports = {};
__export(DiamondTurnRight_exports, {
  default: () => DiamondTurnRight_default
});
module.exports = __toCommonJS(DiamondTurnRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiamondTurnRightSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M497.97 222.129L289.871 14.029C280.507 4.665 268.231 -0.011 255.959 -0.001C243.713 0.009 231.472 4.686 222.128 14.029L14.029 222.129C4.676 231.482 0 243.741 0 256C0 268.259 4.676 280.518 14.029 289.871L222.128 497.969C231.482 507.322 243.741 511.999 255.999 511.999C268.258 511.999 280.517 507.322 289.871 497.969L497.97 289.871C507.323 280.518 511.999 268.259 511.999 256C511.999 243.741 507.323 231.482 497.97 222.129ZM410.531 252.031L314.531 336.031C303.736 345.576 288 337.014 288 324V272H224V320C224 337.6 209.6 352 192 352H191.999C174.399 352 160 337.6 160 320V240C160 222.4 174.4 208 192 208H288V156C288 142.148 304.392 135.01 314.531 143.969L410.531 227.969C414.015 231 416 235.375 416 240S414.015 249 410.531 252.031Z" })
  }
));
DiamondTurnRightSolid.displayName = "DiamondTurnRightSolid";
var DiamondTurnRight_default = DiamondTurnRightSolid;
