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
var FilterCircleXmark_exports = {};
__export(FilterCircleXmark_exports, {
  default: () => FilterCircleXmark_default
});
module.exports = __toCommonJS(FilterCircleXmark_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterCircleXmarkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.758 199.143L504.625 52.186C521.965 31.275 506.787 0 479.299 0H32.701C5.213 0 -9.965 31.275 7.375 52.186L192 274.822V368C192 375.828 195.813 383.172 202.25 387.656L269.125 434.455C260.719 413.93 256 391.516 256 368C256 288.057 309.625 220.51 382.758 199.143Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 224C352.471 224 288 288.471 288 368S352.471 512 432 512S576 447.529 576 368S511.529 224 432 224ZM488.514 401.908C494.756 408.15 494.756 418.271 488.514 424.514C482.273 430.756 472.15 430.756 465.908 424.514L432.002 390.607L398.092 424.518C391.85 430.76 381.729 430.76 375.486 424.518S369.244 408.154 375.486 401.912L409.396 368.002L375.482 334.088C369.24 327.846 369.24 317.725 375.482 311.482S391.848 305.24 398.09 311.482L432.002 345.396L465.912 311.486C472.154 305.244 482.275 305.244 488.518 311.486S494.76 327.85 488.518 334.092L454.607 368.002L488.514 401.908Z" })
    ]
  }
));
FilterCircleXmarkDuotone.displayName = "FilterCircleXmarkDuotone";
var FilterCircleXmark_default = FilterCircleXmarkDuotone;
