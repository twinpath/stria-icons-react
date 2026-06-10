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
var PersonSeatReclined_exports = {};
__export(PersonSeatReclined_exports, {
  default: () => PersonSeatReclined_default
});
module.exports = __toCommonJS(PersonSeatReclined_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSeatReclinedLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M119.999 112C150.927 112 175.999 86.926 175.999 56S150.927 0 119.999 0S63.999 25.074 63.999 56S89.072 112 119.999 112ZM119.999 32C133.234 32 143.999 42.766 143.999 56C143.999 69.232 133.234 80 119.999 80S95.999 69.232 95.999 56C95.999 42.766 106.765 32 119.999 32ZM431.999 448H393.89L334.312 328.844C331.593 323.438 326.062 320 319.999 320H170.703C162.968 320 156.343 314.469 154.953 306.844L139.892 224H303.999C312.835 224 319.999 216.836 319.999 208C319.999 199.162 312.835 192 303.999 192H134.074L127.734 157.125C126.171 148.438 117.828 142.844 109.14 144.25C100.437 145.844 94.671 154.156 96.265 162.875L123.468 312.594C127.624 335.406 147.484 352 170.703 352H310.109L369.687 471.156C372.406 476.562 377.937 480 383.999 480H431.999C440.843 480 447.999 472.844 447.999 464S440.843 448 431.999 448ZM271.999 416H159.624C115.39 416 77.359 384.438 69.203 340.969L31.718 141.062C30.109 132.406 21.796 126.625 13.046 128.281C4.359 129.906 -1.36 138.25 0.281 146.938L37.765 346.844C48.749 405.469 99.999 448 159.624 448H271.999C280.843 448 287.999 440.844 287.999 432S280.843 416 271.999 416Z" })
  }
));
PersonSeatReclinedLight.displayName = "PersonSeatReclinedLight";
var PersonSeatReclined_default = PersonSeatReclinedLight;
