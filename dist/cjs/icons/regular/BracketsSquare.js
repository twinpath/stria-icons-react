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
var BracketsSquare_exports = {};
__export(BracketsSquare_exports, {
  default: () => BracketsSquare_default
});
module.exports = __toCommonJS(BracketsSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BracketsSquareRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 32H32C14.4 32 0 46.4 0 64V448C0 465.6 14.4 480 32 480H120C133.255 480 144 469.255 144 456V456C144 442.745 133.255 432 120 432H48V80H120C133.255 80 144 69.255 144 56V56C144 42.745 133.255 32 120 32ZM416 32H328C314.745 32 304 42.745 304 56V56C304 69.255 314.745 80 328 80H400V432H328C314.745 432 304 442.745 304 456V456C304 469.255 314.745 480 328 480H416C433.6 480 448 465.6 448 448V64C448 46.4 433.6 32 416 32Z" })
  }
));
BracketsSquareRegular.displayName = "BracketsSquareRegular";
var BracketsSquare_default = BracketsSquareRegular;
