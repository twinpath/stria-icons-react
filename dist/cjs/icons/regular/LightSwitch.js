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
const LightSwitchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0H64C28.625 0 0 28.625 0 64V448C0 483.375 28.625 512 64 512H320C355.375 512 384 483.375 384 448V64C384 28.625 355.375 0 320 0ZM336 448C336 456.875 328.875 464 320 464H214.375C211.125 454.375 202.125 448 192 448S172.875 454.375 169.625 464H64C55.125 464 48 456.875 48 448V64C48 55.125 55.125 48 64 48H169.625C172.875 57.625 181.875 64 192 64S211.125 57.625 214.375 48H320C328.875 48 336 55.125 336 64V448ZM240 96H144C117.6 96 96 117.6 96 144V368C96 394.4 117.6 416 144 416H240C266.4 416 288 394.4 288 368V144C288 117.6 266.4 96 240 96ZM240 368H144V280H240V368ZM240 232H144V144H240V232Z" })
  }
));
LightSwitchRegular.displayName = "LightSwitchRegular";
var LightSwitch_default = LightSwitchRegular;
