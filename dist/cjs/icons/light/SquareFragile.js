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
var SquareFragile_exports = {};
__export(SquareFragile_exports, {
  default: () => SquareFragile_default
});
module.exports = __toCommonJS(SquareFragile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareFragileLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 96H144C126.326 96 112 110.326 112 128V208C112 264.375 153.75 310.625 208 318.375V384H176C167.199 384 160 391.199 160 400C160 408.799 167.199 416 176 416H272C280.801 416 288 408.799 288 400C288 391.199 280.801 384 272 384H240V318.375C294.25 310.625 336 264.375 336 208V128C336 110.326 321.674 96 304 96ZM304 208C304 252.125 268.125 288 224 288S144 252.125 144 208V128H212.75L220.125 147.875L183.75 186.25C183.75 186.25 231.375 221.125 251 230.125C253.625 231.25 256.75 231.125 259.25 229.375C262.875 226.75 263.75 221.75 261.25 218C252.25 205.5 231.375 184.25 231.375 184.25L260 156C260 156 250.875 133.875 248.375 128H304V208ZM384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416Z" })
  }
));
SquareFragileLight.displayName = "SquareFragileLight";
var SquareFragile_default = SquareFragileLight;
