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
const FileImportThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M263.516 402.344C260.391 405.469 260.391 410.531 263.516 413.656S271.703 416.781 274.828 413.656L381.656 306.828C384.781 303.703 384.781 298.641 381.656 295.516L273.656 187.516C272.094 185.953 270.062 185.172 268 185.172S263.906 185.953 262.344 187.516C259.219 190.641 259.219 195.703 262.344 198.828L356.688 293.172H8C3.594 293.172 0 296.75 0 301.172S3.594 309.172 8 309.172H356.688L263.516 402.344ZM502.625 150.621L361.371 9.375C355.367 3.371 347.227 0 338.736 0H192C156.654 0 128 28.652 128 64V248C128 252.418 131.582 256 136 256S144 252.418 144 248V64C144 37.492 165.49 16 192 16H336V136C336 158.094 353.908 176 376 176H496V448C496 474.508 474.51 496 448 496H192C165.49 496 144 474.508 144 448V360C144 355.582 140.418 352 136 352S128 355.582 128 360V448C128 483.344 156.654 512 192 512H448C483.346 512 512 483.344 512 448V173.254C512 164.766 508.627 156.625 502.625 150.621ZM376 160C362.781 160 352 149.234 352 136V22.629L489.375 160H376Z" })
  }
));
FileImportThin.displayName = "FileImportThin";
var FileImport_default = FileImportThin;
