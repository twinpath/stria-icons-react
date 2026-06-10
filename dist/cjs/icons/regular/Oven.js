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
var Oven_exports = {};
__export(Oven_exports, {
  default: () => Oven_default
});
module.exports = __toCommonJS(Oven_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OvenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112 432H336C353.674 432 368 417.672 368 400V272C368 254.326 353.674 240 336 240H112C94.326 240 80 254.326 80 272V400C80 417.672 94.326 432 112 432ZM160 280H288C296.844 280 304 287.156 304 296S296.844 312 288 312H160C151.156 312 144 304.844 144 296S151.156 280 160 280ZM104 80C90.746 80 80 90.744 80 104C80 117.254 90.746 128 104 128S128 117.254 128 104C128 90.744 117.254 80 104 80ZM352 0H96C42.98 0 0 42.98 0 96V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V96C448 42.98 405.02 0 352 0ZM400 448C400 456.822 392.822 464 384 464H64C55.178 464 48 456.822 48 448V208H400V448ZM400 160H48V96C48 69.533 69.533 48 96 48H352C378.467 48 400 69.533 400 96V160ZM344 80C330.746 80 320 90.744 320 104C320 117.254 330.746 128 344 128S368 117.254 368 104C368 90.744 357.254 80 344 80ZM184 80C170.746 80 160 90.744 160 104C160 117.254 170.746 128 184 128S208 117.254 208 104C208 90.744 197.254 80 184 80ZM264 80C250.746 80 240 90.744 240 104C240 117.254 250.746 128 264 128S288 117.254 288 104C288 90.744 277.254 80 264 80Z" })
  }
));
OvenRegular.displayName = "OvenRegular";
var Oven_default = OvenRegular;
