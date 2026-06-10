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
var RightFromBracket_exports = {};
__export(RightFromBracket_exports, {
  default: () => RightFromBracket_default
});
module.exports = __toCommonJS(RightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromBracketThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 480H120C124.422 480 128 476.422 128 472S124.422 464 120 464H40C26.766 464 16 453.234 16 440V72C16 58.766 26.766 48 40 48H120C124.422 48 128 44.422 128 40S124.422 32 120 32H40C17.938 32 0 49.938 0 72V440C0 462.062 17.938 480 40 480ZM502.625 233.375L374.625 105.375C365.469 96.219 351.719 93.469 339.75 98.438C327.797 103.375 320 115.062 320 128V192H160C142.326 192 128 206.326 128 224V288C128 305.672 142.326 320 160 320H320V384C320 396.938 327.797 408.625 339.75 413.562C351.719 418.531 365.469 415.781 374.625 406.625L502.625 278.625C508.875 272.375 512 264.188 512 256S508.875 239.625 502.625 233.375ZM491.311 267.311L363.311 395.311C358.715 399.908 351.873 401.271 345.857 398.773C339.869 396.301 336 390.502 336 384V304H160C151.178 304 144 296.822 144 288V224C144 215.178 151.178 208 160 208H336V128C336 121.498 339.869 115.699 345.885 113.215C351.873 110.729 358.715 112.092 363.311 116.689L491.311 244.689C494.334 247.713 496 251.729 496 256S494.334 264.287 491.311 267.311Z" })
  }
));
RightFromBracketThin.displayName = "RightFromBracketThin";
var RightFromBracket_default = RightFromBracketThin;
