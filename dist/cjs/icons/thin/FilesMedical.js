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
var FilesMedical_exports = {};
__export(FilesMedical_exports, {
  default: () => FilesMedical_default
});
module.exports = __toCommonJS(FilesMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilesMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.226 168C328.226 159.164 321.075 152 312.256 152H264.346C255.527 152 248.376 159.164 248.376 168V216H200.466C191.647 216 184.496 223.164 184.496 232V280C184.496 288.836 191.647 296 200.466 296H248.376V344C248.376 352.836 255.527 360 264.346 360H312.256C321.075 360 328.226 352.836 328.226 344V296H376.135C384.955 296 392.105 288.836 392.105 280V232C392.105 223.164 384.955 216 376.135 216H328.226V168ZM376.135 232V280H312.256V344H264.346V280H200.466V232H264.346V168H312.256V232H376.135ZM438.645 102.629L345.566 9.371C339.575 3.371 331.452 0 322.982 0H192.481C157.202 0 128.602 28.652 128.602 64V352C128.602 387.348 157.202 416 192.481 416H384.12C419.4 416 448 387.348 448 352V125.254C448 116.77 444.635 108.629 438.645 102.629ZM336.211 22.625L425.412 112H344.195C339.798 112 336.211 108.406 336.211 104V22.625ZM432.03 352C432.03 378.469 410.537 400 384.12 400H192.481C166.064 400 144.571 378.469 144.571 352V64C144.571 37.531 166.064 16 192.481 16H320.241V104C320.241 117.219 331.002 128 344.195 128H432.03V352ZM310.786 448C306.842 448 303.506 450.898 302.949 454.805C299.639 478.062 279.63 496 255.519 496H63.88C37.42 496 15.97 474.508 15.97 448V160C15.97 133.492 37.42 112 63.88 112H87.835C92.246 112 95.82 108.418 95.82 104S92.246 96 87.835 96H63.88C28.6 96 0 124.656 0 160V448C0 483.344 28.6 512 63.88 512H255.519C287.718 512 314.353 488.133 318.759 457.094C319.439 452.297 315.622 448 310.786 448Z" })
  }
));
FilesMedicalThin.displayName = "FilesMedicalThin";
var FilesMedical_default = FilesMedicalThin;
