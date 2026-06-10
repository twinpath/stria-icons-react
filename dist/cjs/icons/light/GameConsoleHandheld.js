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
var GameConsoleHandheld_exports = {};
__export(GameConsoleHandheld_exports, {
  default: () => GameConsoleHandheld_default
});
module.exports = __toCommonJS(GameConsoleHandheld_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GameConsoleHandheldLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M232 384C245.25 384 256 373.25 256 360S245.25 336 232 336S208 346.75 208 360S218.75 384 232 384ZM296 336C309.25 336 320 325.25 320 312S309.25 288 296 288S272 298.75 272 312S282.75 336 296 336ZM320 0H64C28.801 0 0 28.799 0 64V448C0 483.199 28.801 512 64 512H256C326.693 512 384 454.691 384 384V64C384 28.799 355.199 0 320 0ZM352 384C352 437.02 309.02 480 256 480H64C46.326 480 32 465.672 32 448V224H352V384ZM352 192H32V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V192ZM80 352H96V368C96 376.799 103.199 384 112 384S128 376.799 128 368V352H144C152.801 352 160 344.799 160 336C160 327.199 152.801 320 144 320H128V304C128 295.199 120.801 288 112 288S96 295.199 96 304V320H80C71.199 320 64 327.199 64 336C64 344.799 71.199 352 80 352Z" })
  }
));
GameConsoleHandheldLight.displayName = "GameConsoleHandheldLight";
var GameConsoleHandheld_default = GameConsoleHandheldLight;
