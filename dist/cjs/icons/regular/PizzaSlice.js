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
var PizzaSlice_exports = {};
__export(PizzaSlice_exports, {
  default: () => PizzaSlice_default
});
module.exports = __toCommonJS(PizzaSlice_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PizzaSliceRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M158.899 0.125C157.774 0 156.774 0 155.649 0C140.649 -0.123 127.524 9.875 123.524 24.25L0.524 491.625C-0.726 496.5 0.274 501.625 3.399 505.625C6.399 509.625 11.149 512 16.149 512C17.649 512 19.149 511.75 20.524 511.375L488.145 381.75C503.895 377.375 513.645 362 511.77 345.875C490.895 165.125 340.772 17.375 158.899 0.125ZM61.024 450.375L142.774 139.875C264.897 160.375 348.897 243.25 371.147 364.375L61.024 450.375ZM417.522 351.5C390.522 215 292.647 118.5 155.024 93.5L166.649 49.375C315.397 69.125 439.522 190.625 462.397 339L417.522 351.5ZM192.022 192C174.399 192 160.024 206.375 160.024 224S174.399 256 192.022 256C209.647 256 224.022 241.625 224.022 224S209.647 192 192.022 192ZM160.024 320C142.399 320 128.024 334.375 128.024 352S142.399 384 160.024 384C177.647 384 192.022 369.625 192.022 352S177.647 320 160.024 320ZM256.022 320C256.022 337.625 270.397 352 288.022 352S320.022 337.625 320.022 320S305.647 288 288.022 288S256.022 302.375 256.022 320Z" })
  }
));
PizzaSliceRegular.displayName = "PizzaSliceRegular";
var PizzaSlice_default = PizzaSliceRegular;
