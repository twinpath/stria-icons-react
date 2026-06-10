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
var PersonDressSimple_exports = {};
__export(PersonDressSimple_exports, {
  default: () => PersonDressSimple_default
});
module.exports = __toCommonJS(PersonDressSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDressSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128ZM128 16C154.467 16 176 37.533 176 64S154.467 112 128 112S80 90.467 80 64S101.533 16 128 16ZM255.375 363.604L203.834 183.209C199.908 169.471 187.352 160 173.065 160H82.936C68.649 160 56.092 169.471 52.166 183.209L0.625 363.604C-2.295 373.824 5.379 384 16.01 384H56V480C56 497.641 70.344 512 88 512S120 497.641 120 480V384H136V480C136 497.641 150.344 512 168 512S200 497.641 200 480V384H239.99C250.621 384 258.295 373.824 255.375 363.604ZM104 480C104 488.828 96.813 496 88 496S72 488.828 72 480V384H104V480ZM184 480C184 488.828 176.813 496 168 496S152 488.828 152 480V384H184V480ZM16.01 368L67.551 187.605C69.502 180.771 75.83 176 82.936 176H173.065C180.17 176 186.498 180.771 188.449 187.604L239.99 368H16.01Z" })
  }
));
PersonDressSimpleThin.displayName = "PersonDressSimpleThin";
var PersonDressSimple_default = PersonDressSimpleThin;
