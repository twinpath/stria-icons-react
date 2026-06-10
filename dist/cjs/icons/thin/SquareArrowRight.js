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
var SquareArrowRight_exports = {};
__export(SquareArrowRight_exports, {
  default: () => SquareArrowRight_default
});
module.exports = __toCommonJS(SquareArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M349.656 261.656C352.781 258.531 352.781 253.469 349.656 250.344L229.656 130.344C228.094 128.781 226.062 128 224 128S219.906 128.781 218.344 130.344C215.219 133.469 215.219 138.531 218.344 141.656L324.688 248H104C99.594 248 96 251.578 96 256S99.594 264 104 264H324.688L218.344 370.344C215.219 373.469 215.219 378.531 218.344 381.656S226.531 384.781 229.656 381.656L349.656 261.656ZM448 416V96C448 60.652 419.348 32 384 32H64C28.654 32 0 60.652 0 96V416C0 451.348 28.654 480 64 480H384C419.348 480 448 451.348 448 416ZM64 464C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416C432 442.469 410.467 464 384 464H64Z" })
  }
));
SquareArrowRightThin.displayName = "SquareArrowRightThin";
var SquareArrowRight_default = SquareArrowRightThin;
