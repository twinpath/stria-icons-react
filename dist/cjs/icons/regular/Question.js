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
var Question_exports = {};
__export(Question_exports, {
  default: () => Question_default
});
module.exports = __toCommonJS(Question_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const QuestionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 392C121.908 392 104 409.908 104 432S121.908 472 144 472S184 454.092 184 432S166.092 392 144 392ZM207.406 32H112.594C50.5 32 0 82.5 0 144.578V160C0 177.672 14.312 192 32 192S64 177.672 64 160V144.578C64 117.797 85.812 96 112.594 96H207.406C234.188 96 256 117.797 256 144.578C256 162.203 246.438 178.484 231.031 187.062L144.938 234.891C124.625 246.172 112 267.609 112 290.828V320C112 337.672 126.312 352 144 352S176 337.672 176 320V290.828L262.125 243C297.812 223.141 320 185.422 320 144.578C320 82.5 269.5 32 207.406 32Z" })
  }
));
QuestionRegular.displayName = "QuestionRegular";
var Question_default = QuestionRegular;
