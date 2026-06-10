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
var BracketsRound_exports = {};
__export(BracketsRound_exports, {
  default: () => BracketsRound_default
});
module.exports = __toCommonJS(BracketsRound_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsRoundLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M121.406 60.935C128.531 55.747 130.125 45.747 124.938 38.622C119.688 31.403 109.781 29.903 102.625 35.028C98.438 38.059 0 110.841 0 255.998S98.438 473.938 102.625 476.969C105.469 479 108.719 480 111.969 480C116.906 480 121.781 477.688 124.937 473.375C130.125 466.25 128.531 456.25 121.406 451.062C117.75 448.375 32 384.281 32 255.998S117.75 63.622 121.406 60.935ZM409.375 35.028C402.219 29.934 392.313 31.466 387.063 38.622C381.875 45.747 383.469 55.747 390.594 60.935C394.25 63.622 480 127.716 480 255.998S394.25 448.375 390.594 451.062C383.469 456.25 381.875 466.25 387.062 473.375C390.219 477.719 395.094 480 400.031 480C403.281 480 406.531 479 409.375 476.969C413.562 473.938 512 401.156 512 255.998S413.562 38.059 409.375 35.028Z" })
  }
));
BracketsRoundLight.displayName = "BracketsRoundLight";
var BracketsRound_default = BracketsRoundLight;
