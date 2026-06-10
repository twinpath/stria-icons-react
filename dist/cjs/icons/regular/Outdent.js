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
var Outdent_exports = {};
__export(Outdent_exports, {
  default: () => Outdent_default
});
module.exports = __toCommonJS(Outdent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OutdentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 424H24C10.746 424 0 434.744 0 448C0 461.254 10.746 472 24 472H424C437.254 472 448 461.254 448 448C448 434.744 437.254 424 424 424ZM24 88H424C437.254 88 448 77.254 448 64C448 50.744 437.254 40 424 40H24C10.746 40 0 50.744 0 64C0 77.254 10.746 88 24 88ZM101.75 348.301C106.531 352.301 113.156 353.082 118.781 350.52C124.406 347.863 128 342.238 128 336.02V176.02C128 169.801 124.406 164.176 118.781 161.52C116.625 160.52 114.312 160.02 112 160.02C108.312 160.02 104.688 161.27 101.75 163.738L5.75 243.738C2.094 246.77 0 251.27 0 256.02S2.094 265.27 5.75 268.301L101.75 348.301ZM424 296H216C202.746 296 192 306.744 192 320C192 333.254 202.746 344 216 344H424C437.254 344 448 333.254 448 320C448 306.744 437.254 296 424 296ZM424 168H216C202.746 168 192 178.744 192 192C192 205.254 202.746 216 216 216H424C437.254 216 448 205.254 448 192C448 178.744 437.254 168 424 168Z" })
  }
));
OutdentRegular.displayName = "OutdentRegular";
var Outdent_default = OutdentRegular;
