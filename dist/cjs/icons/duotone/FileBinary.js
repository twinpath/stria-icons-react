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
var FileBinary_exports = {};
__export(FileBinary_exports, {
  default: () => FileBinary_default
});
module.exports = __toCommonJS(FileBinary_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileBinaryDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 272H112C103.188 272 96 279.172 96 288V368C96 376.828 103.188 384 112 384H144C152.812 384 160 376.828 160 368V288C160 279.172 152.812 272 144 272ZM256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM192 368C192 394.469 170.469 416 144 416H112C85.531 416 64 394.469 64 368V288C64 261.531 85.531 240 112 240H144C170.469 240 192 261.531 192 288V368ZM304 416H240C231.156 416 224 408.844 224 400S231.156 384 240 384H256V272H240C231.156 272 224 264.844 224 256S231.156 240 240 240H272C280.844 240 288 247.156 288 256V384H304C312.844 384 320 391.156 320 400S312.844 416 304 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 0V128H384L256 0ZM304 384H288V256C288 247.156 280.844 240 272 240H240C231.156 240 224 247.156 224 256S231.156 272 240 272H256V384H240C231.156 384 224 391.156 224 400S231.156 416 240 416H304C312.844 416 320 408.844 320 400S312.844 384 304 384ZM144 240H112C85.531 240 64 261.531 64 288V368C64 394.469 85.531 416 112 416H144C170.469 416 192 394.469 192 368V288C192 261.531 170.469 240 144 240ZM160 368C160 376.828 152.812 384 144 384H112C103.188 384 96 376.828 96 368V288C96 279.172 103.188 272 112 272H144C152.812 272 160 279.172 160 288V368Z" })
    ]
  }
));
FileBinaryDuotone.displayName = "FileBinaryDuotone";
var FileBinary_default = FileBinaryDuotone;
