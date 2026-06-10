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
var Pedestal_exports = {};
__export(Pedestal_exports, {
  default: () => Pedestal_default
});
module.exports = __toCommonJS(Pedestal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PedestalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 80C119.164 80 112 87.162 112 96C112 104.836 119.164 112 128 112S144 104.836 144 96C144 87.162 136.836 80 128 80ZM320 80C311.164 80 304 87.162 304 96C304 104.836 311.164 112 320 112S336 104.836 336 96C336 87.162 328.836 80 320 80ZM432.039 480.039H416V64C416 28.654 387.346 0 352 0H96C60.654 0 32 28.654 32 64V480.039H15.961C7.146 480.039 0 487.186 0 496S7.146 511.959 15.961 511.959H32V512H416V511.959H432.039C440.854 511.959 448 504.814 448 496S440.854 480.039 432.039 480.039ZM384 480H64V64C64 46.355 78.355 32 96 32H352C369.645 32 384 46.355 384 64V480Z" })
  }
));
PedestalLight.displayName = "PedestalLight";
var Pedestal_default = PedestalLight;
