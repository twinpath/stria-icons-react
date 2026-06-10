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
var RectangleList_exports = {};
__export(RectangleList_exports, {
  default: () => RectangleList_default
});
module.exports = __toCommonJS(RectangleList_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RectangleListRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H512C520.822 80 528 87.178 528 96V416ZM128 128C110.326 128 96 142.326 96 160C96 177.672 110.326 192 128 192S160 177.672 160 160C160 142.326 145.674 128 128 128ZM128 224C110.326 224 96 238.326 96 256C96 273.672 110.326 288 128 288S160 273.672 160 256C160 238.326 145.674 224 128 224ZM128 320C110.326 320 96 334.326 96 352C96 369.672 110.326 384 128 384S160 369.672 160 352C160 334.326 145.674 320 128 320ZM456 136H216C202.75 136 192 146.75 192 160S202.75 184 216 184H456C469.25 184 480 173.25 480 160S469.25 136 456 136ZM456 232H216C202.75 232 192 242.75 192 256S202.75 280 216 280H456C469.25 280 480 269.25 480 256S469.25 232 456 232ZM456 328H216C202.75 328 192 338.75 192 352S202.75 376 216 376H456C469.25 376 480 365.25 480 352S469.25 328 456 328Z" })
  }
));
RectangleListRegular.displayName = "RectangleListRegular";
var RectangleList_default = RectangleListRegular;
