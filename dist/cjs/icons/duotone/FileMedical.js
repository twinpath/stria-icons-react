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
var FileMedical_exports = {};
__export(FileMedical_exports, {
  default: () => FileMedical_default
});
module.exports = __toCommonJS(FileMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileMedicalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V128H256ZM304 362.001C304 370.836 296.836 378.001 288 378.001H233.999V432C233.999 440.836 226.836 448 217.999 448H165.999C157.164 448 149.999 440.836 149.999 432V378.001H96C87.164 378.001 80 370.836 80 362.001V310.001C80 301.164 87.164 294.001 96 294.001H149.999V240C149.999 231.164 157.164 224 165.999 224H217.999C226.836 224 233.999 231.164 233.999 240V294.001H288C296.836 294.001 304 301.164 304 310.001V362.001Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 294.001H233.999V240C233.999 231.164 226.836 224 217.999 224H165.999C157.164 224 149.999 231.164 149.999 240V294.001H96C87.164 294.001 80 301.164 80 310.001V362.001C80 370.836 87.164 378.001 96 378.001H149.999V432C149.999 440.836 157.164 448 165.999 448H217.999C226.836 448 233.999 440.836 233.999 432V378.001H288C296.836 378.001 304 370.836 304 362.001V310.001C304 301.164 296.836 294.001 288 294.001ZM256 0V128H384L256 0Z" })
    ]
  }
));
FileMedicalDuotone.displayName = "FileMedicalDuotone";
var FileMedical_default = FileMedicalDuotone;
