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
var SendBack_exports = {};
__export(SendBack_exports, {
  default: () => SendBack_default
});
module.exports = __toCommonJS(SendBack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SendBackLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 80C192 71.125 184.875 64 176 64H80C71.125 64 64 71.125 64 80V176C64 184.875 71.125 192 80 192H176C184.875 192 192 184.875 192 176V80ZM160 160H96V96H160V160ZM448 144V208C448 216.837 455.163 224 464 224H464C472.837 224 480 216.837 480 208V144C480 117.49 458.51 96 432 96H304C295.163 96 288 103.163 288 112V112C288 120.837 295.163 128 304 128H432C440.837 128 448 135.163 448 144ZM256 192V64C256 28.652 227.346 0 192 0H48C21.49 0 0 21.49 0 48V192C0 227.346 28.654 256 64 256H192C227.346 256 256 227.346 256 192ZM32 192V64C32 46.326 46.326 32 64 32H192C209.674 32 224 46.326 224 64V192C224 209.672 209.674 224 192 224H64C46.326 224 32 209.672 32 192ZM576 256H448C412.654 256 384 284.652 384 320V448C384 483.346 412.654 512 448 512H576C611.346 512 640 483.346 640 448V320C640 284.652 611.346 256 576 256ZM608 448C608 465.672 593.674 480 576 480H448C430.326 480 416 465.672 416 448V320C416 302.326 430.326 288 448 288H576C593.674 288 608 302.326 608 320V448ZM560 320H464C455.125 320 448 327.125 448 336V432C448 440.875 455.125 448 464 448H560C568.875 448 576 440.875 576 432V336C576 327.125 568.875 320 560 320ZM544 416H480V352H544V416ZM192 368V304C192 295.163 184.837 288 176 288H176C167.163 288 160 295.163 160 304V368C160 394.51 181.49 416 208 416H336C344.837 416 352 408.837 352 400V400C352 391.163 344.837 384 336 384H208C199.163 384 192 376.837 192 368Z" })
  }
));
SendBackLight.displayName = "SendBackLight";
var SendBack_default = SendBackLight;
