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
var RadioTuner_exports = {};
__export(RadioTuner_exports, {
  default: () => RadioTuner_default
});
module.exports = __toCommonJS(RadioTuner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RadioTunerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.997 128H218.509L494.747 47.032C507.466 43.298 514.747 29.969 511.028 17.251C507.31 4.548 494.028 -2.749 481.247 0.97L51.75 126.86C22.682 135.371 2.203 161.662 0.359 191.641L0 192V447.999C0 483.312 28.687 511.999 64 511.999H447.997C483.31 511.999 511.997 483.312 511.997 447.999V192C511.997 156.688 483.31 128 447.997 128ZM208.001 423.999C208.001 428.406 204.407 431.999 200.001 431.999H88.001C83.595 431.999 80.002 428.406 80.002 423.999V408C80.002 403.593 83.595 400 88.001 400H200.001C204.407 400 208.001 403.593 208.001 408V423.999ZM224.001 360C224.001 364.406 220.407 368 216.001 368H72.002C67.595 368 64.002 364.406 64.002 360V344C64.002 339.593 67.595 336 72.002 336H216.001C220.407 336 224.001 339.593 224.001 344V360ZM384 447.999C348.676 447.999 320 419.324 320 384S348.676 320 384 320C419.326 320 447.999 348.675 447.999 384S419.326 447.999 384 447.999ZM416 256H96.001C78.33 256 64.002 241.674 64.002 224S78.33 192 96.001 192H416C433.673 192 447.999 206.326 447.999 224S433.673 256 416 256Z" })
  }
));
RadioTunerSolid.displayName = "RadioTunerSolid";
var RadioTuner_default = RadioTunerSolid;
