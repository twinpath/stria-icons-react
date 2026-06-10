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
const MoneyBillsSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.993 304C412.178 304 447.995 261.02 447.995 208S412.178 112 367.993 112S287.991 154.98 287.991 208S323.809 304 367.993 304ZM80.002 432C62.328 432 48.001 417.672 48.001 400V96C21.491 96 0 117.492 0 144V416C0 451.344 28.655 480 64.002 480H496.012C522.523 480 544.013 458.508 544.013 432H80.002Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M591.996 32H144.001C117.493 32 96 53.492 96 80V336C96 362.508 117.493 384 144.001 384H591.996C618.509 384 639.998 362.508 639.998 336V80C639.998 53.492 618.509 32 591.996 32ZM367.991 304C323.806 304 287.989 261.02 287.989 208S323.806 112 367.991 112S447.993 154.98 447.993 208S412.176 304 367.991 304Z" })
    ]
  }
));
MoneyBillsSimpleDuotone.displayName = "MoneyBillsSimpleDuotone";
var MoneyBillsSimple_default = MoneyBillsSimpleDuotone;
