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
var CameraWeb_exports = {};
__export(CameraWeb_exports, {
  default: () => CameraWeb_default
});
module.exports = __toCommonJS(CameraWeb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraWebLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390.676 437.758C387.633 434.109 383.129 432 378.379 432C364.805 432 357.391 447.832 366.08 458.258L384.203 480H64.316L82.439 458.258C91.131 447.832 83.717 432 70.143 432H70.141C65.391 432 60.887 434.109 57.844 437.758L40.705 458.32C32.811 467.791 29.992 480.975 34.773 492.34C39.855 504.414 51.314 512 64.316 512H382.709C395.049 512 406.979 505.697 412.629 494.729C418.621 483.096 417.098 469.479 408.797 459.5L390.676 437.758ZM224 448C347.713 448 448 347.711 448 224C448 100.287 347.713 0 224 0C100.289 0 0 100.287 0 224C0 347.711 100.289 448 224 448ZM224 32C329.869 32 416 118.131 416 224S329.869 416 224 416S32 329.869 32 224S118.131 32 224 32ZM224 368C303.406 368 368 303.406 368 224S303.406 80 224 80S80 144.594 80 224S144.594 368 224 368ZM224 112C285.75 112 336 162.25 336 224S285.75 336 224 336S112 285.75 112 224S162.25 112 224 112Z" })
  }
));
CameraWebLight.displayName = "CameraWebLight";
var CameraWeb_default = CameraWebLight;
