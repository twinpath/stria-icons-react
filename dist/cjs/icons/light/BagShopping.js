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
const BagShoppingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128H319.998V96C319.998 43.062 276.936 0 224 0C171.062 0 128 43.062 128 96V128H32C14.326 128 0 142.326 0 160V416C0 469.02 42.98 512 96 512H352C405.02 512 448 469.02 448 416V160C448 142.326 433.674 128 416 128ZM160 96C160 60.703 188.703 32 224 32C259.295 32 287.998 60.703 287.998 96V128H160V96ZM416 416C416 451.289 387.289 480 352 480H96C60.711 480 32 451.289 32 416V160H128V240C128 248.844 135.156 256 144 256S160 248.844 160 240V160H287.998V240C287.998 248.844 295.154 256 303.998 256S319.998 248.844 319.998 240V160H416V416Z" })
  }
));
BagShoppingLight.displayName = "BagShoppingLight";
var BagShopping_default = BagShoppingLight;
