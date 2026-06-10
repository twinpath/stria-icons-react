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
var Hotel_exports = {};
__export(Hotel_exports, {
  default: () => Hotel_default
});
module.exports = __toCommonJS(Hotel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HotelLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 480H480V32H496C504.836 32 512 24.836 512 16C512 7.162 504.836 0 496 0H16C7.164 0 0 7.162 0 16C0 24.836 7.164 32 16 32H32V480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H224C232.844 512 240 504.844 240 496V416H272V496C272 504.844 279.156 512 288 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM448 480H304V416C304 398.359 289.641 384 272 384H240C222.359 384 208 398.359 208 416V480H64V32H448V480ZM320 160H352C369.674 160 384 145.672 384 128V96C384 78.326 369.674 64 352 64H320C302.326 64 288 78.326 288 96V128C288 145.672 302.326 160 320 160ZM320 96H352V128H320V96ZM160 288H192C209.674 288 224 273.672 224 256V224C224 206.326 209.674 192 192 192H160C142.326 192 128 206.326 128 224V256C128 273.672 142.326 288 160 288ZM160 224H192V256H160V224ZM320 288H352C369.674 288 384 273.672 384 256V224C384 206.326 369.674 192 352 192H320C302.326 192 288 206.326 288 224V256C288 273.672 302.326 288 320 288ZM320 224H352V256H320V224ZM160 160H192C209.674 160 224 145.672 224 128V96C224 78.326 209.674 64 192 64H160C142.326 64 128 78.326 128 96V128C128 145.672 142.326 160 160 160ZM160 96H192V128H160V96ZM162.016 376.219C157.719 383.937 160.5 393.687 168.219 397.969C175.984 402.312 185.672 399.469 189.984 391.781C203.641 367.25 228.938 352 256 352S308.359 367.25 322.016 391.781C324.953 397.031 330.391 400 336.016 400C338.641 400 341.312 399.344 343.781 397.969C351.5 393.687 354.281 383.937 349.984 376.219C330.672 341.531 294.672 320 256 320S181.328 341.531 162.016 376.219Z" })
  }
));
HotelLight.displayName = "HotelLight";
var Hotel_default = HotelLight;
