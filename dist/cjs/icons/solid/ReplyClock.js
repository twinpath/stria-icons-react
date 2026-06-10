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
var ReplyClock_exports = {};
__export(ReplyClock_exports, {
  default: () => ReplyClock_default
});
module.exports = __toCommonJS(ReplyClock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ReplyClockSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 320C409.266 320 337.352 257.199 322.836 174.625C292.049 170.441 258.887 168.465 223.998 168.064V88.018C223.998 67.346 199.717 56.549 184.311 69.846L8.309 221.846C-2.785 231.408 -2.754 248.596 8.309 258.158L184.311 410.158C199.686 423.455 223.998 412.705 223.998 392.002V304.08C379.092 306.314 445.938 344.814 400.594 489.83C395.563 505.924 415 518.393 428.656 508.455C472.406 476.643 512 415.768 512 354.33C512 341.77 510.83 330.312 509.148 319.336C504.791 319.658 500.439 320 496 320ZM496 0C416.375 0 352 64.375 352 144S416.375 288 496 288S640 223.625 640 144S575.625 0 496 0ZM544 160H489.75C484.375 160 480 155.625 480 150.25V80C480 71.162 487.164 64 496 64C504.838 64 512 71.162 512 80V128H544C552.838 128 560 135.162 560 144C560 152.836 552.838 160 544 160Z" })
  }
));
ReplyClockSolid.displayName = "ReplyClockSolid";
var ReplyClock_default = ReplyClockSolid;
