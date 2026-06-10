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
var BoxesStacked_exports = {};
__export(BoxesStacked_exports, {
  default: () => BoxesStacked_default
});
module.exports = __toCommonJS(BoxesStacked_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxesStackedRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 224H368C394.51 224 416 202.51 416 176V48C416 21.49 394.51 0 368 0H208C181.49 0 160 21.49 160 48V176C160 202.51 181.49 224 208 224ZM208 48H256V112L288 96L320 112V48H368V176H208V48ZM208 288H48C21.49 288 0 309.49 0 336V464C0 490.51 21.49 512 48 512H208C234.51 512 256 490.51 256 464V336C256 309.49 234.51 288 208 288ZM208 464H48V336H96V400L128 384L160 400V336H208V464ZM528 288H368C341.49 288 320 309.49 320 336V464C320 490.51 341.49 512 368 512H528C554.51 512 576 490.51 576 464V336C576 309.49 554.51 288 528 288ZM528 464H368V336H416V400L448 384L480 400V336H528V464Z" })
  }
));
BoxesStackedRegular.displayName = "BoxesStackedRegular";
var BoxesStacked_default = BoxesStackedRegular;
