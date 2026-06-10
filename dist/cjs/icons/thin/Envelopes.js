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
var Envelopes_exports = {};
__export(Envelopes_exports, {
  default: () => Envelopes_default
});
module.exports = __toCommonJS(Envelopes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 32H176C149.5 32 128 53.5 128 80V336C128 362.5 149.5 384 176 384H560C586.5 384 608 362.5 608 336V80C608 53.5 586.5 32 560 32ZM592 336C592 353.645 577.645 368 560 368H176C158.355 368 144 353.645 144 336V133.289L344.344 280.219C351.406 285.406 359.719 288 368 288S384.594 285.406 391.656 280.219L592 133.289V336ZM592 113.461L382.219 267.312C373.719 273.531 362.281 273.531 353.781 267.312L144 113.461V80C144 62.355 158.355 48 176 48H560C577.645 48 592 62.355 592 80V113.461ZM504 416C499.578 416 496 419.594 496 424C496 446.062 478.062 464 456 464H104C73.125 464 48 438.875 48 408V152C48 129.938 65.938 112 88 112C92.422 112 96 108.406 96 104S92.422 96 88 96C57.125 96 32 121.125 32 152V408C32 447.688 64.297 480 104 480H456C486.875 480 512 454.875 512 424C512 419.594 508.422 416 504 416Z" })
  }
));
EnvelopesThin.displayName = "EnvelopesThin";
var Envelopes_default = EnvelopesThin;
