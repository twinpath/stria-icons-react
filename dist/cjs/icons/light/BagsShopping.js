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
const BagsShoppingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 256H240C213.531 256 192 277.531 192 304V464C192 490.469 213.531 512 240 512H528C554.469 512 576 490.469 576 464V304C576 277.531 554.469 256 528 256ZM544 464C544 472.828 536.828 480 528 480H240C231.172 480 224 472.828 224 464V304C224 295.172 231.172 288 240 288H528C536.828 288 544 295.172 544 304V464ZM144 448H48C39.172 448 32 440.828 32 432V208C32 199.172 39.172 192 48 192H400C408.828 192 416 199.172 416 208C416 216.844 423.156 224 432 224S448 216.844 448 208C448 181.531 426.469 160 400 160H320V96C320 43.062 276.938 0 224 0S128 43.062 128 96V160H48C21.531 160 0 181.531 0 208V432C0 458.469 21.531 480 48 480H144C152.844 480 160 472.844 160 464S152.844 448 144 448ZM160 96C160 60.703 188.703 32 224 32S288 60.703 288 96V160H160V96ZM464 320C455.156 320 448 327.156 448 336V352C448 387.297 419.297 416 384 416S320 387.297 320 352V336C320 327.156 312.844 320 304 320S288 327.156 288 336V352C288 404.938 331.062 448 384 448S480 404.938 480 352V336C480 327.156 472.844 320 464 320Z" })
  }
));
BagsShoppingLight.displayName = "BagsShoppingLight";
var BagsShopping_default = BagsShoppingLight;
