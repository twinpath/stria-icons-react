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
var BahtSign_exports = {};
__export(BahtSign_exports, {
  default: () => BahtSign_default
});
module.exports = __toCommonJS(BahtSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BahtSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M252.93 233.566C274.168 215.943 288 189.691 288 160C288 107.062 244.938 64 192 64H160V16C160 7.156 152.844 0 144 0S128 7.156 128 16V64H16C7.156 64 0 71.156 0 80V432C0 440.844 7.156 448 16 448H128V496C128 504.844 135.156 512 144 512S160 504.844 160 496V448H208C269.75 448 320 397.75 320 336C320 290.246 292.342 250.93 252.93 233.566ZM192 96C227.281 96 256 124.719 256 160S227.281 224 192 224H160V96H192ZM32 96H128V224H32V96ZM32 416V256H128V416H32ZM208 416H160V256H208C252.125 256 288 291.875 288 336S252.125 416 208 416Z" })
  }
));
BahtSignLight.displayName = "BahtSignLight";
var BahtSign_default = BahtSignLight;
