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
var Grip_exports = {};
__export(Grip_exports, {
  default: () => Grip_default
});
module.exports = __toCommonJS(Grip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GripThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 192V128C448 110.326 433.672 96 416 96H352C334.328 96 320 110.326 320 128V192C320 209.674 334.328 224 352 224H416C433.672 224 448 209.674 448 192ZM352 208C343.176 208 336 200.822 336 192V128C336 119.178 343.176 112 352 112H416C424.824 112 432 119.178 432 128V192C432 200.822 424.824 208 416 208H352ZM448 384V320C448 302.326 433.672 288 416 288H352C334.328 288 320 302.326 320 320V384C320 401.674 334.328 416 352 416H416C433.672 416 448 401.674 448 384ZM352 400C343.176 400 336 392.822 336 384V320C336 311.178 343.176 304 352 304H416C424.824 304 432 311.178 432 320V384C432 392.822 424.824 400 416 400H352ZM288 384V320C288 302.326 273.672 288 256 288H192C174.328 288 160 302.326 160 320V384C160 401.674 174.328 416 192 416H256C273.672 416 288 401.674 288 384ZM192 400C183.176 400 176 392.822 176 384V320C176 311.178 183.176 304 192 304H256C264.824 304 272 311.178 272 320V384C272 392.822 264.824 400 256 400H192ZM288 192V128C288 110.326 273.672 96 256 96H192C174.328 96 160 110.326 160 128V192C160 209.674 174.328 224 192 224H256C273.672 224 288 209.674 288 192ZM192 208C183.176 208 176 200.822 176 192V128C176 119.178 183.176 112 192 112H256C264.824 112 272 119.178 272 128V192C272 200.822 264.824 208 256 208H192ZM128 384V320C128 302.326 113.672 288 96 288H32C14.328 288 0 302.326 0 320V384C0 401.674 14.328 416 32 416H96C113.672 416 128 401.674 128 384ZM32 400C23.176 400 16 392.822 16 384V320C16 311.178 23.176 304 32 304H96C104.824 304 112 311.178 112 320V384C112 392.822 104.824 400 96 400H32ZM128 192V128C128 110.326 113.672 96 96 96H32C14.328 96 0 110.326 0 128V192C0 209.674 14.328 224 32 224H96C113.672 224 128 209.674 128 192ZM32 208C23.176 208 16 200.822 16 192V128C16 119.178 23.176 112 32 112H96C104.824 112 112 119.178 112 128V192C112 200.822 104.824 208 96 208H32Z" })
  }
));
GripThin.displayName = "GripThin";
var Grip_default = GripThin;
