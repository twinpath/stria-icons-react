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
var WatchApple_exports = {};
__export(WatchApple_exports, {
  default: () => WatchApple_default
});
module.exports = __toCommonJS(WatchApple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WatchAppleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80V64C320 28.719 291.281 0 256 0H128C92.719 0 64 28.719 64 64V80C28.654 80 0 108.652 0 144V368C0 403.348 28.654 432 64 432V448C64 483.281 92.719 512 128 512H256C291.281 512 320 483.281 320 448V432C355.348 432 384 403.348 384 368V144C384 108.652 355.348 80 320 80ZM96 64C96 46.344 110.344 32 128 32H256C273.656 32 288 46.344 288 64V80H96V64ZM288 448C288 465.656 273.656 480 256 480H128C110.344 480 96 465.656 96 448V432H288V448ZM352 368C352 385.645 337.645 400 320 400H64C46.355 400 32 385.645 32 368V144C32 126.355 46.355 112 64 112H320C337.645 112 352 126.355 352 144V368ZM216 256C216 242.742 205.254 232 192 232S168 242.742 168 256C168 269.254 178.746 280 192 280S216 269.254 216 256ZM144 256C144 242.742 133.254 232 120 232S96 242.742 96 256C96 269.254 106.746 280 120 280S144 269.254 144 256ZM264 232C250.746 232 240 242.742 240 256C240 269.254 250.746 280 264 280S288 269.254 288 256C288 242.742 277.254 232 264 232ZM232 208C245.254 208 256 197.254 256 184C256 170.742 245.254 160 232 160S208 170.742 208 184C208 197.254 218.746 208 232 208ZM152 208C165.254 208 176 197.254 176 184C176 170.742 165.254 160 152 160S128 170.742 128 184C128 197.254 138.746 208 152 208ZM232 304C218.746 304 208 314.742 208 328C208 341.254 218.746 352 232 352S256 341.254 256 328C256 314.742 245.254 304 232 304ZM152 304C138.746 304 128 314.742 128 328C128 341.254 138.746 352 152 352S176 341.254 176 328C176 314.742 165.254 304 152 304Z" })
  }
));
WatchAppleLight.displayName = "WatchAppleLight";
var WatchApple_default = WatchAppleLight;
