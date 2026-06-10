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
const PersonDressSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M249.348 343.21L210.265 206.418C202.415 178.943 177.302 160 148.727 160H106.873C78.298 160 53.185 178.942 45.335 206.418L6.251 343.208C0.41 363.651 15.76 384 37.02 384H63.798V488C63.798 501.25 74.548 512 87.798 512S111.799 501.25 111.799 488V384H143.799V488C143.799 501.25 154.549 512 167.799 512S191.8 501.25 191.8 488V384H218.579C239.839 384 255.188 363.652 249.348 343.21ZM58.232 336L91.489 219.604C93.451 212.736 99.73 208 106.873 208H148.726C155.87 208 162.149 212.736 164.111 219.605L197.366 336H58.232ZM127.799 128C163.174 128 191.8 99.375 191.8 64S163.174 0 127.799 0S63.798 28.625 63.798 64S92.424 128 127.799 128Z" })
  }
));
PersonDressSimpleRegular.displayName = "PersonDressSimpleRegular";
var PersonDressSimple_default = PersonDressSimpleRegular;
