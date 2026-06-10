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
var MemoCircleCheck_exports = {};
__export(MemoCircleCheck_exports, {
  default: () => MemoCircleCheck_default
});
module.exports = __toCommonJS(MemoCircleCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MemoCircleCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 198.822V64C384 28.652 355.346 0 320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H320C323.357 512 326.584 511.51 329.803 511.012C285.209 479.051 256 426.926 256 368C256 287.609 310.24 219.787 384 198.822ZM176 352H80C71.164 352 64 344.836 64 336S71.164 320 80 320H176C184.838 320 192 327.164 192 336S184.838 352 176 352ZM240 256H80C71.164 256 64 248.836 64 240S71.164 224 80 224H240C248.838 224 256 231.164 256 240S248.838 256 240 256ZM80 160C71.164 160 64 152.836 64 144S71.164 128 80 128H304C312.838 128 320 135.164 320 144S312.838 160 304 160H80Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 160H304C312.838 160 320 152.836 320 144S312.838 128 304 128H80C71.164 128 64 135.164 64 144S71.164 160 80 160ZM176 320H80C71.164 320 64 327.164 64 336S71.164 352 80 352H176C184.838 352 192 344.836 192 336S184.838 320 176 320ZM240 224H80C71.164 224 64 231.164 64 240S71.164 256 80 256H240C248.838 256 256 248.836 256 240S248.838 224 240 224ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM499.312 341.984L424.656 416.641C421.531 419.766 417.438 421.328 413.344 421.328S405.156 419.766 402.031 416.641L364.688 379.312C358.438 373.062 358.438 362.937 364.688 356.688S381.063 350.438 387.312 356.688L413.344 382.703L476.688 319.359C482.938 313.109 493.063 313.109 499.312 319.359S505.562 335.734 499.312 341.984Z" })
    ]
  }
));
MemoCircleCheckDuotone.displayName = "MemoCircleCheckDuotone";
var MemoCircleCheck_default = MemoCircleCheckDuotone;
