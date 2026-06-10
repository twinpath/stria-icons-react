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
var LightSwitchOff_exports = {};
__export(LightSwitchOff_exports, {
  default: () => LightSwitchOff_default
});
module.exports = __toCommonJS(LightSwitchOff_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightSwitchOffThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 440C183.125 440 176 447.125 176 456S183.125 472 192 472S208 464.875 208 456S200.875 440 192 440ZM192 72C200.875 72 208 64.875 208 56S200.875 40 192 40S176 47.125 176 56S183.125 72 192 72ZM240 96H144C117.5 96 96 117.5 96 144V368C96 394.5 117.5 416 144 416H240C266.5 416 288 394.5 288 368V144C288 117.5 266.5 96 240 96ZM272 368C272 385.644 257.645 400 240 400H144C126.355 400 112 385.644 112 368V264H272V368ZM272 248H112V144C112 126.355 126.355 112 144 112H240C257.645 112 272 126.355 272 144V248ZM320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM368 448C368 474.469 346.467 496 320 496H64C37.533 496 16 474.469 16 448V64C16 37.531 37.533 16 64 16H320C346.467 16 368 37.531 368 64V448ZM152 368H232C240.828 368 248 360.812 248 352V304C248 295.187 240.828 288 232 288H152C143.172 288 136 295.187 136 304V352C136 360.812 143.172 368 152 368ZM152 304H232V352H152V304Z" })
  }
));
LightSwitchOffThin.displayName = "LightSwitchOffThin";
var LightSwitchOff_default = LightSwitchOffThin;
