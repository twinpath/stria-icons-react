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
var LightSwitch_exports = {};
__export(LightSwitch_exports, {
  default: () => LightSwitch_default
});
module.exports = __toCommonJS(LightSwitch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightSwitchLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 96H144C117.6 96 96 117.6 96 144V368C96 394.4 117.6 416 144 416H240C266.4 416 288 394.4 288 368V144C288 117.6 266.4 96 240 96ZM256 368C256 376.836 248.838 384 240 384H144C135.164 384 128 376.836 128 368V272H256V368ZM256 240H128V144C128 135.164 135.164 128 144 128H240C248.838 128 256 135.164 256 144V240ZM320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM352 448C352 465.625 337.625 480 320 480H208V464C208 455.156 200.844 448 192 448S176 455.156 176 464V480H64C46.375 480 32 465.625 32 448V64C32 46.375 46.375 32 64 32H176V48C176 56.844 183.156 64 192 64S208 56.844 208 48V32H320C337.625 32 352 46.375 352 64V448Z" })
  }
));
LightSwitchLight.displayName = "LightSwitchLight";
var LightSwitch_default = LightSwitchLight;
