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
var FileCheck_exports = {};
__export(FileCheck_exports, {
  default: () => FileCheck_default
});
module.exports = __toCommonJS(FileCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileCheckSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 128H256V0L384 128ZM256 160H384V464C384 490.508 362.508 512 336 512H48C21.492 512 0 490.508 0 464V48C0 21.492 21.492 0 48 0H224V128C224 145.672 238.328 160 256 160ZM245.781 264.359L166.656 356.703L136.969 327.016C127.594 317.641 112.406 317.641 103.031 327.016S93.656 351.578 103.031 360.953L151.031 408.953C155.531 413.453 161.656 415.984 168 415.984C168.312 415.984 168.625 415.984 168.906 415.953C175.594 415.703 181.875 412.672 186.219 407.609L282.219 295.609C290.844 285.547 289.687 270.391 279.625 261.766C269.594 253.172 254.438 254.297 245.781 264.359Z" })
  }
));
FileCheckSolid.displayName = "FileCheckSolid";
var FileCheck_default = FileCheckSolid;
