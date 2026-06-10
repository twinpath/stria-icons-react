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
var FaceDizzy_exports = {};
__export(FaceDizzy_exports, {
  default: () => FaceDizzy_default
});
module.exports = __toCommonJS(FaceDizzy_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceDizzyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M222.215 238.125C229.965 230.25 229.965 217.625 222.215 209.75L204.293 192L222.215 174.125C229.965 166.25 229.965 153.625 222.215 145.75C214.344 138 201.75 138 193.879 145.75L175.957 163.75L158.156 145.875C150.406 138.125 137.691 138.125 129.941 145.875C122.07 153.75 122.07 166.375 129.941 174.25L147.742 192.125L129.941 210C122.07 217.75 122.07 230.5 129.941 238.25C137.691 246.125 150.406 246.125 158.156 238.25L175.957 220.5L193.758 238.25C201.75 246 214.344 246 222.215 238.125ZM256 272C220.641 272 191.941 300.75 191.941 336S220.641 400 256 400S320.059 371.25 320.059 336S291.359 272 256 272ZM382.18 145.875C374.43 138.125 361.715 138.125 353.844 145.875L336.043 163.75L318.242 145.875C310.371 138.125 297.656 138.125 289.906 145.875C282.156 153.75 282.156 166.375 289.906 174.25L307.828 192.125L289.906 210C282.156 217.75 282.156 230.5 289.906 238.25C297.656 246.125 310.371 246.125 318.242 238.25L336.043 220.5L353.844 238.25C361.594 246.125 374.309 246.125 382.059 238.25C389.93 230.5 389.93 217.75 382.059 210L364.258 192L382.18 174.125C389.93 166.25 389.93 153.75 382.18 145.875ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448Z" })
  }
));
FaceDizzyRegular.displayName = "FaceDizzyRegular";
var FaceDizzy_default = FaceDizzyRegular;
