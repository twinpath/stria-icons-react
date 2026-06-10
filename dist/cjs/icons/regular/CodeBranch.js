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
const CodeBranchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80C448 35.816 412.184 0 368 0C323.818 0 288 35.816 288 80C288 115.766 311.625 145.688 344 155.93V192C344 214.062 326.062 232 304 232H144C129.523 232 116.057 235.848 104 242.062V155.93C136.377 145.688 160 115.766 160 80C160 35.816 124.184 0 80 0C35.818 0 0 35.816 0 80C0 115.766 23.625 145.688 56 155.93V356.07C23.625 366.312 0 396.234 0 432C0 476.184 35.818 512 80 512C124.184 512 160 476.184 160 432C160 396.234 136.377 366.312 104 356.07V320C104 297.938 121.938 280 144 280H304C352.531 280 392 240.531 392 192V155.93C424.377 145.688 448 115.766 448 80ZM80 48C97.645 48 112 62.355 112 80S97.645 112 80 112S48 97.645 48 80S62.355 48 80 48ZM80 464C62.355 464 48 449.645 48 432S62.355 400 80 400S112 414.355 112 432S97.645 464 80 464ZM368 112C350.355 112 336 97.645 336 80S350.355 48 368 48S400 62.355 400 80S385.645 112 368 112Z" })
  }
));
CodeBranchRegular.displayName = "CodeBranchRegular";
var CodeBranch_default = CodeBranchRegular;
