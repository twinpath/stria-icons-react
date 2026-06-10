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
var Copy_exports = {};
__export(Copy_exports, {
  default: () => Copy_default
});
module.exports = __toCommonJS(Copy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CopyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 416C263.164 416 256 423.162 256 432V448C256 465.672 241.674 480 224 480H64C46.326 480 32 465.672 32 448V192C32 174.326 46.326 160 64 160H176C184.836 160 192 152.836 192 144C192 135.162 184.836 128 176 128H64C28.654 128 0 156.652 0 192V448C0 483.346 28.654 512 64 512H224C259.346 512 288 483.346 288 448V432C288 423.162 280.836 416 272 416ZM502.627 86.627L425.373 9.373C419.371 3.371 411.232 0 402.746 0H288C252.654 0 224 28.652 224 64V320C224 355.346 252.654 384 288 384H448C483.346 384 512 355.346 512 320V109.254C512 100.768 508.629 92.629 502.627 86.627ZM416 45.254L466.746 96H416V45.254ZM480 320C480 337.672 465.674 352 448 352H288C270.326 352 256 337.672 256 320V64C256 46.326 270.326 32 288 32H384V96C384 113.672 398.326 128 416 128H480V320Z" })
  }
));
CopyLight.displayName = "CopyLight";
var Copy_default = CopyLight;
