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
var XmarkToSlot_exports = {};
__export(XmarkToSlot_exports, {
  default: () => XmarkToSlot_default
});
module.exports = __toCommonJS(XmarkToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XmarkToSlotDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 32H144C117.49 32 96 53.492 96 80V400H480V80C480 53.492 458.51 32 432 32ZM368.969 263.031C378.344 272.406 378.344 287.594 368.969 296.969C359.588 306.348 344.404 306.34 335.031 296.969L288 249.938L240.969 296.969C231.588 306.348 216.404 306.34 207.031 296.969C197.656 287.594 197.656 272.406 207.031 263.031L254.062 216L207.031 168.969C197.656 159.594 197.656 144.406 207.031 135.031S231.594 125.656 240.969 135.031L288 182.062L335.031 135.031C344.406 125.656 359.594 125.656 368.969 135.031S378.344 159.594 368.969 168.969L321.938 216L368.969 263.031Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 288H480V368H496C504.836 368 512 375.164 512 384S504.836 400 496 400H80C71.164 400 64 392.836 64 384S71.164 368 80 368H96V288H48C21.492 288 0 309.492 0 336V432C0 458.508 21.492 480 48 480H528C554.508 480 576 458.508 576 432V336C576 309.492 554.508 288 528 288ZM207.031 296.969C216.404 306.34 231.588 306.348 240.969 296.969L288 249.937L335.031 296.969C344.404 306.34 359.588 306.348 368.969 296.969C378.344 287.594 378.344 272.406 368.969 263.031L321.938 216L368.969 168.969C378.344 159.594 378.344 144.406 368.969 135.031S344.406 125.656 335.031 135.031L288 182.062L240.969 135.031C231.594 125.656 216.406 125.656 207.031 135.031S197.656 159.594 207.031 168.969L254.062 216L207.031 263.031C197.656 272.406 197.656 287.594 207.031 296.969Z" })
    ]
  }
));
XmarkToSlotDuotone.displayName = "XmarkToSlotDuotone";
var XmarkToSlot_default = XmarkToSlotDuotone;
