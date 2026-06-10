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
var PrintMagnifyingGlass_exports = {};
__export(PrintMagnifyingGlass_exports, {
  default: () => PrintMagnifyingGlass_default
});
module.exports = __toCommonJS(PrintMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PrintMagnifyingGlassThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M88 160C92.406 160 96 156.422 96 152V40C96 26.766 106.781 16 120 16H346.75C353.062 16 359.25 18.562 363.719 23.031L408.969 68.281C413.438 72.75 416 78.938 416 85.25V130.891C421.275 130.001 426.59 129.26 432 128.811V85.25C432 74.562 427.844 64.531 420.281 56.969L375.031 11.719C367.594 4.266 357.281 0 346.75 0H120C97.938 0 80 17.938 80 40V152C80 156.422 83.594 160 88 160ZM637.656 498.344L543.625 404.312C563.531 381.75 576 352.455 576 320C576 249.307 518.693 192 448 192C377.309 192 320 249.307 320 320S377.309 448 448 448C480.455 448 509.75 435.531 532.312 415.625L626.344 509.656C627.906 511.219 629.938 512 632 512S636.094 511.219 637.656 509.656C640.781 506.531 640.781 501.469 637.656 498.344ZM448 432C386.244 432 336 381.758 336 320S386.244 208 448 208C509.758 208 560 258.242 560 320S509.758 432 448 432ZM104 496C99.594 496 96 492.406 96 488V344C96 339.594 99.594 336 104 336H256.811C256.371 330.711 256 325.4 256 320H104C90.781 320 80 330.766 80 344V368H32C23.176 368 16 360.822 16 352V256C16 229.533 37.531 208 64 208H292.371C296.395 202.428 300.715 197.104 305.299 192H64C28.652 192 0 220.652 0 256V352C0 369.672 14.328 384 32 384H80V488C80 501.234 90.781 512 104 512H408C411.723 512 415.143 510.982 418.291 509.461C401.934 506.902 386.221 502.426 371.494 496H104Z" })
  }
));
PrintMagnifyingGlassThin.displayName = "PrintMagnifyingGlassThin";
var PrintMagnifyingGlass_default = PrintMagnifyingGlassThin;
