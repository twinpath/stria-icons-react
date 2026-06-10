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
var MoneyBillSimple_exports = {};
__export(MoneyBillSimple_exports, {
  default: () => MoneyBillSimple_default
});
module.exports = __toCommonJS(MoneyBillSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H64C28.654 64 0 92.652 0 128V384C0 419.346 28.654 448 64 448H512C547.348 448 576 419.346 576 384V128C576 92.652 547.348 64 512 64ZM544 384C544 401.645 529.645 416 512 416H64C46.355 416 32 401.645 32 384V128C32 110.355 46.355 96 64 96H512C529.645 96 544 110.355 544 128V384ZM288 144C235.062 144 192 194.25 192 256S235.062 368 288 368S384 317.75 384 256S340.938 144 288 144ZM288 336C252.703 336 224 300.109 224 256S252.703 176 288 176S352 211.891 352 256S323.297 336 288 336Z" })
  }
));
MoneyBillSimpleLight.displayName = "MoneyBillSimpleLight";
var MoneyBillSimple_default = MoneyBillSimpleLight;
