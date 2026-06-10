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
var ScreenUsers_exports = {};
__export(ScreenUsers_exports, {
  default: () => ScreenUsers_default
});
module.exports = __toCommonJS(ScreenUsers_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreenUsersLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M116 416H76C34.125 416 0 451.875 0 496C0 504.75 7.25 512 16 512S32 504.75 32 496C32 469.5 51.75 448 76 448H116C140.25 448 160 469.5 160 496C160 504.75 167.25 512 176 512S192 504.75 192 496C192 451.875 157.875 416 116 416ZM564 416H524C482.125 416 448 451.875 448 496C448 504.75 455.25 512 464 512S480 504.75 480 496C480 469.5 499.75 448 524 448H564C588.25 448 608 469.5 608 496C608 504.75 615.25 512 624 512S640 504.75 640 496C640 451.875 605.875 416 564 416ZM340 416H300C258.125 416 224 451.875 224 496C224 504.75 231.25 512 240 512S256 504.75 256 496C256 469.5 275.75 448 300 448H340C364.25 448 384 469.5 384 496C384 504.75 391.25 512 400 512S416 504.75 416 496C416 451.875 381.875 416 340 416ZM256 320C256 355.346 284.654 384 320 384S384 355.346 384 320S355.346 256 320 256S256 284.654 256 320ZM352 320C352 337.645 337.645 352 320 352S288 337.645 288 320S302.355 288 320 288S352 302.355 352 320ZM544 256C508.654 256 480 284.654 480 320S508.654 384 544 384S608 355.346 608 320S579.346 256 544 256ZM544 352C526.355 352 512 337.645 512 320S526.355 288 544 288S576 302.355 576 320S561.645 352 544 352ZM96 384C131.346 384 160 355.346 160 320S131.346 256 96 256S32 284.654 32 320S60.654 384 96 384ZM96 288C113.645 288 128 302.355 128 320S113.645 352 96 352S64 337.645 64 320S78.355 288 96 288ZM48 240C56.844 240 64 232.844 64 224V48C64 39.172 71.188 32 80 32H560C568.812 32 576 39.172 576 48V224C576 232.844 583.156 240 592 240S608 232.844 608 224V48C608 21.531 586.469 0 560 0H80C53.531 0 32 21.531 32 48V224C32 232.844 39.156 240 48 240Z" })
  }
));
ScreenUsersLight.displayName = "ScreenUsersLight";
var ScreenUsers_default = ScreenUsersLight;
