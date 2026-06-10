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
var Key_exports = {};
__export(Key_exports, {
  default: () => Key_default
});
module.exports = __toCommonJS(Key_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeyThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M368 96C341.49 96 320 117.49 320 144S341.49 192 368 192S416 170.51 416 144S394.51 96 368 96ZM368 176C350.355 176 336 161.644 336 144S350.355 112 368 112S400 126.355 400 144S385.645 176 368 176ZM336 0C238.799 0 160 78.797 160 176C160 195.258 163.201 213.74 168.918 231.082L9.373 390.627C3.371 396.629 0 404.767 0 413.254V512H112C120.836 512 128 504.836 128 496V448H176C184.836 448 192 440.836 192 432V384H249.373C253.615 384 257.686 382.314 260.686 379.312L293.406 346.592C307.068 349.994 321.283 352 336 352C433.201 352 512 273.201 512 176C512 78.797 433.201 0 336 0ZM336 336C323.449 336 310.418 334.34 297.273 331.066C295.992 330.746 294.695 330.592 293.406 330.592C289.215 330.592 285.129 332.24 282.094 335.277L249.373 368H192C183.164 368 176 375.164 176 384V432H128C119.164 432 112 439.164 112 448V496H16V413.254C16 408.98 17.664 404.963 20.688 401.939L180.232 242.394C184.504 238.123 186.006 231.81 184.113 226.072C178.73 209.74 176 192.894 176 176C176 87.775 247.775 16 336 16S496 87.775 496 176S424.225 336 336 336Z" })
  }
));
KeyThin.displayName = "KeyThin";
var Key_default = KeyThin;
