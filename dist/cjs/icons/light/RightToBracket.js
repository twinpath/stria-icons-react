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
var RightToBracket_exports = {};
__export(RightToBracket_exports, {
  default: () => RightToBracket_default
});
module.exports = __toCommonJS(RightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightToBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 256C384 247.812 380.875 239.625 374.625 233.375L246.625 105.375C237.469 96.219 223.719 93.469 211.75 98.438C199.797 103.375 192 115.062 192 128V192H48C21.492 192 0 213.492 0 240V272C0 298.508 21.492 320 48 320H192V384C192 396.938 199.797 408.625 211.75 413.562C223.719 418.531 237.469 415.781 246.625 406.625L374.625 278.625C380.875 272.375 384 264.188 384 256ZM224 384V288H48C39.176 288 32 280.82 32 272V240C32 231.18 39.176 224 48 224H224V192L223.996 128L351.996 256L224 384ZM432 32H336C327.156 32 320 39.156 320 48S327.156 64 336 64H432C458.469 64 480 85.531 480 112V400C480 426.469 458.469 448 432 448H336C327.156 448 320 455.156 320 464S327.156 480 336 480H432C476.125 480 512 444.125 512 400V112C512 67.875 476.125 32 432 32Z" })
  }
));
RightToBracketLight.displayName = "RightToBracketLight";
var RightToBracket_default = RightToBracketLight;
