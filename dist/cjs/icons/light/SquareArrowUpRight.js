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
var SquareArrowUpRight_exports = {};
__export(SquareArrowUpRight_exports, {
  default: () => SquareArrowUpRight_default
});
module.exports = __toCommonJS(SquareArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowUpRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96ZM32 96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96ZM132.688 324.688C126.438 330.938 126.438 341.063 132.688 347.312C135.812 350.438 139.906 352 144 352S152.188 350.438 155.312 347.312L288 214.625V304C288 312.844 295.156 320 304 320S320 312.844 320 304V176.375C320 167.563 312.859 160.406 304.047 160.375L176.047 160H176C167.188 160 160.031 167.125 160 175.969C159.969 184.781 167.109 191.969 175.953 192L265.102 192.273L132.688 324.688Z" })
  }
));
SquareArrowUpRightLight.displayName = "SquareArrowUpRightLight";
var SquareArrowUpRight_default = SquareArrowUpRightLight;
