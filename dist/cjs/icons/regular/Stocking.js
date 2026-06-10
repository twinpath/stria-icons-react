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
var Stocking_exports = {};
__export(Stocking_exports, {
  default: () => Stocking_default
});
module.exports = __toCommonJS(Stocking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StockingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304.109 302.875C304.109 340.375 285.478 375.25 254.218 396.125L172.316 450.625C118.673 486.375 72.533 445 61.404 428.375C36.896 391.625 46.775 342 83.662 317.375L144.056 277.25V128H96.041V251.5L57.027 277.5C-1.741 316.75 -17.747 396.25 21.517 455C46.275 492 86.787 512 128.175 512C152.56 512 177.318 505 199.074 490.5L280.851 436C325.367 406.25 352 356.5 352 302.875V128H304.109V302.875ZM351.988 0H96.011C78.406 0 64 14.4 64 32V64C64 81.6 78.406 96 96.011 96H351.988C369.593 96 384 81.6 384 64V32C384 14.4 369.593 0 351.988 0Z" })
  }
));
StockingRegular.displayName = "StockingRegular";
var Stocking_default = StockingRegular;
