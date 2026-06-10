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
var PaintRoller_exports = {};
__export(PaintRoller_exports, {
  default: () => PaintRoller_default
});
module.exports = __toCommonJS(PaintRoller_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PaintRollerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M456 72H448V120H456C460.375 120 464 123.625 464 128V184C464 210.4 442.4 232 416 232H256C225.072 232 200 257.072 200 288V320H192C174.375 320 160 334.375 160 352V480C160 497.6 174.4 512 192 512H256C273.6 512 288 497.6 288 480V352C288 334.375 273.625 320 256 320H248V288C248 283.625 251.625 280 256 280H416C469.02 280 512 237.02 512 184V128C512 97.072 486.928 72 456 72ZM416 144V48C416 21.5 394.5 0 368 0H48C21.5 0 0 21.5 0 48V144C0 170.5 21.5 192 48 192H368C394.5 192 416 170.5 416 144ZM48 48H368V144H48V48Z" })
  }
));
PaintRollerRegular.displayName = "PaintRollerRegular";
var PaintRoller_default = PaintRollerRegular;
