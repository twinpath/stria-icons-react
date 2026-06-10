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
var CodeMerge_exports = {};
__export(CodeMerge_exports, {
  default: () => CodeMerge_default
});
module.exports = __toCommonJS(CodeMerge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeMergeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 272C288 283.395 290.461 294.188 294.754 304H224C181.488 304 142.451 288.844 112 263.656V358.754C102.189 354.461 91.395 352 80 352S57.812 354.461 48 358.754V153.246C57.812 157.539 68.605 160 80 160C92.48 160 104.143 156.895 114.67 151.797C125.631 202.133 170.43 240 224 240H294.754C290.461 249.812 288 260.605 288 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 352C35.818 352 0 387.816 0 432S35.818 512 80 512C124.184 512 160 476.184 160 432S124.184 352 80 352ZM80 456C66.768 456 56 445.234 56 432S66.768 408 80 408C93.234 408 104 418.766 104 432S93.234 456 80 456ZM80 0C35.818 0 0 35.816 0 80S35.818 160 80 160C124.184 160 160 124.184 160 80S124.184 0 80 0ZM80 104C66.768 104 56 93.234 56 80S66.768 56 80 56C93.234 56 104 66.766 104 80S93.234 104 80 104ZM368 192C323.818 192 288 227.816 288 272S323.818 352 368 352C412.184 352 448 316.184 448 272S412.184 192 368 192ZM368 296C354.768 296 344 285.234 344 272S354.768 248 368 248C381.234 248 392 258.766 392 272S381.234 296 368 296Z" })
    ]
  }
));
CodeMergeDuotone.displayName = "CodeMergeDuotone";
var CodeMerge_default = CodeMergeDuotone;
