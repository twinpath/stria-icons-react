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
var MoneyBills_exports = {};
__export(MoneyBills_exports, {
  default: () => MoneyBills_default
});
module.exports = __toCommonJS(MoneyBills_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBillsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 80H208C208 115.375 179.375 144 144 144V272C179.375 272 208 300.625 208 336H528C528 300.625 556.625 272 592 272V144C556.625 144 528 115.375 528 80ZM367.984 304C323.801 304 287.984 261.018 287.984 208C287.984 154.98 323.801 112 367.984 112S447.984 154.98 447.984 208C447.984 261.018 412.168 304 367.984 304ZM48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H496C522.51 480 544 458.508 544 432H80C62.326 432 48 417.672 48 400Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M592 32H144C117.492 32 96 53.492 96 80V336C96 362.508 117.492 384 144 384H592C618.512 384 640 362.508 640 336V80C640 53.492 618.512 32 592 32ZM592 272C556.625 272 528 300.625 528 336H208C208 300.625 179.375 272 144 272V144C179.375 144 208 115.375 208 80H528C528 115.375 556.625 144 592 144V272Z" })
    ]
  }
));
MoneyBillsDuotone.displayName = "MoneyBillsDuotone";
var MoneyBills_default = MoneyBillsDuotone;
