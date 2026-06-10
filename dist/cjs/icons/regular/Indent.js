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
var Indent_exports = {};
__export(Indent_exports, {
  default: () => Indent_default
});
module.exports = __toCommonJS(Indent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IndentRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.219 350.5C11.375 351.5 13.688 352 16 352C19.688 352 23.312 350.75 26.25 348.281L122.25 268.281C125.906 265.25 128 260.75 128 256S125.906 246.75 122.25 243.719L26.25 163.719C21.469 159.719 14.844 158.937 9.219 161.5C3.594 164.156 0 169.781 0 176V336C0 342.219 3.594 347.844 9.219 350.5ZM424 424H24C10.746 424 0 434.744 0 448C0 461.254 10.746 472 24 472H424C437.254 472 448 461.254 448 448C448 434.744 437.254 424 424 424ZM24 88H424C437.254 88 448 77.254 448 64C448 50.744 437.254 40 424 40H24C10.746 40 0 50.744 0 64C0 77.254 10.746 88 24 88ZM424 168H216C202.746 168 192 178.744 192 192C192 205.254 202.746 216 216 216H424C437.254 216 448 205.254 448 192C448 178.744 437.254 168 424 168ZM424 296H216C202.746 296 192 306.744 192 320C192 333.254 202.746 344 216 344H424C437.254 344 448 333.254 448 320C448 306.744 437.254 296 424 296Z" })
  }
));
IndentRegular.displayName = "IndentRegular";
var Indent_default = IndentRegular;
