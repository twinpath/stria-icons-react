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
var PianoKeyboard_exports = {};
__export(PianoKeyboard_exports, {
  default: () => PianoKeyboard_default
});
module.exports = __toCommonJS(PianoKeyboard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PianoKeyboardLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H64C28.801 64 0 92.799 0 128V384C0 419.199 28.801 448 64 448H512C547.199 448 576 419.199 576 384V128C576 92.799 547.199 64 512 64ZM128 416H64C46.326 416 32 401.672 32 384V224H96V320C96 328.875 103.125 336 112 336H128V416ZM272 416H160V336H176C184.875 336 192 328.875 192 320V224H240V320C240 328.875 247.125 336 256 336H272V416ZM128 304V224H160V304H128ZM416 416H304V336H320C328.875 336 336 328.875 336 320V224H384V320C384 328.875 391.125 336 400 336H416V416ZM272 304V224H304V304H272ZM544 384C544 401.672 529.674 416 512 416H448V336H464C472.875 336 480 328.875 480 320V224H544V384ZM416 304V224H448V304H416ZM544 192H32V128C32 110.326 46.326 96 64 96H512C529.674 96 544 110.326 544 128V192Z" })
  }
));
PianoKeyboardLight.displayName = "PianoKeyboardLight";
var PianoKeyboard_default = PianoKeyboardLight;
