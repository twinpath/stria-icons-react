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
var Gamepad_exports = {};
__export(Gamepad_exports, {
  default: () => Gamepad_default
});
module.exports = __toCommonJS(Gamepad_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GamepadRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 272C382.375 272 368 286.375 368 304S382.375 336 400 336S432 321.625 432 304S417.625 272 400 272ZM247.951 232H215.951V200C215.951 186.799 205.15 176 191.951 176C178.75 176 167.951 186.799 167.951 200V232H135.951C122.75 232 111.953 242.799 111.953 256C111.953 269.199 122.75 280 135.951 280H167.951V312C167.951 325.199 178.75 336 191.951 336C205.15 336 215.951 325.199 215.951 312V280H247.951C261.15 280 271.951 269.199 271.951 256C271.951 242.799 261.15 232 247.951 232ZM464 176C446.375 176 432 190.375 432 208S446.375 240 464 240S496 225.625 496 208S481.625 176 464 176ZM448 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H448C554.039 448 640 362.039 640 256S554.039 64 448 64ZM448 400H192C112.598 400 48 335.402 48 256S112.598 112 192 112H448C527.402 112 592 176.598 592 256S527.402 400 448 400Z" })
  }
));
GamepadRegular.displayName = "GamepadRegular";
var Gamepad_default = GamepadRegular;
