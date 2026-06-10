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
const RupiahSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M392 160H328C305.908 160 288 177.908 288 200V472C288 494.092 305.908 512 328 512S368 494.092 368 472V400H388.549C445.807 400 497.916 361.309 509.414 305.217C525.221 228.094 466.416 160 392 160ZM392 320H368V240H392C414.062 240 432 257.938 432 280S414.062 320 392 320ZM255.998 176C255.996 73.633 162.123 32 105.588 32H48C21.492 32 0 53.49 0 80V440C0 462.092 17.91 480 40 480C62.092 480 80 462.092 80 440V320H102.902L145.529 450.994C150.436 468.164 166.127 480 183.982 480C210.553 480 229.734 454.568 222.436 429.021L180.852 301.682C225.396 277.168 256 230.338 255.998 176ZM112 240H80V112H112C147.297 112 176 140.703 176 176S147.297 240 112 240Z" })
  }
));
RupiahSignSolid.displayName = "RupiahSignSolid";
var RupiahSign_default = RupiahSignSolid;
