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
const BlindsOpenSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 464L0 512H512L496 464H16ZM64 208.25V192H16L0 240H39.125C44.625 227.5 53.125 216.5 64 208.25ZM175.625 320C160.625 340.125 137.125 352 112 352S63.375 340.125 48.375 320H16L0 368H512L496 320H175.625ZM160 192V208.25C170.875 216.5 179.375 227.5 184.875 240H512L496 192H160ZM512 48V16C512 7.125 504.875 0 496 0H16C7.125 0 0 7.125 0 16V48C0 56.875 7.125 64 16 64L0 112H64V64H96V227C73.999 234.75 60.75 257.25 64.75 280.25C68.625 303.375 88.625 320.25 112 320.25S155.375 303.375 159.25 280.25C163.25 257.25 149.999 234.75 128 227V64H160V112H512L496 64C504.875 64 512 56.875 512 48Z" })
  }
));
BlindsOpenSolid.displayName = "BlindsOpenSolid";
var BlindsOpen_default = BlindsOpenSolid;
