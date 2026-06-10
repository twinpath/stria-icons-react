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
var FaceSadCry_exports = {};
__export(FaceSadCry_exports, {
  default: () => FaceSadCry_default
});
module.exports = __toCommonJS(FaceSadCry_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceSadCryLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M213.336 223.08C221.648 220.143 226.023 211.002 223.086 202.674C214.055 177.143 189.805 160 162.711 160S111.367 177.143 102.336 202.674C99.398 211.002 103.773 220.143 112.086 223.08C120.492 226.033 129.555 221.705 132.523 213.33C137.023 200.58 149.148 192.002 162.711 192.002S188.398 200.58 192.898 213.33C195.242 219.908 201.398 224.002 207.992 224.002C209.773 224.002 211.555 223.705 213.336 223.08ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM368 430.992V256C368 247.156 360.844 240 352 240S336 247.156 336 256V447.953C311.355 458.264 284.34 464 256 464S200.645 458.264 176 447.953V256C176 247.156 168.844 240 160 240S144 247.156 144 256V430.992C86.363 393.971 48 329.443 48 256C48 141.309 141.309 48 256 48S464 141.309 464 256C464 329.443 425.637 393.971 368 430.992ZM415.086 202.674C406.055 177.143 381.805 160 354.711 160S303.367 177.143 294.336 202.674C291.398 211.002 295.773 220.143 304.086 223.08C312.492 226.033 321.555 221.705 324.523 213.33C329.023 200.58 341.148 192.002 354.711 192.002S380.398 200.58 384.898 213.33C387.242 219.908 393.398 224.002 399.992 224.002C401.773 224.002 403.555 223.705 405.336 223.08C413.648 220.143 418.023 211.002 415.086 202.674ZM255.938 288C229.047 288 207.969 316.109 207.969 352S229.047 416 255.938 416S303.906 387.891 303.906 352S282.828 288 255.938 288ZM255.938 384C249.578 384 239.969 371.234 239.969 352S249.578 320 255.938 320S271.906 332.766 271.906 352S262.297 384 255.938 384Z" })
  }
));
FaceSadCryLight.displayName = "FaceSadCryLight";
var FaceSadCry_default = FaceSadCryLight;
