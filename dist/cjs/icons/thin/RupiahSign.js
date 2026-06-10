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
var RupiahSign_exports = {};
__export(RupiahSign_exports, {
  default: () => RupiahSign_default
});
module.exports = __toCommonJS(RupiahSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RupiahSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 160H328C305.908 160 288 177.908 288 200V504C288 508.406 291.578 512 296 512S304 508.406 304 504V384H396.777C450.223 384 498.861 347.883 509.588 295.523C524.334 223.541 469.438 160 400 160ZM494.139 291.133C485.287 336.709 442.639 368 396.211 368H304V200C304 186.744 314.746 176 328 176H400C459.195 176 506.043 229.846 494.139 291.133ZM120 32H40C17.938 32 0 49.938 0 72V472C0 476.406 3.594 480 8 480S16 476.406 16 472V304H120C123.365 304 126.523 303.248 129.828 303.006L184.375 474.438C185.469 477.844 188.594 480 192 480C192.812 480 193.625 479.875 194.438 479.625C198.625 478.281 200.969 473.781 199.625 469.562L146.105 301.361C208.639 289.141 256 234.061 256 168C256 93 195 32 120 32ZM120 288H16V72C16 58.781 26.781 48 40 48H120C186.156 48 240 101.844 240 168S186.156 288 120 288Z" })
  }
));
RupiahSignThin.displayName = "RupiahSignThin";
var RupiahSign_default = RupiahSignThin;
