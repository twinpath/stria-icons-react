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
var Joystick_exports = {};
__export(Joystick_exports, {
  default: () => Joystick_default
});
module.exports = __toCommonJS(Joystick_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const JoystickLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 352H240V222.387C294.209 214.563 336 168.375 336 112C336 50.145 285.855 0 224 0S112 50.145 112 112C112 168.375 153.791 214.562 208 222.387V352H48C21.49 352 0 373.49 0 400V464C0 490.51 21.49 512 48 512H400C426.51 512 448 490.51 448 464V400C448 373.49 426.51 352 400 352ZM144 112C144 67.889 179.889 32 224 32S304 67.889 304 112S268.111 192 224 192S144 156.111 144 112ZM416 464C416 472.822 408.822 480 400 480H48C39.178 480 32 472.822 32 464V400C32 391.178 39.178 384 48 384H400C408.822 384 416 391.178 416 400V464ZM232 80C232 66.744 221.254 56 208 56S184 66.744 184 80C184 93.254 194.746 104 208 104S232 93.254 232 80ZM64 320H128C136.844 320 144 312.844 144 304S136.844 288 128 288H64C55.156 288 48 295.156 48 304S55.156 320 64 320Z" })
  }
));
JoystickLight.displayName = "JoystickLight";
var Joystick_default = JoystickLight;
