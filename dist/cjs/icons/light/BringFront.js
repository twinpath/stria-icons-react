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
var BringFront_exports = {};
__export(BringFront_exports, {
  default: () => BringFront_default
});
module.exports = __toCommonJS(BringFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BringFrontLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 224H64C46.326 224 32 209.674 32 192V64C32 46.326 46.326 32 64 32H192C205.848 32 217.641 40.795 222.098 53.105C224.537 59.844 231.355 64 238.521 64H238.523C248.74 64 256.051 54.012 252.906 44.289C244.596 18.588 220.469 0 192 0H64C28.654 0 0 28.654 0 64V192C0 227.346 28.654 256 64 256H112C120.836 256 128 248.836 128 240S120.836 224 112 224ZM480 352V160C480 124.654 451.346 96 416 96H224C188.654 96 160 124.654 160 160V352C160 387.346 188.654 416 224 416H416C451.346 416 480 387.346 480 352ZM192 352V160C192 142.326 206.326 128 224 128H416C433.674 128 448 142.326 448 160V352C448 369.674 433.674 384 416 384H224C206.326 384 192 369.674 192 352ZM160 79.057C160 70.742 153.258 64 144.943 64H80C71.164 64 64 71.164 64 80V176C64 184.836 71.164 192 80 192H112.943C121.258 192 128 185.258 128 176.943V175.057C128 166.742 121.258 160 112.943 160H96V96H144.943C153.258 96 160 89.258 160 80.943V79.057ZM576 256H528C519.164 256 512 263.164 512 272S519.164 288 528 288H576C593.674 288 608 302.326 608 320V448C608 465.674 593.674 480 576 480H448C434.152 480 422.359 471.205 417.902 458.895C415.463 452.156 408.645 448 401.479 448H401.477C391.26 448 383.949 457.988 387.094 467.711C395.404 493.412 419.531 512 448 512H576C611.346 512 640 483.346 640 448V320C640 284.654 611.346 256 576 256ZM480 432.943C480 441.258 486.742 448 495.057 448H560C568.836 448 576 440.836 576 432V336C576 327.164 568.836 320 560 320H527.057C518.742 320 512 326.742 512 335.057V336.943C512 345.258 518.742 352 527.057 352H544V416H495.057C486.742 416 480 422.742 480 431.057V432.943Z" })
  }
));
BringFrontLight.displayName = "BringFrontLight";
var BringFront_default = BringFrontLight;
