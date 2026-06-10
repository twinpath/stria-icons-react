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
var FloppyDiskCircleXmark_exports = {};
__export(FloppyDiskCircleXmark_exports, {
  default: () => FloppyDiskCircleXmark_default
});
module.exports = __toCommonJS(FloppyDiskCircleXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FloppyDiskCircleXmarkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432.002 224H432C422.059 224 412.352 225.008 402.979 226.926C337.354 240.352 288 298.404 288 368C288 447.537 352.463 512 432 512S576 447.537 576 368S511.537 224 432.002 224ZM488.514 401.908C494.756 408.15 494.756 418.271 488.514 424.514C482.273 430.756 472.15 430.756 465.908 424.514L432.002 390.607L398.092 424.518C391.85 430.76 381.729 430.76 375.486 424.518S369.244 408.154 375.486 401.912L409.396 368.002L375.482 334.088C369.24 327.846 369.24 317.725 375.482 311.482S391.848 305.24 398.09 311.482L432.002 345.396L465.912 311.486C472.154 305.244 482.275 305.244 488.518 311.486S494.76 327.85 488.518 334.092L454.607 368.002L488.514 401.908ZM224 256C188.799 256 160 284.799 160 320C160 355.199 188.799 384 224 384C235.834 384 246.809 380.527 256.346 374.867C256.258 372.57 256 370.318 256 368C256 337.742 263.65 309.273 277.1 284.404C265.578 267.307 246.049 256 224 256ZM64 432C55.164 432 48 424.836 48 416V96C48 87.162 55.164 80 64 80H80V184C80 197.254 90.746 208 104 208H296C309.254 208 320 197.254 320 184V83.875L398.25 162.125C399.371 163.244 400 164.766 400 166.35V195.047C410.391 193.135 421.057 192 432 192C437.402 192 442.723 192.33 448 192.807V163.799C448 151.123 442.965 138.963 434 130L350.053 46.053C341.055 37.055 328.85 32 316.125 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H296.234C284.455 465.736 275.031 449.516 268.182 432H64ZM128 80H272V160H128V80Z" })
  }
));
FloppyDiskCircleXmarkRegular.displayName = "FloppyDiskCircleXmarkRegular";
var FloppyDiskCircleXmark_default = FloppyDiskCircleXmarkRegular;
