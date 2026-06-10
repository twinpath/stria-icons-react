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
var FilesMedical_exports = {};
__export(FilesMedical_exports, {
  default: () => FilesMedical_default
});
module.exports = __toCommonJS(FilesMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilesMedicalSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 464C352 490.508 330.51 512 304 512H64C28.654 512 0 483.346 0 448V144C0 117.492 21.49 96 48 96V432C48 449.673 62.327 464 80 464H352ZM352 0V96H448L352 0ZM352 128H448V368C448 394.508 426.51 416 400 416H144C117.49 416 96 394.508 96 368V48C96 21.492 117.49 0 144 0H320V96C320 113.602 334.4 128 352 128ZM354.285 224H304V173.711C304 166.141 297.859 160 290.285 160H253.715C246.141 160 240 166.141 240 173.711V224H189.715C182.141 224 176 230.141 176 237.711V274.285C176 281.859 182.141 288 189.715 288H240V338.285C240 345.859 246.141 352 253.715 352H290.285C297.859 352 304 345.859 304 338.285V288H354.285C361.859 288 368 281.859 368 274.285V237.711C368 230.141 361.859 224 354.285 224Z" })
  }
));
FilesMedicalSolid.displayName = "FilesMedicalSolid";
var FilesMedical_default = FilesMedicalSolid;
