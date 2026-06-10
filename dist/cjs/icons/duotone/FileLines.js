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
var FileLines_exports = {};
__export(FileLines_exports, {
  default: () => FileLines_default
});
module.exports = __toCommonJS(FileLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileLinesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM272 416H112C103.164 416 96 408.836 96 400S103.164 384 112 384H272C280.836 384 288 391.164 288 400S280.836 416 272 416ZM272 352H112C103.164 352 96 344.836 96 336S103.164 320 112 320H272C280.836 320 288 327.164 288 336S280.836 352 272 352ZM272 288H112C103.164 288 96 280.836 96 272S103.164 256 112 256H272C280.836 256 288 263.164 288 272S280.836 288 272 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM272 384H112C103.164 384 96 391.164 96 400S103.164 416 112 416H272C280.836 416 288 408.836 288 400S280.836 384 272 384ZM272 320H112C103.164 320 96 327.164 96 336S103.164 352 112 352H272C280.836 352 288 344.836 288 336S280.836 320 272 320ZM272 256H112C103.164 256 96 263.164 96 272S103.164 288 112 288H272C280.836 288 288 280.836 288 272S280.836 256 272 256Z" })
    ]
  }
));
FileLinesDuotone.displayName = "FileLinesDuotone";
var FileLines_default = FileLinesDuotone;
