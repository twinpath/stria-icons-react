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
var CodeBranch_exports = {};
__export(CodeBranch_exports, {
  default: () => CodeBranch_default
});
module.exports = __toCommonJS(CodeBranch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeBranchThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 448C16 483.348 44.654 512 80 512S144 483.348 144 448S115.346 384 80 384S16 412.652 16 448ZM80 400C106.467 400 128 421.531 128 448S106.467 496 80 496S32 474.469 32 448S53.533 400 80 400ZM368 0C332.654 0 304 28.652 304 64C304 96.609 328.475 123.219 360 127.195V160C360 208.531 320.531 248 272 248H176C138.826 248 106.393 267.766 88 297.18V127.195C119.525 123.219 144 96.609 144 64C144 28.652 115.346 0 80 0S16 28.652 16 64C16 96.609 40.475 123.219 72 127.195V384H80H88V352C88 303.469 127.469 264 176 264H272C329.344 264 376 217.344 376 160V127.195C407.525 123.219 432 96.609 432 64C432 28.652 403.346 0 368 0ZM80 112C53.533 112 32 90.469 32 64S53.533 16 80 16S128 37.531 128 64S106.467 112 80 112ZM368 112C341.533 112 320 90.469 320 64S341.533 16 368 16S416 37.531 416 64S394.467 112 368 112Z" })
  }
));
CodeBranchThin.displayName = "CodeBranchThin";
var CodeBranch_default = CodeBranchThin;
