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
var Snooze_exports = {};
__export(Snooze_exports, {
  default: () => Snooze_default
});
module.exports = __toCommonJS(Snooze_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnoozeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 176V144C304 135.125 296.875 128 288 128H253.25L310.625 70.625C316.625 64.625 320 56.5 320 48V32C320 14.375 305.625 0 288 0H184C175.125 0 168 7.125 168 16V48C168 56.875 175.125 64 184 64H226.75L169.375 121.375C163.375 127.375 160 135.5 160 144V160C160 177.625 174.375 192 192 192H288C296.875 192 304 184.875 304 176ZM448 272V256C448 238.375 433.625 224 416 224H320C311.125 224 304 231.125 304 240V272C304 280.875 311.125 288 320 288H354.75L297.375 345.375C291.375 351.375 288 359.5 288 368V384C288 401.625 302.375 416 320 416H424C432.875 416 440 408.875 440 400V368C440 359.125 432.875 352 424 352H381.25L438.625 294.625C444.625 288.625 448 280.5 448 272Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 224H40C26.75 224 16 234.75 16 248V296C16 309.25 26.75 320 40 320H90.5L8.125 412.625C2.875 418.5 0 426.125 0 433.875V480C0 497.625 14.375 512 32 512H184C197.25 512 208 501.25 208 488V440C208 426.75 197.25 416 184 416H133.5L215.875 323.375C221.125 317.5 224 309.875 224 302.125V256C224 238.375 209.625 224 192 224Z" })
    ]
  }
));
SnoozeDuotone.displayName = "SnoozeDuotone";
var Snooze_default = SnoozeDuotone;
