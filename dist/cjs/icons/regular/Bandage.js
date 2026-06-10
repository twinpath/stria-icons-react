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
var Bandage_exports = {};
__export(Bandage_exports, {
  default: () => Bandage_default
});
module.exports = __toCommonJS(Bandage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BandageRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 96H64C28.8 96 0 124.8 0 160V352C0 387.2 28.8 416 64 416H576C611.2 416 640 387.2 640 352V160C640 124.8 611.2 96 576 96ZM80 368C62.327 368 48 353.673 48 336V176C48 158.327 62.327 144 80 144H192V368H80ZM272 280C285.25 280 296 290.75 296 304S285.25 328 272 328S248 317.25 248 304S258.75 280 272 280ZM248 208C248 194.75 258.75 184 272 184S296 194.75 296 208S285.25 232 272 232S248 221.25 248 208ZM344 304C344 290.75 354.75 280 368 280S392 290.75 392 304S381.25 328 368 328S344 317.25 344 304ZM368 232C354.75 232 344 221.25 344 208S354.75 184 368 184S392 194.75 392 208S381.25 232 368 232ZM592 328C592 350.091 574.091 368 552 368H448V144H560C577.673 144 592 158.327 592 176V328Z" })
  }
));
BandageRegular.displayName = "BandageRegular";
var Bandage_default = BandageRegular;
