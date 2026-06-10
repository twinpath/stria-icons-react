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
var BagsShopping_exports = {};
__export(BagsShopping_exports, {
  default: () => BagsShopping_default
});
module.exports = __toCommonJS(BagsShopping_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BagsShoppingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256H256C220.654 256 192 284.652 192 320V448C192 483.346 220.654 512 256 512H512C547.348 512 576 483.346 576 448V320C576 284.652 547.348 256 512 256ZM480 352C480 404.938 436.938 448 384 448S288 404.938 288 352V344C288 330.75 298.75 320 312 320S336 330.75 336 344V352C336 378.469 357.531 400 384 400S432 378.469 432 352V344C432 330.75 442.75 320 456 320S480 330.75 480 344V352ZM48 416V224C48 215.178 55.178 208 64 208H384C392.822 208 400 215.178 400 224H448C448 188.652 419.348 160 384 160H320V96C320 43.062 276.938 0 224 0S128 43.062 128 96V160H64C28.654 160 0 188.652 0 224V416C0 451.346 28.654 480 64 480H160V432H64C55.178 432 48 424.822 48 416ZM176 96C176 69.531 197.531 48 224 48S272 69.531 272 96V160H176V96Z" })
  }
));
BagsShoppingRegular.displayName = "BagsShoppingRegular";
var BagsShopping_default = BagsShoppingRegular;
