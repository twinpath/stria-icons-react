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
var SquareSlidersVertical_exports = {};
__export(SquareSlidersVertical_exports, {
  default: () => SquareSlidersVertical_default
});
module.exports = __toCommonJS(SquareSlidersVertical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSlidersVerticalLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM144 224C135.156 224 128 231.156 128 240V400C128 408.844 135.156 416 144 416S160 408.844 160 400V240C160 231.156 152.844 224 144 224ZM192 160H160V112C160 103.156 152.844 96 144 96S128 103.156 128 112V160H96C87.156 160 80 167.156 80 176S87.156 192 96 192H192C200.844 192 208 184.844 208 176S200.844 160 192 160ZM304 320C295.156 320 288 327.156 288 336V400C288 408.844 295.156 416 304 416S320 408.844 320 400V336C320 327.156 312.844 320 304 320ZM352 256H320V112C320 103.156 312.844 96 304 96S288 103.156 288 112V256H256C247.156 256 240 263.156 240 272S247.156 288 256 288H352C360.844 288 368 280.844 368 272S360.844 256 352 256Z" })
  }
));
SquareSlidersVerticalLight.displayName = "SquareSlidersVerticalLight";
var SquareSlidersVertical_default = SquareSlidersVerticalLight;
