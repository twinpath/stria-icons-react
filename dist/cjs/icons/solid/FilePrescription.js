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
var FilePrescription_exports = {};
__export(FilePrescription_exports, {
  default: () => FilePrescription_default
});
module.exports = __toCommonJS(FilePrescription_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilePrescriptionSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 240H128V272H176C184.875 272 192 264.875 192 256S184.875 240 176 240ZM256 0V128H384L256 0ZM224 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V160H256C238.326 160 224 145.672 224 128ZM292.5 315.5L303.875 326.75C310.125 333 310.125 343.125 303.875 349.375L273.999 379.375L304 409.375C310.25 415.625 310.25 425.75 304 432L292.75 443.375C286.5 449.625 276.25 449.625 269.999 443.375L240 413.25L209.999 443.25C203.75 449.5 193.5 449.5 187.25 443.25L176 432C169.75 425.75 169.75 415.625 176 409.375L205.999 379.25L146.75 320H128V368C128 376.875 120.875 384 112 384H96C87.125 384 80 376.875 80 368V208C80 199.125 87.125 192 96 192H176C211.375 192 240 220.625 240 256C240 280.25 226.375 301 206.5 311.875L240 345.375L269.875 315.5C276.125 309.25 286.25 309.25 292.5 315.5Z" })
  }
));
FilePrescriptionSolid.displayName = "FilePrescriptionSolid";
var FilePrescription_default = FilePrescriptionSolid;
