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
var CodeFork_exports = {};
__export(CodeFork_exports, {
  default: () => CodeFork_default
});
module.exports = __toCommonJS(CodeFork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeForkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80C448 35.816 412.184 0 368 0S288 35.816 288 80C288 112.789 307.768 140.893 336 153.246V192C336 209.656 321.656 224 304 224H144C126.344 224 112 209.656 112 192V153.246C140.232 140.893 160 112.789 160 80C160 35.816 124.184 0 80 0S0 35.816 0 80C0 112.789 19.768 140.893 48 153.246V192C48 244.938 91.062 288 144 288H192V358.754C163.768 371.107 144 399.211 144 432C144 476.184 179.816 512 224 512S304 476.184 304 432C304 399.211 284.232 371.107 256 358.754V288H304C356.938 288 400 244.938 400 192V153.246C428.232 140.893 448 112.789 448 80ZM80 56C93.234 56 104 66.766 104 80S93.234 104 80 104S56 93.234 56 80S66.766 56 80 56ZM224 456C210.766 456 200 445.234 200 432S210.766 408 224 408S248 418.766 248 432S237.234 456 224 456ZM368 56C381.234 56 392 66.766 392 80S381.234 104 368 104S344 93.234 344 80S354.766 56 368 56Z" })
  }
));
CodeForkSolid.displayName = "CodeForkSolid";
var CodeFork_default = CodeForkSolid;
