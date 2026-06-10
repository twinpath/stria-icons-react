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
var Book_exports = {};
__export(Book_exports, {
  default: () => Book_default
});
module.exports = __toCommonJS(Book_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 368V48C448 21.49 426.51 0 400 0H80C35.817 0 0 35.817 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM32 80C32 53.49 53.49 32 80 32H96V384H64C52.291 384 41.451 387.389 32 392.9V80ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H128V32H400C408.828 32 416 39.172 416 48V368C416 376.828 408.828 384 400 384ZM352 128H192C183.156 128 176 135.156 176 144S183.156 160 192 160H352C360.844 160 368 152.844 368 144S360.844 128 352 128ZM352 224H192C183.156 224 176 231.156 176 240S183.156 256 192 256H352C360.844 256 368 248.844 368 240S360.844 224 352 224Z" })
  }
));
BookLight.displayName = "BookLight";
var Book_default = BookLight;
