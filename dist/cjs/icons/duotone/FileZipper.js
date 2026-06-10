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
var FileZipper_exports = {};
__export(FileZipper_exports, {
  default: () => FileZipper_default
});
module.exports = __toCommonJS(FileZipper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileZipperDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM96 32H160V64H96V32ZM96 96H160V128H96V96ZM96 160H160V192H96V160ZM128.268 416C87.703 416 57.51 379.547 65.439 340.547L96 224H160L190.943 340.852C198.721 379.699 168.525 416 128.268 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.831 32H95.831V64H159.831V32ZM159.831 160H95.831V192H159.831V160ZM159.831 96H95.831V128H159.831V96ZM255.831 0V128H383.831L255.831 0ZM159.831 224H95.831L65.27 340.547C57.34 379.547 87.534 416 128.098 416C168.356 416 198.551 379.699 190.774 340.852L159.831 224ZM143.831 368H111.831C102.995 368 95.831 360.836 95.831 352S102.995 336 111.831 336H143.831C152.667 336 159.831 343.164 159.831 352S152.667 368 143.831 368Z" })
    ]
  }
));
FileZipperDuotone.displayName = "FileZipperDuotone";
var FileZipper_default = FileZipperDuotone;
