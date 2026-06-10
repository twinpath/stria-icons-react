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
var Copyright_exports = {};
__export(Copyright_exports, {
  default: () => Copyright_default
});
module.exports = __toCommonJS(Copyright_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CopyrightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.418 16 256S123.42 496 256 496S496 388.582 496 256S388.58 16 256 16ZM256 448C150.131 448 64 361.867 64 256S150.131 64 256 64S448 150.133 448 256S361.869 448 256 448ZM255.094 176C255.125 176 255.125 176 255.125 176C276.188 176 296.031 184.312 310.938 199.375C320.313 208.719 335.469 208.875 344.906 199.531C354.312 190.188 354.375 175 345.062 165.563C321.062 141.344 289.125 128 255.125 128C255.125 128 255.125 128 255.094 128C221.125 128 189.156 141.344 165.156 165.562C115.719 215.438 115.719 296.562 165.156 346.438C189.156 370.656 221.125 384 255.094 384C255.125 384 255.125 384 255.125 384C289.125 384 321.063 370.656 345.063 346.438C354.375 337 354.313 321.813 344.906 312.469C335.469 303.156 320.313 303.25 310.938 312.625C296.031 327.688 276.188 336 255.125 336C255.125 336 255.125 336 255.094 336C234 336 214.156 327.688 199.219 312.625C168.281 281.406 168.281 230.594 199.219 199.375C214.156 184.312 234 176 255.094 176Z" })
  }
));
CopyrightRegular.displayName = "CopyrightRegular";
var Copyright_default = CopyrightRegular;
