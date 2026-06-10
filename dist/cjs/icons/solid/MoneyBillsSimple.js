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
const MoneyBillsSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.001 400V96C21.491 96 0 117.492 0 144V416C0 451.344 28.655 480 64.002 480H496.012C522.523 480 544.013 458.508 544.013 432H80.002C62.328 432 48.001 417.672 48.001 400ZM591.999 32H144.004C117.495 32 96.002 53.492 96.002 80V336C96.002 362.508 117.495 384 144.004 384H591.999C618.511 384 640 362.508 640 336V80C640 53.492 618.511 32 591.999 32ZM367.993 304C323.809 304 287.991 261.02 287.991 208S323.809 112 367.993 112S447.995 154.98 447.995 208S412.178 304 367.993 304Z" })
  }
));
MoneyBillsSimpleSolid.displayName = "MoneyBillsSimpleSolid";
var MoneyBillsSimple_default = MoneyBillsSimpleSolid;
