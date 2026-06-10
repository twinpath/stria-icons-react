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
var ArrowRightFromBracket_exports = {};
__export(ArrowRightFromBracket_exports, {
  default: () => ArrowRightFromBracket_default
});
module.exports = __toCommonJS(ArrowRightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromBracketRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 456C192 469.254 181.254 480 168 480H96C42.98 480 0 437.02 0 384V128C0 74.98 42.98 32 96 32H168C181.254 32 192 42.742 192 56C192 69.254 181.254 80 168 80H96C69.6 80 48 101.602 48 128V384C48 410.398 69.6 432 96 432H168C181.254 432 192 442.742 192 456ZM505.461 239.562L377.464 103.562C368.37 93.875 353.183 93.438 343.558 102.531C333.902 111.594 333.434 126.781 342.527 136.437L432.443 232H183.999C170.75 232 160 242.75 160 256S170.75 280 183.999 280H432.443L342.527 375.562C333.434 385.219 333.902 400.406 343.558 409.469C348.183 413.844 354.089 416 359.996 416C366.37 416 372.745 413.469 377.464 408.438L505.461 272.438C514.18 263.219 514.18 248.781 505.461 239.562Z" })
  }
));
ArrowRightFromBracketRegular.displayName = "ArrowRightFromBracketRegular";
var ArrowRightFromBracket_default = ArrowRightFromBracketRegular;
