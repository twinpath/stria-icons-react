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
var FileInvoice_exports = {};
__export(FileInvoice_exports, {
  default: () => FileInvoice_default
});
module.exports = __toCommonJS(FileInvoice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileInvoiceSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM288 256H96V320H288V256ZM224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM64 72C64 67.625 67.625 64 72 64H152C156.375 64 160 67.625 160 72V88C160 92.375 156.375 96 152 96H72C67.625 96 64 92.375 64 88V72ZM64 136C64 131.625 67.625 128 72 128H152C156.375 128 160 131.625 160 136V152C160 156.375 156.375 160 152 160H72C67.625 160 64 156.375 64 152V136ZM320 440C320 444.375 316.375 448 312 448H232C227.625 448 224 444.375 224 440V424C224 419.625 227.625 416 232 416H312C316.375 416 320 419.625 320 424V440ZM320 240V336C320 344.875 312.875 352 304 352H80C71.125 352 64 344.875 64 336V240C64 231.125 71.125 224 80 224H304C312.875 224 320 231.125 320 240Z" })
  }
));
FileInvoiceSolid.displayName = "FileInvoiceSolid";
var FileInvoice_default = FileInvoiceSolid;
