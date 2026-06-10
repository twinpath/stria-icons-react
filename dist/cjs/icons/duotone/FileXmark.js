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
var FileXmark_exports = {};
__export(FileXmark_exports, {
  default: () => FileXmark_default
});
module.exports = __toCommonJS(FileXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileXmarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V128H256ZM272.969 367.031C282.344 376.406 282.344 391.594 272.969 400.969C263.586 410.348 248.406 410.34 239.031 400.969L192 353.938L144.969 400.969C135.586 410.348 120.406 410.34 111.031 400.969C101.656 391.594 101.656 376.406 111.031 367.031L158.062 320L111.031 272.969C101.656 263.594 101.656 248.406 111.031 239.031S135.594 229.656 144.969 239.031L192 286.062L239.031 239.031C248.406 229.656 263.594 229.656 272.969 239.031S282.344 263.594 272.969 272.969L225.938 320L272.969 367.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM272.969 239.031C263.594 229.656 248.406 229.656 239.031 239.031L192 286.062L144.969 239.031C135.594 229.656 120.406 229.656 111.031 239.031S101.656 263.594 111.031 272.969L158.063 320L111.031 367.031C101.656 376.406 101.656 391.594 111.031 400.969C120.406 410.34 135.586 410.348 144.969 400.969L192 353.938L239.031 400.969C248.406 410.34 263.586 410.348 272.969 400.969C282.344 391.594 282.344 376.406 272.969 367.031L225.938 320L272.969 272.969C282.344 263.594 282.344 248.406 272.969 239.031Z" })
    ]
  }
));
FileXmarkDuotone.displayName = "FileXmarkDuotone";
var FileXmark_default = FileXmarkDuotone;
