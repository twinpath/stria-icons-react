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
var SquareArrowDownLeft_exports = {};
__export(SquareArrowDownLeft_exports, {
  default: () => SquareArrowDownLeft_default
});
module.exports = __toCommonJS(SquareArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowDownLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M317.658 173.656C320.775 170.539 320.785 165.469 317.658 162.344C314.533 159.215 309.461 159.227 306.346 162.344L143.998 324.688V184C143.998 179.578 140.418 176 136 176C131.576 176 128 179.578 128 184V344C128 348.422 131.58 352 136 352H296C300.42 352 304 348.422 304 344C304 339.582 300.42 336 296 336H155.312L317.658 173.656ZM448 416V96C448 60.652 419.348 32 384 32H64C28.652 32 0 60.652 0 96V416C0 451.344 28.652 480 64 480H384C419.348 480 448 451.344 448 416ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" })
  }
));
SquareArrowDownLeftThin.displayName = "SquareArrowDownLeftThin";
var SquareArrowDownLeft_default = SquareArrowDownLeftThin;
