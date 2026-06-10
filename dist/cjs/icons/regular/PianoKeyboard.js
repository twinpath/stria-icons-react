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
const PianoKeyboardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H64C28.8 64 0 92.8 0 128V384C0 419.2 28.8 448 64 448H512C547.2 448 576 419.2 576 384V128C576 92.8 547.2 64 512 64ZM144 400H64C55.163 400 48 392.837 48 384V224H128V304C128 312.875 135.125 320 144 320V400ZM272 400H176V320C184.875 320 192 312.875 192 304V224H256V304C256 312.875 263.125 320 272 320V400ZM400 400H304V320C312.875 320 320 312.875 320 304V224H384V304C384 312.875 391.125 320 400 320V400ZM512 400H432V320C440.875 320 448 312.875 448 304V224H528V384C528 392.837 520.837 400 512 400ZM528 176H48V128C48 119.163 55.163 112 64 112H512C520.837 112 528 119.163 528 128V176Z" })
  }
));
PianoKeyboardRegular.displayName = "PianoKeyboardRegular";
var PianoKeyboard_default = PianoKeyboardRegular;
