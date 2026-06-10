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
var CasetteVhs_exports = {};
__export(CasetteVhs_exports, {
  default: () => CasetteVhs_default
});
module.exports = __toCommonJS(CasetteVhs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CasetteVhsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 384H392C440.625 384 480 344.625 480 296S440.625 208 392 208H184C135.375 208 96 247.375 96 296S135.375 384 184 384ZM400 264C417.625 264 432 278.375 432 296S417.625 328 400 328V264ZM224 256H352V336H224V256ZM176 264V328C158.375 328 144 313.625 144 296S158.375 264 176 264ZM512 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM528 416C528 424.822 520.822 432 512 432H64C55.178 432 48 424.822 48 416V160H528V416Z" })
  }
));
CasetteVhsRegular.displayName = "CasetteVhsRegular";
var CasetteVhs_default = CasetteVhsRegular;
