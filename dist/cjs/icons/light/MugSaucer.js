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
var MugSaucer_exports = {};
__export(MugSaucer_exports, {
  default: () => MugSaucer_default
});
module.exports = __toCommonJS(MugSaucer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugSaucerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 32H128C110.328 32 96 46.326 96 64V288C96 341.02 138.98 384 192 384H384C437.02 384 480 341.02 480 288V256H528C589.75 256 640 205.75 640 144S589.75 32 528 32ZM448 288C448 323.289 419.291 352 384 352H192C156.711 352 128 323.289 128 288V64H448V288ZM528 224H480V64H528C572.125 64 608 99.875 608 144S572.125 224 528 224ZM560 416C551.156 416 544 423.156 544 432C544 440.812 536.812 448 528 448H48C39.188 448 32 440.812 32 432C32 423.156 24.844 416 16 416S0 423.156 0 432C0 458.469 21.531 480 48 480H528C554.469 480 576 458.469 576 432C576 423.156 568.844 416 560 416Z" })
  }
));
MugSaucerLight.displayName = "MugSaucerLight";
var MugSaucer_default = MugSaucerLight;
