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
var CabinetFiling_exports = {};
__export(CabinetFiling_exports, {
  default: () => CabinetFiling_default
});
module.exports = __toCommonJS(CabinetFiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CabinetFilingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V64C448 28.654 419.346 0 384 0ZM416 448C416 465.674 401.674 480 384 480H64C46.326 480 32 465.674 32 448V272H416V448ZM416 240H32V64C32 46.326 46.326 32 64 32H384C401.674 32 416 46.326 416 64V240ZM304 96H144C135.156 96 128 103.156 128 112V144C128 152.844 135.156 160 144 160S160 152.844 160 144V128H288V144C288 152.844 295.156 160 304 160S320 152.844 320 144V112C320 103.156 312.844 96 304 96ZM144 416C152.844 416 160 408.844 160 400V384H288V400C288 408.844 295.156 416 304 416S320 408.844 320 400V368C320 359.156 312.844 352 304 352H144C135.156 352 128 359.156 128 368V400C128 408.844 135.156 416 144 416Z" })
  }
));
CabinetFilingLight.displayName = "CabinetFilingLight";
var CabinetFiling_default = CabinetFilingLight;
