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
var SdCards_exports = {};
__export(SdCards_exports, {
  default: () => SdCards_default
});
module.exports = __toCommonJS(SdCards_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 80C279.164 80 272 87.162 272 96V160C272 168.836 279.164 176 288 176S304 168.836 304 160V96C304 87.162 296.836 80 288 80ZM352 80C343.164 80 336 87.162 336 96V160C336 168.836 343.164 176 352 176S368 168.836 368 160V96C368 87.162 360.836 80 352 80ZM384 0H221.256C212.768 0 204.629 3.371 198.627 9.373L105.373 102.627C99.371 108.629 96 116.768 96 125.254V352C96 387.199 124.801 416 160 416H384C419.201 416 448 387.199 448 352V64C448 28.799 419.201 0 384 0ZM400 352C400 360.672 392.674 368 384 368H160C151.328 368 144 360.672 144 352V131.883L227.883 48H384C392.674 48 400 55.326 400 64V352ZM48 432V96C21.49 96 0 117.492 0 144V448C0 483.344 28.654 512 64 512H304C330.51 512 352 490.508 352 464H80C62.326 464 48 449.672 48 432Z" })
  }
));
SdCardsRegular.displayName = "SdCardsRegular";
var SdCards_default = SdCardsRegular;
