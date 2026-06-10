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
var CreditCardFront_exports = {};
__export(CreditCardFront_exports, {
  default: () => CreditCardFront_default
});
module.exports = __toCommonJS(CreditCardFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CreditCardFrontSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM64 272C64 263.162 71.164 256 80 256H176C184.836 256 192 263.162 192 272V304C192 312.836 184.836 320 176 320H80C71.164 320 64 312.836 64 304V272ZM160 408C160 412.418 156.418 416 152 416H72C67.582 416 64 412.418 64 408V392C64 387.58 67.582 384 72 384H152C156.418 384 160 387.58 160 392V408ZM352 408C352 412.418 348.418 416 344 416H200C195.582 416 192 412.418 192 408V392C192 387.58 195.582 384 200 384H344C348.418 384 352 387.58 352 392V408ZM384 304C384 312.836 376.836 320 368 320H240C231.164 320 224 312.836 224 304V272C224 263.162 231.164 256 240 256H368C376.836 256 384 263.162 384 272V304ZM512 304C512 312.836 504.836 320 496 320H432C423.164 320 416 312.836 416 304V272C416 263.162 423.164 256 432 256H496C504.836 256 512 263.162 512 272V304ZM512 176C512 184.836 504.836 192 496 192H400C391.164 192 384 184.836 384 176V112C384 103.162 391.164 96 400 96H496C504.836 96 512 103.162 512 112V176Z" })
  }
));
CreditCardFrontSolid.displayName = "CreditCardFrontSolid";
var CreditCardFront_default = CreditCardFrontSolid;
