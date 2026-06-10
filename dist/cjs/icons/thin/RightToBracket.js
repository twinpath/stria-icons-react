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
const RightToBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 32H392C387.578 32 384 35.578 384 40S387.578 48 392 48H472C485.234 48 496 58.766 496 72V440C496 453.234 485.234 464 472 464H392C387.578 464 384 467.578 384 472S387.578 480 392 480H472C494.062 480 512 462.062 512 440V72C512 49.938 494.062 32 472 32ZM374.625 233.375L246.625 105.375C237.469 96.219 223.719 93.469 211.75 98.438C199.797 103.375 192 115.062 192 128V192H32C14.326 192 0 206.326 0 224V288C0 305.672 14.326 320 32 320H192V384C192 396.938 199.797 408.625 211.75 413.562C223.719 418.531 237.469 415.781 246.625 406.625L374.625 278.625C380.875 272.375 384 264.188 384 256S380.875 239.625 374.625 233.375ZM363.311 267.311L235.311 395.311C230.715 399.908 223.873 401.271 217.857 398.773C211.869 396.301 208 390.502 208 384V304H32C23.178 304 16 296.822 16 288V224C16 215.178 23.178 208 32 208H208V128C208 121.498 211.869 115.699 217.885 113.215C223.873 110.729 230.715 112.092 235.311 116.689L363.311 244.689C366.334 247.713 368 251.729 368 256S366.334 264.287 363.311 267.311Z" })
  }
));
RightToBracketThin.displayName = "RightToBracketThin";
var RightToBracket_default = RightToBracketThin;
