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
const ClipboardPrescriptionRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 64H270.387C262.973 27.484 230.701 0 192 0S121.027 27.484 113.613 64H64C28.654 64 0 92.656 0 128V448C0 483.344 28.654 512 64 512H320C355.346 512 384 483.344 384 448V128C384 92.656 355.346 64 320 64ZM192 48C205.234 48 216 58.766 216 72S205.234 96 192 96S168 85.234 168 72S178.766 48 192 48ZM336 448C336 456.82 328.822 464 320 464H64C55.178 464 48 456.82 48 448V128C48 119.18 55.178 112 64 112H82.264C80.932 117.141 80 122.441 80 128V144C80 152.836 87.164 160 96 160H288C296.836 160 304 152.836 304 144V128C304 122.441 303.068 117.141 301.736 112H320C328.822 112 336 119.18 336 128V448ZM294.156 321.844C286.344 314.031 273.656 314.031 265.844 321.844L240 347.688L207.277 314.965C224.438 304.398 236 285.598 236 264C236 230.906 209.094 204 176 204H104C92.969 204 84 212.969 84 224V368C84 379.031 92.969 388 104 388S124 379.031 124 368V324H159.688L211.688 376L185.844 401.844C178.062 409.656 178.062 422.344 185.844 430.156C189.75 434.062 194.875 436 200 436S210.25 434.062 214.156 430.156L240 404.312L265.844 430.156C269.75 434.062 274.875 436 280 436S290.25 434.062 294.156 430.156C301.938 422.344 301.938 409.656 294.156 401.844L268.312 376L294.156 350.156C301.938 342.344 301.938 329.656 294.156 321.844ZM176 284H124V244H176C187.031 244 196 252.969 196 264S187.031 284 176 284Z" })
  }
));
ClipboardPrescriptionRegular.displayName = "ClipboardPrescriptionRegular";
var ClipboardPrescription_default = ClipboardPrescriptionRegular;
