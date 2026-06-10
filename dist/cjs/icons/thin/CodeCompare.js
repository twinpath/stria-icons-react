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
var CodeCompare_exports = {};
__export(CodeCompare_exports, {
  default: () => CodeCompare_default
});
module.exports = __toCommonJS(CodeCompare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CodeCompareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 96C280 93.625 278.938 91.375 277.125 89.844L181.125 9.844C177.766 7.062 172.703 7.469 169.859 10.875C167.031 14.281 167.484 19.312 170.875 22.156L249.898 88H144C104.297 88 72 120.312 72 160V352.805C40.475 356.781 16 383.391 16 416C16 451.348 44.654 480 80 480C115.348 480 144 451.348 144 416C144 383.391 119.527 356.781 88 352.805V160C88 129.125 113.125 104 144 104H249.898L170.875 169.844C167.484 172.688 167.031 177.719 169.859 181.125C171.438 183.031 173.719 184 176 184C177.812 184 179.625 183.406 181.125 182.156L277.125 102.156C278.938 100.625 280 98.375 280 96ZM128 416C128 442.469 106.467 464 80 464S32 442.469 32 416S53.533 368 80 368S128 389.531 128 416ZM256 98.914V93.086L259.5 96L256 98.914ZM432 32C396.654 32 368 60.652 368 96C368 128.609 392.475 155.219 424 159.195V352C424 382.875 398.875 408 368 408H262.102L341.125 342.156C344.516 339.312 344.969 334.281 342.141 330.875C339.312 327.437 334.25 327 330.875 329.844L234.875 409.844C233.062 411.375 232 413.625 232 416S233.062 420.625 234.875 422.156L330.875 502.156C332.375 503.406 334.188 504 336 504C338.281 504 340.562 503.031 342.141 501.125C344.969 497.719 344.516 492.687 341.125 489.844L262.102 424H368C407.703 424 440 391.688 440 352V159.195C471.527 155.219 496 128.609 496 96C496 60.652 467.348 32 432 32ZM256 418.914L252.5 416L256 413.086V418.914ZM432 144C405.533 144 384 122.469 384 96S405.533 48 432 48S480 69.531 480 96S458.467 144 432 144Z" })
  }
));
CodeCompareThin.displayName = "CodeCompareThin";
var CodeCompare_default = CodeCompareThin;
