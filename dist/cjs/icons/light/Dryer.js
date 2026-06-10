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
var Dryer_exports = {};
__export(Dryer_exports, {
  default: () => Dryer_default
});
module.exports = __toCommonJS(Dryer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DryerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V96C448 42.98 405.02 0 352 0ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V96C32 60.711 60.711 32 96 32H352C387.289 32 416 60.711 416 96V448ZM192.062 120C205.277 120 216 109.25 216 96S205.277 72 192.062 72C178.723 72 168 82.75 168 96S178.723 120 192.062 120ZM120 96C120 82.75 109.307 72 96 72C82.818 72 72 82.75 72 96S82.818 120 96 120C109.307 120 120 109.25 120 96ZM224 160C144.48 160 80.018 224.5 80.018 304S144.48 448 224 448S367.982 383.5 367.982 304S303.52 160 224 160ZM224 416C167.732 416 121.48 374.141 113.635 320H176C184.836 320 192 312.836 192 304S184.836 288 176 288H113.635C121.48 233.859 167.732 192 224 192C285.748 192 335.982 242.242 335.982 304S285.748 416 224 416Z" })
  }
));
DryerLight.displayName = "DryerLight";
var Dryer_default = DryerLight;
