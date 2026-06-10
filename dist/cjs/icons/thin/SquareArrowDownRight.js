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
var SquareArrowDownRight_exports = {};
__export(SquareArrowDownRight_exports, {
  default: () => SquareArrowDownRight_default
});
module.exports = __toCommonJS(SquareArrowDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowDownRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M292.688 336H152C147.58 336 144 339.582 144 344C144 348.422 147.58 352 152 352H312C316.42 352 320 348.422 320 344V184C320 179.578 316.424 176 312 176C307.582 176 304.002 179.578 304.002 184V324.688L141.654 162.344C138.539 159.227 133.467 159.215 130.342 162.344C127.215 165.469 127.225 170.539 130.342 173.656L292.688 336ZM64 480H384C419.348 480 448 451.344 448 416V96C448 60.652 419.348 32 384 32H64C28.652 32 0 60.652 0 96V416C0 451.344 28.652 480 64 480ZM16 96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96Z" })
  }
));
SquareArrowDownRightThin.displayName = "SquareArrowDownRightThin";
var SquareArrowDownRight_default = SquareArrowDownRightThin;
