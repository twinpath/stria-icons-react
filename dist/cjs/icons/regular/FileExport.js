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
const FileExportRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M568.969 303.031L488.969 223.031C479.594 213.656 464.406 213.656 455.031 223.031S445.656 247.594 455.031 256.969L494.062 296H216C202.75 296 192 306.75 192 320S202.75 344 216 344H494.062L455.031 383.031C450.344 387.719 448 393.844 448 400S450.344 412.281 455.031 416.969C464.406 426.344 479.594 426.344 488.969 416.969L568.969 336.969C578.344 327.594 578.344 312.406 568.969 303.031ZM360.002 384H360C346.746 384 336.002 394.742 336.002 408V448C336.002 456.836 328.838 464 320.002 464H64.018C55.182 464 48.018 456.836 48.018 448L48 64.125C48 55.289 55.164 48.125 64 48.125H224.008V128C224.008 145.672 238.334 160 256.008 160H336.002V232C336.002 245.254 346.746 256 360 256H360.002C373.256 256 384 245.254 384 232V138.645C384 121.668 377.258 105.387 365.254 93.383L290.627 18.746C278.625 6.742 262.348 0 245.375 0H63.996C28.65 0 -0.002 28.656 0 64L0.02 448C0.021 483.344 28.676 512 64.023 512H320C355.199 512 384 483.199 384 448V408C384 394.742 373.256 384 360.002 384Z" })
  }
));
FileExportRegular.displayName = "FileExportRegular";
var FileExport_default = FileExportRegular;
