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
var Buildings_exports = {};
__export(Buildings_exports, {
  default: () => Buildings_default
});
module.exports = __toCommonJS(Buildings_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BuildingsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 80H360C346.746 80 336 90.744 336 104V152C336 165.254 346.746 176 360 176H408C421.254 176 432 165.254 432 152V104C432 90.744 421.254 80 408 80ZM400 144H368V112H400V144ZM152 336H104C90.746 336 80 346.744 80 360V408C80 421.254 90.746 432 104 432H152C165.254 432 176 421.254 176 408V360C176 346.744 165.254 336 152 336ZM144 400H112V368H144V400ZM448 0H192C156.654 0 128 28.652 128 64V80C128 88.836 135.164 96 144 96S160 88.836 160 80V64C160 46.326 174.326 32 192 32H448C465.674 32 480 46.326 480 64V496C480 504.836 487.164 512 496 512S512 504.836 512 496V64C512 28.652 483.346 0 448 0ZM408 208H360C346.746 208 336 218.744 336 232V280C336 293.254 346.746 304 360 304H408C421.254 304 432 293.254 432 280V232C432 218.744 421.254 208 408 208ZM400 272H368V240H400V272ZM408 336H360C346.746 336 336 346.744 336 360V408C336 421.254 346.746 432 360 432H408C421.254 432 432 421.254 432 408V360C432 346.744 421.254 336 408 336ZM400 400H368V368H400V400ZM152 208H104C90.746 208 80 218.744 80 232V280C80 293.254 90.746 304 104 304H152C165.254 304 176 293.254 176 280V232C176 218.744 165.254 208 152 208ZM144 272H112V240H144V272ZM192 128H64C28.654 128 0 156.652 0 192V496C0 504.836 7.164 512 16 512S32 504.836 32 496V192C32 174.326 46.326 160 64 160H192C209.674 160 224 174.326 224 192V496C224 504.836 231.164 512 240 512S256 504.836 256 496V192C256 156.652 227.346 128 192 128Z" })
  }
));
BuildingsLight.displayName = "BuildingsLight";
var Buildings_default = BuildingsLight;
