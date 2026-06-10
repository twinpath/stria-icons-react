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
const PersonDressSimpleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.376 363.604L210.466 206.418C202.615 178.943 177.503 160 148.928 160H107.075C78.5 160 53.388 178.942 45.537 206.417L0.625 363.604C-2.295 373.825 5.38 384 16.01 384H64V496C64 504.844 71.157 512 80 512S96 504.844 96 496V384H160V496C160 504.844 167.157 512 176 512S192 504.844 192 496V384H239.991C250.621 384 258.296 373.825 255.376 363.604ZM37.221 352L76.305 215.209C80.23 201.471 92.786 192 107.074 192H148.927C163.215 192 175.771 201.471 179.696 215.209L218.78 352H37.221ZM128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128ZM128 32C145.645 32 160 46.355 160 64S145.645 96 128 96S96 81.645 96 64S110.356 32 128 32Z" })
  }
));
PersonDressSimpleLight.displayName = "PersonDressSimpleLight";
var PersonDressSimple_default = PersonDressSimpleLight;
