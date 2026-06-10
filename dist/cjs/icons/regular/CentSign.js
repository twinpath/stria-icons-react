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
var CentSign_exports = {};
__export(CentSign_exports, {
  default: () => CentSign_default
});
module.exports = __toCommonJS(CentSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CentSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M345.381 346.922C354.506 356.516 354.162 371.703 344.568 380.844C313.104 410.857 272.873 426.83 231.668 430.338C231.709 430.916 232.004 431.41 232.004 432V488C232.004 501.25 221.254 512 208.002 512C194.752 512 184.002 501.25 184.002 488V432C184.002 430.945 184.471 430.045 184.604 429.025C148.512 423.195 113.883 407.367 86.094 380.859C51.219 347.562 32 303.234 32 256S51.219 164.438 86.094 131.156C113.887 104.646 148.514 88.809 184.604 82.975C184.471 81.955 184.002 81.055 184.002 80V24C184.002 10.75 194.752 0 208.002 0C221.254 0 232.004 10.75 232.004 24V80C232.004 80.588 231.711 81.08 231.67 81.656C272.867 85.162 313.107 101.131 344.568 131.156C354.162 140.297 354.506 155.484 345.381 165.078C336.191 174.703 321.004 174.984 311.441 165.875C258.441 115.344 172.221 115.328 119.221 165.891C93.938 190.016 80 222.016 80 256S93.938 321.984 119.221 346.125C172.221 396.656 258.441 396.656 311.441 346.125C321.035 336.953 336.223 337.297 345.381 346.922Z" })
  }
));
CentSignRegular.displayName = "CentSignRegular";
var CentSign_default = CentSignRegular;
