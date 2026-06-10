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
var Retweet_exports = {};
__export(Retweet_exports, {
  default: () => Retweet_default
});
module.exports = __toCommonJS(Retweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RetweetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.001 368H144.001V224H240.001C246.282 224 251.97 220.344 254.564 214.625C257.173 208.906 256.173 202.187 252.048 197.469L140.048 69.469C133.954 62.531 122.048 62.531 115.954 69.469L3.954 197.469C-0.171 202.187 -1.171 208.906 1.439 214.625C4.032 220.344 9.72 224 16.001 224H112.001V384C112.001 392.844 119.157 400 128.001 400H336.001C344.845 400 352.001 392.844 352.001 384S344.845 368 336.001 368ZM51.267 192L128.001 104.312L204.735 192H51.267ZM638.564 297.375C635.97 291.656 630.282 288 624.001 288H528.001V128C528.001 119.156 520.845 112 512.001 112H304.001C295.157 112 288.001 119.156 288.001 128S295.157 144 304.001 144H496.001V288H400.001C393.72 288 388.032 291.656 385.439 297.375C382.829 303.094 383.829 309.813 387.954 314.531L499.954 442.531C503.001 446 507.392 448 512.001 448S521.001 446 524.048 442.531L636.048 314.531C640.173 309.812 641.173 303.094 638.564 297.375ZM512.001 407.688L435.267 320H588.735L512.001 407.688Z" })
  }
));
RetweetLight.displayName = "RetweetLight";
var Retweet_default = RetweetLight;
