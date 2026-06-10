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
var BusSimple_exports = {};
__export(BusSimple_exports, {
  default: () => BusSimple_default
});
module.exports = __toCommonJS(BusSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 368C353.625 368 368 353.625 368 336S353.625 304 336 304S304 318.375 304 336S318.375 368 336 368ZM112 368C129.625 368 144 353.625 144 336S129.625 304 112 304S80 318.375 80 336S94.375 368 112 368ZM448 80C448 35.25 348.75 0 224 0S0 35.25 0 80V416C0 433.625 14.375 448 32 448V480C32 497.625 46.375 512 64 512S96 497.625 96 480V448H352V480C352 497.625 366.375 512 384 512S416 497.625 416 480V448C433.625 448 448 433.625 448 416V80ZM400 400H48V272H400V400ZM400 224H48V160H400V224ZM400 112H48V85.375C62.125 71.625 124.75 48 224 48S385.875 71.625 400 85.375V112Z" })
  }
));
BusSimpleRegular.displayName = "BusSimpleRegular";
var BusSimple_default = BusSimpleRegular;
