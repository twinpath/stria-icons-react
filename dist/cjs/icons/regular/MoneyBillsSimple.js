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
var MoneyBillsSimple_exports = {};
__export(MoneyBillsSimple_exports, {
  default: () => MoneyBillsSimple_default
});
module.exports = __toCommonJS(MoneyBillsSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillsSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80.002 432H544.014C544.014 458.508 522.523 480 496.012 480H64.002C28.654 480 0 451.344 0 416V144C0 117.492 21.49 96 48.002 96V400C48.002 417.672 62.328 432 80.002 432ZM640 96V320C640 355.346 611.348 384 576 384H160.002C124.656 384 96.002 355.346 96.002 320V96C96.002 60.652 124.656 32 160.002 32H576C611.348 32 640 60.652 640 96ZM592 96C592 87.178 584.822 80 576 80H160.002C151.18 80 144.002 87.178 144.002 96V320C144.002 328.822 151.18 336 160.002 336H576C584.822 336 592 328.822 592 320V96ZM367.994 112C323.809 112 287.992 154.98 287.992 208S323.809 304 367.994 304C412.178 304 447.996 261.02 447.996 208S412.178 112 367.994 112Z" })
  }
));
MoneyBillsSimpleRegular.displayName = "MoneyBillsSimpleRegular";
var MoneyBillsSimple_default = MoneyBillsSimpleRegular;
