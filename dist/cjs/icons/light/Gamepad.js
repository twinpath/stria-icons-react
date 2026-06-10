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
const GamepadLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H192C85.961 64 0 149.961 0 256S85.961 448 192 448H448C554.039 448 640 362.039 640 256S554.039 64 448 64ZM448 416H192C103.775 416 32 344.225 32 256S103.775 96 192 96H448C536.225 96 608 167.775 608 256S536.225 416 448 416ZM432 280C418.725 280 408 290.725 408 304S418.725 328 432 328S456 317.275 456 304S445.275 280 432 280ZM496 184C482.725 184 472 194.725 472 208S482.725 232 496 232S520 221.275 520 208S509.275 184 496 184ZM256 240H208V192C208 183.156 200.844 176 192 176S176 183.156 176 192V240H128C119.156 240 112 247.156 112 256S119.156 272 128 272H176V320C176 328.844 183.156 336 192 336S208 328.844 208 320V272H256C264.844 272 272 264.844 272 256S264.844 240 256 240Z" })
  }
));
GamepadLight.displayName = "GamepadLight";
var Gamepad_default = GamepadLight;
