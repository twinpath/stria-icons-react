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
var ArrowRightToBracket_exports = {};
__export(ArrowRightToBracket_exports, {
  default: () => ArrowRightToBracket_default
});
module.exports = __toCommonJS(ArrowRightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 128V384C512 437.02 469.02 480 416 480H344C330.746 480 320 469.254 320 456C320 442.742 330.746 432 344 432H416C442.4 432 464 410.398 464 384V128C464 101.602 442.4 80 416 80H344C330.746 80 320 69.254 320 56C320 42.742 330.746 32 344 32H416C469.02 32 512 74.98 512 128ZM345.469 239.562L217.469 103.562C208.375 93.875 193.188 93.438 183.562 102.531C173.906 111.594 173.438 126.781 182.531 136.438L272.449 232H24C10.75 232 0 242.75 0 256S10.75 280 24 280H272.449L182.531 375.562C173.438 385.219 173.906 400.406 183.563 409.469C188.188 413.844 194.094 416 200 416C206.375 416 212.75 413.469 217.469 408.438L345.469 272.438C354.188 263.219 354.188 248.781 345.469 239.562Z" })
  }
));
ArrowRightToBracketRegular.displayName = "ArrowRightToBracketRegular";
var ArrowRightToBracket_default = ArrowRightToBracketRegular;
