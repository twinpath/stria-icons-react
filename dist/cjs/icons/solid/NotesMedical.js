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
const NotesMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 48H80C62.326 48 48 62.328 48 80V384C21.49 384 0 362.508 0 336V64C0 28.654 28.654 0 64 0H336C362.51 0 384 21.492 384 48ZM480 144V384L384 480H144C117.49 480 96 458.508 96 432V144C96 117.492 117.49 96 144 96H432C458.51 96 480 117.492 480 144ZM384 264C384 259.625 380.375 256 376 256H320V200C320 195.625 316.375 192 312 192H264C259.625 192 256 195.625 256 200V256H200C195.625 256 192 259.625 192 264V312C192 316.375 195.625 320 200 320H256V376C256 380.375 259.625 384 264 384H312C316.375 384 320 380.375 320 376V320H376C380.375 320 384 316.375 384 312V264Z" })
  }
));
NotesMedicalSolid.displayName = "NotesMedicalSolid";
var NotesMedical_default = NotesMedicalSolid;
