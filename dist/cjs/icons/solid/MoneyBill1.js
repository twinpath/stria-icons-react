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
const MoneyBill1Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M323.555 288H312V188.445C312 181.641 306.359 176 299.555 176H264C259.336 176 255.906 178.723 253.77 182.805L241.328 205.918C239.383 209.805 239.578 214.473 241.906 218.168C244.047 221.668 248.133 224 252.406 224H264V288H252.445C245.641 288 240 293.641 240 300.445V323.555C240 330.359 245.641 336 252.445 336H323.555C330.359 336 336 330.359 336 323.555V300.445C336 293.641 330.359 288 323.555 288ZM528 64H48C21.492 64 0 85.492 0 112V400C0 426.508 21.492 448 48 448H528C554.512 448 576 426.508 576 400V112C576 85.492 554.512 64 528 64ZM48 400V336C83.375 336 112 364.625 112 400H48ZM48 176V112H112C112 147.375 83.375 176 48 176ZM288 384C229.088 384 181.334 326.689 181.334 256C181.334 185.307 229.088 128 288 128S394.666 185.307 394.666 256C394.666 326.689 346.912 384 288 384ZM528 400H464C464 364.625 492.625 336 528 336V400ZM528 176C492.625 176 464 147.375 464 112H528V176Z" })
  }
));
MoneyBill1Solid.displayName = "MoneyBill1Solid";
var MoneyBill1_default = MoneyBill1Solid;
