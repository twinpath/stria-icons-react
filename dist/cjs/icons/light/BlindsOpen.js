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
var BlindsOpen_exports = {};
__export(BlindsOpen_exports, {
  default: () => BlindsOpen_default
});
module.exports = __toCommonJS(BlindsOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsOpenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 480H16C7.125 480 0 487.125 0 496S7.125 512 16 512H496C504.875 512 512 504.875 512 496S504.875 480 496 480ZM16 352H80.375C73.125 342.625 68.125 331.625 65.625 320H16C7.125 320 0 327.125 0 336S7.125 352 16 352ZM496 320H222.375C219.875 331.625 214.875 342.625 207.625 352H496C504.875 352 512 344.875 512 336S504.875 320 496 320ZM496 0H16C7.125 0 0 7.125 0 16V80C0 88.875 7.125 96 16 96H128V160H16C7.125 160 0 167.125 0 176S7.125 192 16 192H128V259C106 266.75 92.75 289.25 96.75 312.25C100.625 335.375 120.625 352.25 144 352.25S187.375 335.375 191.25 312.25C195.25 289.25 182 266.75 160 259V96H496C504.875 96 512 88.875 512 80V16C512 7.125 504.875 0 496 0ZM144 320C135.125 320 128 312.875 128 304S135.125 288 144 288S160 295.125 160 304S152.875 320 144 320ZM480 64H32V32H480V64ZM496 160H192V192H496C504.875 192 512 184.875 512 176S504.875 160 496 160Z" })
  }
));
BlindsOpenLight.displayName = "BlindsOpenLight";
var BlindsOpen_default = BlindsOpenLight;
