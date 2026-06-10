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
var ClipboardPrescription_exports = {};
__export(ClipboardPrescription_exports, {
  default: () => ClipboardPrescription_default
});
module.exports = __toCommonJS(ClipboardPrescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClipboardPrescriptionDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 256C192 264.875 184.875 272 176 272H128V240H176C184.875 240 192 247.125 192 256ZM384 112V464C384 490.51 362.51 512 336 512H48C21.49 512 0 490.51 0 464V112C0 85.49 21.49 64 48 64H128C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64H336C362.51 64 384 85.49 384 112ZM304 409.375L273.875 379.375L303.875 349.375C310.125 343.125 310.125 333 303.875 326.75L292.5 315.5C286.25 309.25 276.125 309.25 269.875 315.5L240 345.375L206.5 311.875C226.375 301 240 280.25 240 256C240 220.625 211.375 192 176 192H96C87.125 192 80 199.125 80 208V368C80 376.875 87.125 384 96 384H112C120.875 384 128 376.875 128 368V320H146.75L205.999 379.25L176 409.375C169.75 415.625 169.75 425.75 176 432L187.25 443.25C193.5 449.5 203.75 449.5 209.999 443.25L240 413.25L269.999 443.25C276.25 449.5 286.5 449.5 292.75 443.25L304 432C310.25 425.75 310.25 415.625 304 409.375Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 64C256 28.652 227.346 0 192 0S128 28.652 128 64C92.654 64 64 92.652 64 128V144C64 152.836 71.164 160 80 160H304C312.836 160 320 152.836 320 144V128C320 92.652 291.346 64 256 64ZM192 88C178.746 88 168 77.254 168 64C168 50.744 178.746 40 192 40S216 50.744 216 64C216 77.254 205.254 88 192 88ZM273.875 379.375L303.875 349.375C310.125 343.125 310.125 333 303.875 326.75L292.5 315.5C286.25 309.25 276.125 309.25 269.875 315.5L240 345.375L206.5 311.875C226.375 301 240 280.25 240 256C240 220.625 211.375 192 176 192H96C87.125 192 80 199.125 80 208V368C80 376.875 87.125 384 96 384H112C120.875 384 128 376.875 128 368V320H146.75L205.999 379.25L176 409.375C169.75 415.625 169.75 425.75 176 432L187.25 443.25C193.5 449.5 203.75 449.5 209.999 443.25L240 413.25L269.999 443.25C276.25 449.5 286.5 449.5 292.75 443.25L304 432C310.25 425.75 310.25 415.625 304 409.375L273.875 379.375ZM176 272H128V240H176C184.875 240 192 247.125 192 256S184.875 272 176 272Z" })
    ]
  }
));
ClipboardPrescriptionDuotone.displayName = "ClipboardPrescriptionDuotone";
var ClipboardPrescription_default = ClipboardPrescriptionDuotone;
