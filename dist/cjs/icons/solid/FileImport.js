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
var FileImport_exports = {};
__export(FileImport_exports, {
  default: () => FileImport_default
});
module.exports = __toCommonJS(FileImport_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileImportSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0V128H512L384 0ZM352 128V0H176C149.492 0 128 21.492 128 48V288H302.062L263.031 248.969C253.656 239.594 253.656 224.406 263.031 215.031S287.594 205.656 296.969 215.031L376.969 295.031C386.344 304.406 386.344 319.594 376.969 328.969L296.969 408.969C287.594 418.344 272.406 418.344 263.031 408.969C258.344 404.281 256 398.156 256 392S258.344 379.719 263.031 375.031L302.062 336H128V464C128 490.508 149.492 512 176 512H464C490.508 512 512 490.508 512 464V160H384C366.328 160 352 145.672 352 128ZM24 288C10.746 288 0 298.742 0 312C0 325.254 10.746 336 24 336H128V288H24Z" })
  }
));
FileImportSolid.displayName = "FileImportSolid";
var FileImport_default = FileImportSolid;
