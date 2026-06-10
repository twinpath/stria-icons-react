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
var SquareSliders_exports = {};
__export(SquareSliders_exports, {
  default: () => SquareSliders_default
});
module.exports = __toCommonJS(SquareSliders_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96ZM384 64C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384ZM320 336C320 344.844 327.156 352 336 352H368C376.844 352 384 344.844 384 336S376.844 320 368 320H336C327.156 320 320 327.156 320 336ZM256 288V320H80C71.156 320 64 327.156 64 336S71.156 352 80 352H256V384C256 392.844 263.156 400 272 400S288 392.844 288 384V288C288 279.156 280.844 272 272 272S256 279.156 256 288ZM192 176C192 184.844 199.156 192 208 192H368C376.844 192 384 184.844 384 176S376.844 160 368 160H208C199.156 160 192 167.156 192 176ZM128 128V160H80C71.156 160 64 167.156 64 176S71.156 192 80 192H128V224C128 232.844 135.156 240 144 240S160 232.844 160 224V128C160 119.156 152.844 112 144 112S128 119.156 128 128Z" })
  }
));
SquareSlidersLight.displayName = "SquareSlidersLight";
var SquareSliders_default = SquareSlidersLight;
