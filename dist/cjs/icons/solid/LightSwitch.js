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
const LightSwitchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM192 32C200.875 32 208 39.125 208 48S200.875 64 192 64S176 56.875 176 48S183.125 32 192 32ZM192 480C183.125 480 176 472.875 176 464S183.125 448 192 448S208 455.125 208 464S200.875 480 192 480ZM288 368C288 394.5 266.5 416 240 416H144C117.5 416 96 394.5 96 368V272H288V368ZM288 240H96V144C96 117.5 117.5 96 144 96H240C266.5 96 288 117.5 288 144V240Z" })
  }
));
LightSwitchSolid.displayName = "LightSwitchSolid";
var LightSwitch_default = LightSwitchSolid;
