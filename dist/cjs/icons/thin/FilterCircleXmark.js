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
const FilterCircleXmarkThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488.563 311.43C485.438 308.305 480.376 308.305 477.251 311.43L432.001 356.688L386.751 311.43C383.626 308.305 378.563 308.305 375.438 311.43S372.313 319.617 375.438 322.742L420.688 368L375.438 413.258C372.313 416.383 372.313 421.445 375.438 424.57C377.001 426.133 379.032 426.914 381.094 426.914S385.188 426.133 386.751 424.57L432.001 379.312L477.251 424.57C478.813 426.133 480.844 426.914 482.907 426.914S487.001 426.133 488.563 424.57C491.688 421.445 491.688 416.383 488.563 413.258L443.313 368L488.563 322.742C491.688 319.617 491.688 314.555 488.563 311.43ZM432.001 224C352.471 224 288.001 288.471 288.001 368S352.471 512 432.001 512S576.001 447.529 576.001 368S511.53 224 432.001 224ZM432.001 496C361.42 496 304.001 438.58 304.001 368S361.42 240 432.001 240S560.001 297.42 560.001 368S502.581 496 432.001 496ZM211.401 374.531C209.27 373.039 208.001 370.602 208.001 368V269.051L204.317 264.609L19.692 41.973C13.969 35.07 16.274 28.102 17.532 25.426C20.305 19.523 25.977 16 32.704 16H479.297C486.024 16 491.696 19.523 494.469 25.426C495.727 28.102 498.032 35.07 492.309 41.971L379.047 178.553C375.758 182.518 377.02 188.51 381.627 190.814C384.954 192.477 388.989 191.627 391.362 188.766L504.626 52.186C521.965 31.275 506.79 0 479.297 0H32.704C5.211 0 -9.964 31.275 7.376 52.186L192.001 274.822V368C192.001 375.828 195.813 383.172 202.251 387.656L243.413 416.463C248.715 420.174 256.001 416.381 256.001 409.908C256.001 407.297 254.725 404.85 252.586 403.354L211.401 374.531Z" })
  }
));
FilterCircleXmarkThin.displayName = "FilterCircleXmarkThin";
var FilterCircleXmark_default = FilterCircleXmarkThin;
