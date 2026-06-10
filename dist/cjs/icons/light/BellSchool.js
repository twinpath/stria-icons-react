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
var BellSchool_exports = {};
__export(BellSchool_exports, {
  default: () => BellSchool_default
});
module.exports = __toCommonJS(BellSchool_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BellSchoolLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 352C437.5 352 416 373.5 416 400C416 420.125 428.5 437.375 446.125 444.5C440.625 464.875 422.125 480 400 480H352V357.875C399.824 311.873 425.889 243.559 412.5 169.281C397.697 87.156 332.312 20.381 250.449 4.201C116.979 -22.178 0 79.252 0 208C0 266.875 24.625 320 64 357.875V448C64 483.199 92.801 512 128 512H400C439.5 512 472.25 483.125 478.625 445.5C497.875 439.25 512 421.375 512 400C512 373.5 490.5 352 464 352ZM320 448C320 465.674 305.674 480 288 480H128C110.326 480 96 465.674 96 448V383.125C128.375 403.875 166.75 416 208 416S287.625 403.875 320 383.125V448ZM208 384C111 384 32 305 32 208S111 32 208 32S384 111 384 208S305 384 208 384ZM464 416C455.25 416 448 408.875 448 400S455.25 384 464 384S480 391.125 480 400S472.75 416 464 416ZM208 128C163.875 128 128 163.875 128 208S163.875 288 208 288S288 252.125 288 208S252.125 128 208 128ZM208 256C181.5 256 160 234.5 160 208S181.5 160 208 160S256 181.5 256 208S234.5 256 208 256Z" })
  }
));
BellSchoolLight.displayName = "BellSchoolLight";
var BellSchool_default = BellSchoolLight;
