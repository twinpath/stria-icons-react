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
var FaceFlushed_exports = {};
__export(FaceFlushed_exports, {
  default: () => FaceFlushed_default
});
module.exports = __toCommonJS(FaceFlushed_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceFlushedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 200C146.666 200 136 210.75 136 224S146.666 248 160 248S184 237.25 184 224S173.334 200 160 200ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM232 224C232 184.174 199.842 152 160.055 152C120.266 152 88 184.174 88 224C88 263.824 120.266 296 160.055 296C199.842 296 232 263.824 232 224ZM160.055 264C137.969 264 120 246.055 120 224C120 201.943 137.969 184 160.055 184C182.08 184 200 201.943 200 224C200 246.055 182.08 264 160.055 264ZM352 200C338.666 200 328 210.75 328 224S338.666 248 352 248S376 237.25 376 224S365.334 200 352 200ZM352.055 152C312.266 152 280 184.174 280 224C280 263.824 312.266 296 352.055 296C391.842 296 424 263.824 424 224C424 184.174 391.842 152 352.055 152ZM352.055 264C329.969 264 312 246.055 312 224C312 201.943 329.969 184 352.055 184C374.08 184 392 201.943 392 224C392 246.055 374.08 264 352.055 264ZM312.033 335.99H199.967C186.768 335.99 175.99 346.74 175.99 359.99S186.768 383.99 199.967 383.99H312.033C325.232 383.99 336.01 373.24 336.01 359.99S325.232 335.99 312.033 335.99Z" })
  }
));
FaceFlushedRegular.displayName = "FaceFlushedRegular";
var FaceFlushed_default = FaceFlushedRegular;
