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
var FileExport_exports = {};
__export(FileExport_exports, {
  default: () => FileExport_default
});
module.exports = __toCommonJS(FileExport_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileExportThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M573.656 298.93L465.656 190.93C464.094 189.367 462.062 188.586 460 188.586S455.906 189.367 454.344 190.93C451.219 194.055 451.219 199.117 454.344 202.242L548.688 296.586H200C195.594 296.586 192 300.164 192 304.586S195.594 312.586 200 312.586H548.688L455.516 405.758C452.391 408.883 452.391 413.945 455.516 417.07S463.703 420.195 466.828 417.07L573.656 310.242C576.781 307.117 576.781 302.055 573.656 298.93ZM376 352C371.582 352 368 355.582 368 360V448C368 474.508 346.51 496 320 496H64C37.49 496 16 474.508 16 448V64C16 37.492 37.49 16 64 16H208V136C208 158.094 225.908 176 248 176H368V248C368 252.418 371.582 256 376 256S384 252.418 384 248V173.254C384 164.766 380.627 156.625 374.625 150.621L233.371 9.375C227.367 3.371 219.227 0 210.736 0H64C28.654 0 0 28.652 0 64V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V360C384 355.582 380.418 352 376 352ZM224 22.629L361.375 160H248C234.781 160 224 149.234 224 136V22.629Z" })
  }
));
FileExportThin.displayName = "FileExportThin";
var FileExport_default = FileExportThin;
