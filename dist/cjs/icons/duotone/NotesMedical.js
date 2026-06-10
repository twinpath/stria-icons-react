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
var NotesMedical_exports = {};
__export(NotesMedical_exports, {
  default: () => NotesMedical_default
});
module.exports = __toCommonJS(NotesMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NotesMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 96H144C117.49 96 96 117.492 96 144V432C96 458.508 117.49 480 144 480H384L480 384V144C480 117.492 458.51 96 432 96ZM384 312C384 316.375 380.375 320 376 320H320V376C320 380.375 316.375 384 312 384H264C259.625 384 256 380.375 256 376V320H200C195.625 320 192 316.375 192 312V264C192 259.625 195.625 256 200 256H256V200C256 195.625 259.625 192 264 192H312C316.375 192 320 195.625 320 200V256H376C380.375 256 384 259.625 384 264V312Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H64C28.654 0 0 28.654 0 64V336C0 362.508 21.49 384 48 384V80C48 62.328 62.326 48 80 48H384C384 21.492 362.51 0 336 0ZM376 256H320V200C320 195.625 316.375 192 312 192H264C259.625 192 256 195.625 256 200V256H200C195.625 256 192 259.625 192 264V312C192 316.375 195.625 320 200 320H256V376C256 380.375 259.625 384 264 384H312C316.375 384 320 380.375 320 376V320H376C380.375 320 384 316.375 384 312V264C384 259.625 380.375 256 376 256Z" })
    ]
  }
));
NotesMedicalDuotone.displayName = "NotesMedicalDuotone";
var NotesMedical_default = NotesMedicalDuotone;
