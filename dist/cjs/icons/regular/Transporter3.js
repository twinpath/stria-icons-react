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
var Transporter3_exports = {};
__export(Transporter3_exports, {
  default: () => Transporter3_default
});
module.exports = __toCommonJS(Transporter3_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter3Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 224H368C376.844 224 384 216.844 384 208S376.844 192 368 192H144C135.156 192 128 199.156 128 208S135.156 224 144 224ZM176 160H336C344.844 160 352 152.844 352 144S344.844 128 336 128H176C167.156 128 160 135.156 160 144S167.156 160 176 160ZM93.75 140.375L64 128L51.625 98.25C50.875 96.875 49.5 96 48 96S45.125 96.875 44.375 98.25L32 128L2.25 140.375C0.875 141.125 0 142.5 0 144S0.875 146.875 2.25 147.625L32 160L44.375 189.75C45.125 191.125 46.5 192 48 192S50.875 191.125 51.625 189.75L64 160L93.75 147.625C95.125 146.875 96 145.5 96 144S95.125 141.125 93.75 140.375ZM256 96C282.5 96 304 74.5 304 48S282.5 0 256 0S208 21.5 208 48S229.5 96 256 96ZM509.75 44.375L480 32L467.625 2.25C466.875 0.875 465.5 0 464 0S461.125 0.875 460.375 2.25L448 32L418.25 44.375C416.875 45.125 416 46.5 416 48S416.875 50.875 418.25 51.625L448 64L460.375 93.75C461.125 95.125 462.5 96 464 96S466.875 95.125 467.625 93.75L480 64L509.75 51.625C511.125 50.875 512 49.5 512 48S511.125 45.125 509.75 44.375ZM392 464H352C352 455.156 344.844 448 336 448H176C167.156 448 160 455.156 160 464H120C106.746 464 96 474.744 96 488C96 501.254 106.746 512 120 512H392C405.254 512 416 501.254 416 488C416 474.744 405.254 464 392 464ZM400 256H112C103.156 256 96 263.156 96 272S103.156 288 112 288H400C408.844 288 416 280.844 416 272S408.844 256 400 256ZM176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352ZM176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416Z" })
  }
));
Transporter3Regular.displayName = "Transporter3Regular";
var Transporter3_default = Transporter3Regular;
