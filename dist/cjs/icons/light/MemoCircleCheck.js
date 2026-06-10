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
const MemoCircleCheckLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 144C320 135.164 312.838 128 304 128H80C71.164 128 64 135.164 64 144S71.164 160 80 160H304C312.838 160 320 152.836 320 144ZM80 320C71.164 320 64 327.164 64 336S71.164 352 80 352H208C216.838 352 224 344.836 224 336S216.838 320 208 320H80ZM280 480H64C46.326 480 32 465.672 32 448V64C32 46.326 46.326 32 64 32H320C337.674 32 352 46.326 352 64V184C352 192.836 359.164 200 368 200S384 192.836 384 184V64C384 28.652 355.346 0 320 0H64C28.654 0 0 28.652 0 64V448C0 483.346 28.654 512 64 512H280C288.836 512 296 504.836 296 496C296 487.162 288.836 480 280 480ZM288 240C288 231.164 280.838 224 272 224H80C71.164 224 64 231.164 64 240S71.164 256 80 256H272C280.838 256 288 248.836 288 240ZM432.002 224C352.463 224 288 288.463 288 368S352.463 512 432.002 512C511.537 512 576 447.537 576 368S511.537 224 432.002 224ZM432.002 480C370.244 480 320 429.758 320 368S370.244 256 432.002 256C493.758 256 544 306.242 544 368S493.758 480 432.002 480ZM476.688 319.359L413.344 382.703L387.312 356.688C381.062 350.438 370.937 350.438 364.688 356.688S358.438 373.063 364.688 379.312L402.031 416.641C405.156 419.766 409.25 421.328 413.344 421.328S421.531 419.766 424.656 416.641L499.312 341.984C505.562 335.734 505.562 325.609 499.312 319.359S482.938 313.109 476.688 319.359Z" })
  }
));
MemoCircleCheckLight.displayName = "MemoCircleCheckLight";
var MemoCircleCheck_default = MemoCircleCheckLight;
