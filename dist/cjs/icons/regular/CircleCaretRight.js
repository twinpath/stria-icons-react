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
var CircleCaretRight_exports = {};
__export(CircleCaretRight_exports, {
  default: () => CircleCaretRight_default
});
module.exports = __toCommonJS(CircleCaretRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCaretRightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.453 16 16 123.453 16 256S123.453 496 256 496S496 388.547 496 256C496 123.449 388.547 16 256 16ZM256 448C150.133 448 64 361.867 64 256S150.133 64 256 64S448 150.129 448 256C448 361.867 361.867 448 256 448ZM248.281 142.375C241.281 135.906 231.094 134.188 222.375 138C213.656 141.844 208 150.469 208 160V352C208 361.531 213.656 370.156 222.375 374C231.094 377.812 241.281 376.094 248.281 369.625L352.281 273.625C357.188 269.094 360 262.688 360 256S357.188 242.906 352.281 238.375L248.281 142.375Z" })
  }
));
CircleCaretRightRegular.displayName = "CircleCaretRightRegular";
var CircleCaretRight_default = CircleCaretRightRegular;
