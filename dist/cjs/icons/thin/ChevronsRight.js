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
var ChevronsRight_exports = {};
__export(ChevronsRight_exports, {
  default: () => ChevronsRight_default
});
module.exports = __toCommonJS(ChevronsRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M194.774 45.934L428.18 256L194.774 466.066C193.024 467.629 192.133 469.816 192.133 472.004C192.133 473.91 192.805 475.817 194.18 477.348C197.149 480.629 202.195 480.91 205.492 477.942L445.492 261.938C448.836 258.938 448.836 253.062 445.492 250.062L205.492 34.058C202.195 31.09 197.149 31.371 194.18 34.652C191.195 37.934 191.492 43.027 194.774 45.934ZM253.377 261.938C256.721 258.938 256.721 253.062 253.377 250.062L13.377 34.058C10.08 31.09 5.033 31.371 2.065 34.652C-0.92 37.934 -0.623 43.027 2.658 45.934L236.065 256L2.658 466.066C0.908 467.629 0.018 469.816 0.018 472.004C0.018 473.91 0.69 475.817 2.065 477.348C5.033 480.629 10.08 480.91 13.377 477.942L253.377 261.938Z" })
  }
));
ChevronsRightThin.displayName = "ChevronsRightThin";
var ChevronsRight_default = ChevronsRightThin;
