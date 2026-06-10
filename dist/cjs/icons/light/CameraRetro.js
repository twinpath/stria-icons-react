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
var CameraRetro_exports = {};
__export(CameraRetro_exports, {
  default: () => CameraRetro_default
});
module.exports = __toCommonJS(CameraRetro_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraRetroLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 64H144C152.836 64 160 56.836 160 48C160 39.162 152.836 32 144 32H80C71.164 32 64 39.162 64 48C64 56.836 71.164 64 80 64ZM448 32H303.105C293.17 32 283.371 34.312 274.484 38.756L192 80H64C28.654 80 0 108.652 0 144V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.652 483.346 32 448 32ZM480 416C480 433.672 465.674 448 448 448H64C46.326 448 32 433.672 32 416V288H128C128 358.594 185.422 416 256 416S384 358.594 384 288H480V416ZM160 288C160 235.062 203.062 192 256 192S352 235.062 352 288S308.938 384 256 384S160 340.938 160 288ZM480 256H379.457C365.146 200.943 315.467 160 256 160S146.854 200.943 132.543 256H32V144C32 126.326 46.326 112 64 112H184.443C194.381 112 204.18 109.686 213.066 105.242L288.793 67.379C293.236 65.156 298.137 64 303.105 64H448C465.674 64 480 78.326 480 96V256Z" })
  }
));
CameraRetroLight.displayName = "CameraRetroLight";
var CameraRetro_default = CameraRetroLight;
