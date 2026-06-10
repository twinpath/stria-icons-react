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
const CodeBranchSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80C448 35.816 412.184 0 368 0C323.818 0 288 35.816 288 80C288 112.789 307.771 140.891 336 153.246V192C336 209.656 321.641 224 304 224H144C132.725 224 122.059 226.312 112 229.898V153.246C140.232 140.891 160 112.789 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 112.789 19.771 140.891 48 153.246V358.754C19.771 371.109 0 399.211 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 399.211 140.232 371.109 112 358.754V320C112 302.344 126.359 288 144 288H304C356.938 288 400 244.938 400 192V153.246C428.232 140.891 448 112.789 448 80ZM80 56C93.234 56 104 66.766 104 80S93.234 104 80 104C66.768 104 56 93.234 56 80S66.768 56 80 56ZM80 456C66.768 456 56 445.234 56 432S66.768 408 80 408C93.234 408 104 418.766 104 432S93.234 456 80 456ZM368 56C381.234 56 392 66.766 392 80S381.234 104 368 104C354.768 104 344 93.234 344 80S354.768 56 368 56Z" })
  }
));
CodeBranchSolid.displayName = "CodeBranchSolid";
var CodeBranch_default = CodeBranchSolid;
