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
const PianoKeyboardSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 64H32C14.375 64 0 78.375 0 96V416C0 433.625 14.375 448 32 448H544C561.625 448 576 433.625 576 416V96C576 78.375 561.625 64 544 64ZM144 384H64V224H128V304C128 312.875 135.125 320 144 320V384ZM272 384H176V320C184.875 320 192 312.875 192 304V224H256V304C256 312.875 263.125 320 272 320V384ZM400 384H304V320C312.875 320 320 312.875 320 304V224H384V304C384 312.875 391.125 320 400 320V384ZM512 384H432V320C440.875 320 448 312.875 448 304V224H512V384Z" })
  }
));
PianoKeyboardSolid.displayName = "PianoKeyboardSolid";
var PianoKeyboard_default = PianoKeyboardSolid;
