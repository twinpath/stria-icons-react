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
var Trailer_exports = {};
__export(Trailer_exports, {
  default: () => Trailer_default
});
module.exports = __toCommonJS(Trailer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrailerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 104C96 99.625 92.375 96 88 96H72C67.625 96 64 99.625 64 104V264.375C73.875 256.375 84.625 249.375 96 243.625V104ZM192 225.125V104C192 99.625 188.375 96 184 96H168C163.625 96 160 99.625 160 104V225.125C165.25 224.625 170.625 224 176 224S186.75 224.625 192 225.125ZM280 96H264C259.625 96 256 99.625 256 104V243.625C267.375 249.375 278.125 256.375 288 264.375V104C288 99.625 284.375 96 280 96ZM472 96H456C451.625 96 448 99.625 448 104V320H480V104C480 99.625 476.375 96 472 96ZM376 96H360C355.625 96 352 99.625 352 104V320H384V104C384 99.625 380.375 96 376 96ZM176 320C131.875 320 96 355.875 96 400S131.875 480 176 480S256 444.125 256 400S220.125 320 176 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 320H544V64C544 46.326 529.674 32 512 32H32C14.326 32 0 46.326 0 64V352C0 369.674 14.326 384 32 384H65.625C73.5 329.75 119.625 288 176 288S278.5 329.75 286.375 384H624C632.836 384 640 376.836 640 368V336C640 327.164 632.836 320 624 320ZM96 243.625C84.625 249.375 73.875 256.375 64 264.375V104C64 99.625 67.625 96 72 96H88C92.375 96 96 99.625 96 104V243.625ZM192 225.125C186.75 224.625 181.375 224 176 224S165.25 224.625 160 225.125V104C160 99.625 163.625 96 168 96H184C188.375 96 192 99.625 192 104V225.125ZM288 264.375C278.125 256.375 267.375 249.375 256 243.625V104C256 99.625 259.625 96 264 96H280C284.375 96 288 99.625 288 104V264.375ZM384 320H352V104C352 99.625 355.625 96 360 96H376C380.375 96 384 99.625 384 104V320ZM480 320H448V104C448 99.625 451.625 96 456 96H472C476.375 96 480 99.625 480 104V320Z" })
    ]
  }
));
TrailerDuotone.displayName = "TrailerDuotone";
var Trailer_default = TrailerDuotone;
