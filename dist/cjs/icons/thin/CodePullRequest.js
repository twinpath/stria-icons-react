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
var CodePullRequest_exports = {};
__export(CodePullRequest_exports, {
  default: () => CodePullRequest_default
});
module.exports = __toCommonJS(CodePullRequest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodePullRequestThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 96C144 60.652 115.348 32 80 32C44.654 32 16 60.652 16 96C16 128.609 40.475 155.219 72 159.195V352.805C40.475 356.781 16 383.391 16 416C16 451.348 44.654 480 80 480C115.348 480 144 451.348 144 416C144 383.391 119.527 356.781 88 352.805V159.195C119.527 155.219 144 128.609 144 96ZM128 416C128 442.469 106.467 464 80 464S32 442.469 32 416S53.533 368 80 368S128 389.531 128 416ZM80 144C53.533 144 32 122.469 32 96S53.533 48 80 48S128 69.531 128 96S106.467 144 80 144ZM440 352.805V160C440 120.312 407.688 88 368 88H262.102L341.125 22.156C344.531 19.312 344.969 14.281 342.156 10.875C339.281 7.437 334.25 7 330.875 9.844L234.875 89.844C233.062 91.375 232 93.625 232 96S233.062 100.625 234.875 102.156L330.875 182.156C332.375 183.406 334.188 184 336 184C338.281 184 340.562 183.031 342.156 181.125C344.969 177.719 344.531 172.687 341.125 169.844L262.102 104H368C398.875 104 424 129.125 424 160V352.805C392.475 356.781 368 383.391 368 416C368 451.348 396.654 480 432 480C467.348 480 496 451.348 496 416C496 383.391 471.527 356.781 440 352.805ZM432 464C405.533 464 384 442.469 384 416S405.533 368 432 368S480 389.531 480 416S458.467 464 432 464Z" })
  }
));
CodePullRequestThin.displayName = "CodePullRequestThin";
var CodePullRequest_default = CodePullRequestThin;
