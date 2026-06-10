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
var SidebarFlip_exports = {};
__export(SidebarFlip_exports, {
  default: () => SidebarFlip_default
});
module.exports = __toCommonJS(SidebarFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SidebarFlipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 272C352 280.836 359.164 288 368 288H432C440.836 288 448 280.836 448 272C448 263.162 440.836 256 432 256H368C359.164 256 352 263.162 352 272ZM352 208C352 216.836 359.164 224 368 224H432C440.836 224 448 216.836 448 208C448 199.162 440.836 192 432 192H368C359.164 192 352 199.162 352 208ZM448 144C448 135.162 440.836 128 432 128H368C359.164 128 352 135.162 352 144C352 152.836 359.164 160 368 160H432C440.836 160 448 152.836 448 144ZM0 96V416C0 451.348 28.654 480 64 480H448C483.346 480 512 451.348 512 416V96C512 60.652 483.346 32 448 32H64C28.654 32 0 60.652 0 96ZM320 64H448C465.645 64 480 78.355 480 96V416C480 433.645 465.645 448 448 448H320V64ZM32 96C32 78.355 46.355 64 64 64H288V448H64C46.355 448 32 433.645 32 416V96Z" })
  }
));
SidebarFlipLight.displayName = "SidebarFlipLight";
var SidebarFlip_default = SidebarFlipLight;
