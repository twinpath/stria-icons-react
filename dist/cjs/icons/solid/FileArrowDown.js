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
var FileArrowDown_exports = {};
__export(FileArrowDown_exports, {
  default: () => FileArrowDown_default
});
module.exports = __toCommonJS(FileArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileArrowDownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H256V0L384 128ZM256 160H384V464C384 490.508 362.508 512 336 512H48C21.492 512 0 490.508 0 464V48C0 21.492 21.492 0 48 0H224V128C224 145.672 238.328 160 256 160ZM255.031 295.031L216 334.062V232C216 218.75 205.25 208 192 208S168 218.75 168 232V334.062L128.969 295.031C124.281 290.344 118.156 288 112 288S99.719 290.344 95.031 295.031C85.656 304.406 85.656 319.594 95.031 328.969L175.031 408.969C184.406 418.344 199.594 418.344 208.969 408.969L288.969 328.969C298.344 319.594 298.344 304.406 288.969 295.031S264.406 285.656 255.031 295.031Z" })
  }
));
FileArrowDownSolid.displayName = "FileArrowDownSolid";
var FileArrowDown_default = FileArrowDownSolid;
