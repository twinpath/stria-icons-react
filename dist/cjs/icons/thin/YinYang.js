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
const YinYangThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.656 16 16 123.656 16 256S123.656 496 256 496S496 388.344 496 256S388.344 16 256 16ZM32 256C32 132.5 132.484 32 256 32C315.547 32 364 80.438 364 140S315.547 248 256 248C187.625 248 132 303.625 132 372C132 423.586 165.369 457.16 173.031 464.062C90.469 431.031 32 350.219 32 256ZM256 480C196.453 480 148 431.562 148 372S196.453 264 256 264C324.375 264 380 208.375 380 140C380 88.414 346.629 54.838 338.969 47.938C421.531 80.969 480 161.781 480 256C480 379.5 379.516 480 256 480ZM256 176C278.062 176 296 158.062 296 136S278.062 96 256 96S216 113.938 216 136S233.938 176 256 176ZM256 112C269.234 112 280 122.781 280 136S269.234 160 256 160S232 149.219 232 136S242.766 112 256 112ZM256 336C233.938 336 216 353.938 216 376S233.938 416 256 416S296 398.062 296 376S278.062 336 256 336ZM256 400C242.766 400 232 389.219 232 376S242.766 352 256 352S280 362.781 280 376S269.234 400 256 400Z" })
  }
));
YinYangThin.displayName = "YinYangThin";
var YinYang_default = YinYangThin;
