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
var SquareInfo_exports = {};
__export(SquareInfo_exports, {
  default: () => SquareInfo_default
});
module.exports = __toCommonJS(SquareInfo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareInfoThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M223.918 176C232.74 176 239.918 168.822 239.918 160S232.74 144 223.918 144S207.918 151.178 207.918 160S215.096 176 223.918 176ZM256 352H231.98V216.047C231.98 216.029 232 216.018 232 216C232 211.594 228.406 208 224 208H192C187.594 208 184 211.594 184 216S187.594 224 192 224H215.98V352H192C187.594 352 184 355.594 184 360S187.594 368 192 368H256C260.406 368 264 364.406 264 360S260.406 352 256 352ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.348 480 448 451.344 448 416V96C448 60.656 419.348 32 384 32ZM432 416C432 442.469 410.469 464 384 464H64C37.531 464 16 442.469 16 416V96C16 69.531 37.531 48 64 48H384C410.469 48 432 69.531 432 96V416Z" })
  }
));
SquareInfoThin.displayName = "SquareInfoThin";
var SquareInfo_default = SquareInfoThin;
