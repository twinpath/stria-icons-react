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
var SquareArrowUp_exports = {};
__export(SquareArrowUp_exports, {
  default: () => SquareArrowUp_default
});
module.exports = __toCommonJS(SquareArrowUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M229.656 130.344C226.531 127.219 221.469 127.219 218.344 130.344L98.344 250.344C96.781 251.906 96 253.938 96 256S96.781 260.094 98.344 261.656C101.469 264.781 106.531 264.781 109.656 261.656L216 155.312V376C216 380.406 219.578 384 224 384S232 380.406 232 376V155.312L338.344 261.656C341.469 264.781 346.531 264.781 349.656 261.656S352.781 253.469 349.656 250.344L229.656 130.344ZM384 32H64C28.652 32 0 60.652 0 96V416C0 451.346 28.652 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.652 419.348 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416Z" })
  }
));
SquareArrowUpThin.displayName = "SquareArrowUpThin";
var SquareArrowUp_default = SquareArrowUpThin;
