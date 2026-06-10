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
var BagShopping_exports = {};
__export(BagShopping_exports, {
  default: () => BagShopping_default
});
module.exports = __toCommonJS(BagShopping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BagShoppingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 160H320V96C320 43.062 276.938 0 224 0S128 43.062 128 96V160H48C30.328 160 16 174.326 16 192V432C16 476.182 51.816 512 96 512H352C396.184 512 432 476.182 432 432V192C432 174.326 417.672 160 400 160ZM144 96C144 51.891 179.875 16 224 16S304 51.891 304 96V160H144V96ZM416 432C416 467.289 387.289 496 352 496H96C60.711 496 32 467.289 32 432V192C32 183.178 39.176 176 48 176H128V248C128 252.422 131.594 256 136 256S144 252.422 144 248V176H304V248C304 252.422 307.594 256 312 256S320 252.422 320 248V176H400C408.824 176 416 183.178 416 192V432Z" })
  }
));
BagShoppingThin.displayName = "BagShoppingThin";
var BagShopping_default = BagShoppingThin;
