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
var CircleArrowUpRight_exports = {};
__export(CircleArrowUpRight_exports, {
  default: () => CircleArrowUpRight_default
});
module.exports = __toCommonJS(CircleArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowUpRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M164.688 324.688C158.438 330.938 158.438 341.063 164.688 347.312C167.812 350.438 171.906 352 176 352S184.188 350.438 187.312 347.312L320 214.625V304C320 312.844 327.156 320 336 320S352 312.844 352 304V176.375C352 167.563 344.859 160.406 336.047 160.375L208.047 160H208C199.188 160 192.031 167.125 192 175.969C191.969 184.781 199.109 191.969 207.953 192L297.102 192.273L164.688 324.688ZM16 256C16 388.547 123.451 496 256 496S496 388.547 496 256S388.549 16 256 16S16 123.453 16 256ZM48 256C48 141.309 141.309 48 256 48S464 141.309 464 256S370.691 464 256 464S48 370.691 48 256Z" })
  }
));
CircleArrowUpRightLight.displayName = "CircleArrowUpRightLight";
var CircleArrowUpRight_default = CircleArrowUpRightLight;
