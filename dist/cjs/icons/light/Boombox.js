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
var Boombox_exports = {};
__export(Boombox_exports, {
  default: () => Boombox_default
});
module.exports = __toCommonJS(Boombox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoomboxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 160V80C576 35.891 540.125 0 496 0H144C99.875 0 64 35.891 64 80V160C28.654 160 0 188.654 0 224V448C0 483.346 28.654 512 64 512H576C611.346 512 640 483.346 640 448V224C640 188.654 611.346 160 576 160ZM96 80C96 53.531 117.531 32 144 32H496C522.469 32 544 53.531 544 80V160H96V80ZM608 448C608 465.645 593.645 480 576 480H64C46.355 480 32 465.645 32 448V224C32 206.355 46.355 192 64 192H576C593.645 192 608 206.355 608 224V448ZM176 224C114.145 224 64 274.145 64 336S114.145 448 176 448S288 397.855 288 336S237.855 224 176 224ZM176 416C131.889 416 96 380.111 96 336S131.889 256 176 256S256 291.889 256 336S220.111 416 176 416ZM464 224C402.145 224 352 274.145 352 336S402.145 448 464 448S576 397.855 576 336S525.855 224 464 224ZM464 416C419.889 416 384 380.111 384 336S419.889 256 464 256S544 291.889 544 336S508.111 416 464 416ZM240 96H208C199.164 96 192 103.164 192 112S199.164 128 208 128H240C248.836 128 256 120.836 256 112S248.836 96 240 96ZM432 96H400C391.164 96 384 103.164 384 112S391.164 128 400 128H432C440.836 128 448 120.836 448 112S440.836 96 432 96ZM336 96H304C295.164 96 288 103.164 288 112S295.164 128 304 128H336C344.836 128 352 120.836 352 112S344.836 96 336 96Z" })
  }
));
BoomboxLight.displayName = "BoomboxLight";
var Boombox_default = BoomboxLight;
