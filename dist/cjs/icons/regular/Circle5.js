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
var Circle5_exports = {};
__export(Circle5_exports, {
  default: () => Circle5_default
});
module.exports = __toCommonJS(Circle5_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Circle5Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM282.188 226.438L220.391 219.188L228.594 176H312C325.25 176 336 165.25 336 152S325.25 128 312 128H208.734C197.203 128 187.312 136.188 185.156 147.531L168.422 235.531C167.172 242.062 168.703 248.812 172.641 254.188C176.594 259.563 182.578 263.063 189.203 263.844L276.594 274.125C292.219 275.938 304 289.188 304 304.938C304 322.062 290.078 336 272.953 336H223.359C215.813 336 209.156 331.188 206.766 324.031C202.578 311.469 188.953 304.781 176.422 308.844C163.844 313.031 157.047 326.625 161.234 339.219C170.156 366 195.125 384 223.359 384H272.953C316.547 384 352 348.531 352 304.938C352 264.844 321.984 231.125 282.188 226.438Z" })
  }
));
Circle5Regular.displayName = "Circle5Regular";
var Circle5_default = Circle5Regular;
