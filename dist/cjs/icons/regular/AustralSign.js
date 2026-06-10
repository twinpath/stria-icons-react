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
var AustralSign_exports = {};
__export(AustralSign_exports, {
  default: () => AustralSign_default
});
module.exports = __toCommonJS(AustralSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AustralSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 306.106H360.91L340.75 257.964H424C437.25 257.964 448 247.182 448 233.893C448 220.604 437.25 209.822 424 209.822H320.59L246.125 32C238.656 14.135 209.344 14.135 201.875 32L127.41 209.822H24C10.75 209.822 0 220.604 0 233.893C0 247.182 10.75 257.964 24 257.964H107.25L87.09 306.106H24C10.75 306.106 0 316.888 0 330.177S10.75 354.248 24 354.248H66.93L33.875 433.185C28.734 445.44 34.484 459.559 46.703 464.7C58.937 469.887 73 464.088 78.125 451.834L118.99 354.248H329.01L369.875 451.834C373.734 461.048 382.641 466.58 392.016 466.58C395.109 466.58 398.266 465.985 401.297 464.7C413.516 459.559 419.266 445.44 414.125 433.185L381.07 354.248H424C437.25 354.248 448 343.467 448 330.177S437.25 306.106 424 306.106ZM224 103.492L268.527 209.822H179.473L224 103.492ZM139.15 306.106L159.312 257.964H288.688L308.85 306.106H139.15Z" })
  }
));
AustralSignRegular.displayName = "AustralSignRegular";
var AustralSign_default = AustralSignRegular;
