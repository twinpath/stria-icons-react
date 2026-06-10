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
var ChartUser_exports = {};
__export(ChartUser_exports, {
  default: () => ChartUser_default
});
module.exports = __toCommonJS(ChartUser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartUserLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 320C213.02 320 256 277.018 256 224C256 170.98 213.02 128 160 128C106.982 128 64 170.98 64 224C64 277.018 106.982 320 160 320ZM160 160C195.289 160 224 188.711 224 224S195.289 288 160 288S96 259.289 96 224S124.711 160 160 160ZM592 0H208C181.531 0 160 21.531 160 48V80C160 88.844 167.156 96 176 96S192 88.844 192 80V48C192 39.188 199.172 32 208 32H592C600.828 32 608 39.188 608 48V368C608 376.812 600.828 384 592 384H352C343.156 384 336 391.156 336 400S343.156 416 352 416H592C618.469 416 640 394.469 640 368V48C640 21.531 618.469 0 592 0ZM192 352H128C57.307 352 0 409.307 0 480C0 497.672 14.326 512 32 512H288C305.674 512 320 497.672 320 480C320 409.307 262.693 352 192 352ZM32 480C32 427.064 75.066 384 128 384H192C244.936 384 288 427.064 288 480H32ZM315.312 164.688C309.062 158.438 298.937 158.438 292.688 164.688S286.438 181.063 292.688 187.312L372.688 267.312C375.812 270.438 379.906 272 384 272S392.188 270.438 395.312 267.312L496 166.625V224C496 232.844 503.156 240 512 240S528 232.844 528 224V128C528 119.156 520.844 112 512 112H416C407.156 112 400 119.156 400 128S407.156 144 416 144H473.375L384 233.375L315.312 164.688Z" })
  }
));
ChartUserLight.displayName = "ChartUserLight";
var ChartUser_default = ChartUserLight;
