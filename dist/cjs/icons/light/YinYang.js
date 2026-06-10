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
var YinYang_exports = {};
__export(YinYang_exports, {
  default: () => YinYang_default
});
module.exports = __toCommonJS(YinYang_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const YinYangLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.656 16 16 123.656 16 256S123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM48 256C48 141.312 141.312 48 256 48C308.938 48 352 91.062 352 144S308.938 240 256 240C185.406 240 128 297.406 128 368C128 391.469 134.801 413.195 145.867 432.125C87.205 395.305 48 330.219 48 256ZM256 464C203.062 464 160 420.938 160 368S203.062 272 256 272C326.594 272 384 214.594 384 144C384 120.531 377.199 98.805 366.133 79.875C424.795 116.695 464 181.781 464 256C464 370.688 370.688 464 256 464ZM296 368C296 381.254 285.254 392 272 392S248 381.254 248 368C248 354.742 258.746 344 272 344S296 354.742 296 368ZM224 152C224 138.742 234.746 128 248 128S272 138.742 272 152C272 165.254 261.254 176 248 176S224 165.254 224 152Z" })
  }
));
YinYangLight.displayName = "YinYangLight";
var YinYang_default = YinYangLight;
