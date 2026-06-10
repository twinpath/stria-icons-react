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
var Mp3Player_exports = {};
__export(Mp3Player_exports, {
  default: () => Mp3Player_default
});
module.exports = __toCommonJS(Mp3Player_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Mp3PlayerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 448C253.875 448 304 397.875 304 336C303.875 274.125 253.875 224.125 192 224C130.125 224 80 274.125 80 336S130.125 448 192 448ZM192 256C236.125 256 272 291.875 272 336S236.125 416 192 416S112 380.125 112 336S147.875 256 192 256ZM192 360C205.25 360 216 349.25 216 336S205.25 312 192 312S168 322.75 168 336S178.75 360 192 360ZM320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C355.346 512 384 483.346 384 448V64C384 28.652 355.346 0 320 0ZM352 448C352 465.672 337.674 480 320 480H64C46.326 480 32 465.672 32 448V192H352V448ZM352 160H32V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V160Z" })
  }
));
Mp3PlayerLight.displayName = "Mp3PlayerLight";
var Mp3Player_default = Mp3PlayerLight;
