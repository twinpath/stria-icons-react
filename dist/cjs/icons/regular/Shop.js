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
var Shop_exports = {};
__export(Shop_exports, {
  default: () => Shop_default
});
module.exports = __toCommonJS(Shop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShopRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M635.748 176.125L544.248 16.125C538.546 6.153 527.939 0 516.451 0H123.546C112.058 0 101.451 6.153 95.748 16.125L4.248 176.125C-7.877 197.5 7.373 224 31.998 224H63.998L64 464C64 490.51 85.49 512 112 512H336C362.51 512 384 490.51 384 464L383.998 224H527.998V488C527.998 501.2 538.798 512 551.998 512H551.998C565.198 512 575.998 501.2 575.998 488V224H607.998C632.623 224 647.873 197.5 635.748 176.125ZM335.998 464H111.998V368.25H335.998V464ZM335.998 320.25H111.998V224H335.998V320.25ZM59.623 176L132.748 48H507.248L580.248 176H59.623Z" })
  }
));
ShopRegular.displayName = "ShopRegular";
var Shop_default = ShopRegular;
