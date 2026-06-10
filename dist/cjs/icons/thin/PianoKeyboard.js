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
const PianoKeyboardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 64H64C28.801 64 0 92.801 0 128V384C0 419.199 28.801 448 64 448H512C547.201 448 576 419.199 576 384V128C576 92.801 547.201 64 512 64ZM16 128C16 101.533 37.533 80 64 80H512C538.467 80 560 101.533 560 128V208H16V128ZM136 224H184V312C184 316.406 180.406 320 176 320H144C139.594 320 136 316.406 136 312V224ZM176 336C189.219 336 200 325.234 200 312V224H248V312C248 325.234 258.781 336 272 336H280V432H168V336H176ZM272 320C267.594 320 264 316.406 264 312V224H312V312C312 316.406 308.406 320 304 320H272ZM296 336H304C317.219 336 328 325.234 328 312V224H376V312C376 325.234 386.781 336 400 336H408V432H296V336ZM400 320C395.594 320 392 316.406 392 312V224H440V312C440 316.406 436.406 320 432 320H400ZM16 384V224H120V312C120 325.234 130.781 336 144 336H152V432H64C37.533 432 16 410.467 16 384ZM560 384C560 410.467 538.467 432 512 432H424V336H432C445.219 336 456 325.234 456 312V224H560V384Z" })
  }
));
PianoKeyboardThin.displayName = "PianoKeyboardThin";
var PianoKeyboard_default = PianoKeyboardThin;
