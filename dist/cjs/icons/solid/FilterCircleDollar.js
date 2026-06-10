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
var FilterCircleDollar_exports = {};
__export(FilterCircleDollar_exports, {
  default: () => FilterCircleDollar_default
});
module.exports = __toCommonJS(FilterCircleDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilterCircleDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M382.758 199.143L504.625 52.186C521.965 31.275 506.787 0 479.299 0H32.701C5.213 0 -9.965 31.275 7.375 52.186L192 274.822V368C192 375.828 195.813 383.172 202.25 387.656L269.125 434.455C260.719 413.93 256 391.516 256 368C256 288.057 309.625 220.51 382.758 199.143ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM484.627 404.75C481.518 422.719 467.594 434.369 448.033 438.223V448C448.033 456.844 440.877 464 432.033 464S416.033 456.844 416.033 448V437.916C406.217 435.891 396.867 432.475 389.315 429.75C380.971 426.797 376.627 417.656 379.565 409.328C382.533 401 391.783 396.703 400.002 399.594C416.207 405.4 419.955 406.484 424.846 407.219C437.971 409.312 451.721 407.219 453.065 399.297C454.748 389.664 440.805 387.184 422.533 381.906C407.752 377.562 373.127 367.406 379.408 331.234C382.502 313.189 396.283 301.203 416.033 297.418V288C416.033 279.156 423.19 272 432.033 272S448.033 279.156 448.033 288V298.223C453.68 299.402 459.555 300.855 465.252 302.844C473.596 305.734 478.002 314.844 475.127 323.203C472.19 331.563 463.127 336 454.752 333.063C449.533 331.266 444.033 329.547 439.033 328.75C426.19 326.766 412.283 328.813 410.908 336.703C409.365 345.896 422.137 348.459 436.377 352.594C456.783 358.422 490.94 368.188 484.627 404.75Z" })
  }
));
FilterCircleDollarSolid.displayName = "FilterCircleDollarSolid";
var FilterCircleDollar_default = FilterCircleDollarSolid;
