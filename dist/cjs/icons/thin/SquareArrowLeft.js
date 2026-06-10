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
var SquareArrowLeft_exports = {};
__export(SquareArrowLeft_exports, {
  default: () => SquareArrowLeft_default
});
module.exports = __toCommonJS(SquareArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M98.344 250.344C95.219 253.469 95.219 258.531 98.344 261.656L218.344 381.656C219.906 383.219 221.938 384 224 384S228.094 383.219 229.656 381.656C232.781 378.531 232.781 373.469 229.656 370.344L123.312 264H344C348.406 264 352 260.422 352 256S348.406 248 344 248H123.312L229.656 141.656C232.781 138.531 232.781 133.469 229.656 130.344S221.469 127.219 218.344 130.344L98.344 250.344ZM0 96V416C0 451.348 28.652 480 64 480H384C419.346 480 448 451.348 448 416V96C448 60.652 419.346 32 384 32H64C28.652 32 0 60.652 0 96ZM384 48C410.467 48 432 69.531 432 96V416C432 442.469 410.467 464 384 464H64C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384Z" })
  }
));
SquareArrowLeftThin.displayName = "SquareArrowLeftThin";
var SquareArrowLeft_default = SquareArrowLeftThin;
