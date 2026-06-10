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
var CreditCardBlank_exports = {};
__export(CreditCardBlank_exports, {
  default: () => CreditCardBlank_default
});
module.exports = __toCommonJS(CreditCardBlank_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CreditCardBlankSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H512C547.348 480 576 451.346 576 416V96C576 60.654 547.348 32 512 32ZM160 376C160 380.418 156.418 384 152 384H72C67.582 384 64 380.418 64 376V360C64 355.58 67.582 352 72 352H152C156.418 352 160 355.58 160 360V376ZM352 376C352 380.418 348.418 384 344 384H200C195.582 384 192 380.418 192 376V360C192 355.58 195.582 352 200 352H344C348.418 352 352 355.58 352 360V376Z" })
  }
));
CreditCardBlankSolid.displayName = "CreditCardBlankSolid";
var CreditCardBlank_default = CreditCardBlankSolid;
