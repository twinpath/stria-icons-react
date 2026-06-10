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
var ParachuteBox_exports = {};
__export(ParachuteBox_exports, {
  default: () => ParachuteBox_default
});
module.exports = __toCommonJS(ParachuteBox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ParachuteBoxLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.893 204.25C499.267 80.875 368.758 0 256 0S12.733 80.875 0.107 204.25C-1.018 214.875 6.858 224 16.108 224H48.611L159.993 345.375V480C159.993 497.75 174.244 512 191.996 512H320.004C337.756 512 352.007 497.75 352.007 480V345.375L463.264 224H495.767C505.142 224 513.018 214.875 511.893 204.25ZM256 32C307.754 32 368.008 96 368.008 192H143.992C143.992 96 204.246 32 256 32ZM34.235 192C47.736 126.875 100.989 76.75 163.369 51.125C133.242 83.75 111.99 132.125 111.99 191.25V192H34.235ZM180.12 320L91.989 224H239.999V320H180.12ZM320.004 472C320.004 476.375 316.379 480 312.004 480H199.996C195.621 480 191.996 476.375 191.996 472V360C191.996 355.625 195.621 352 199.996 352H312.004C316.379 352 320.004 355.625 320.004 360V472ZM331.88 320H272.001V224H419.886L331.88 320ZM400.01 192V191.25C400.01 132.125 378.758 83.875 348.631 51.125C410.886 76.75 464.264 126.875 477.765 192H400.01Z" })
  }
));
ParachuteBoxLight.displayName = "ParachuteBoxLight";
var ParachuteBox_default = ParachuteBoxLight;
