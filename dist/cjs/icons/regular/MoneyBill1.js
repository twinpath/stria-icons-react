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
var MoneyBill1_exports = {};
__export(MoneyBill1_exports, {
  default: () => MoneyBill1_default
});
module.exports = __toCommonJS(MoneyBill1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MoneyBill1Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 300.445V323.555C336 330.359 330.359 336 323.555 336H252.445C245.641 336 240 330.359 240 323.555V300.445C240 293.641 245.641 288 252.445 288H264V224H252.406C248.133 224 244.047 221.668 241.906 218.168C239.578 214.473 239.383 209.805 241.328 205.918L253.77 182.805C255.906 178.723 259.336 176 264 176H299.555C306.359 176 312 181.641 312 188.445V288H323.555C330.359 288 336 293.641 336 300.445ZM576 128V384C576 419.346 547.348 448 512 448H64C28.654 448 0 419.346 0 384V128C0 92.652 28.654 64 64 64H512C547.348 64 576 92.652 576 128ZM528 176C492.625 176 464 147.375 464 112H112C112 147.375 83.375 176 48 176V336C83.375 336 112 364.625 112 400H464C464 364.625 492.625 336 528 336V176Z" })
  }
));
MoneyBill1Regular.displayName = "MoneyBill1Regular";
var MoneyBill1_default = MoneyBill1Regular;
