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
const BellSchoolSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416S416 322.875 416 208ZM128 208C128 163.875 163.875 128 208 128S288 163.875 288 208S252.125 288 208 288S128 252.125 128 208ZM256 208C256 181.5 234.5 160 208 160S160 181.5 160 208S181.5 256 208 256S256 234.5 256 208ZM464 352C437.5 352 416 373.5 416 400C416 416.375 424.25 430.875 436.875 439.5C430.75 453.875 416.5 464 400 464H352V399.5C311.875 429.875 262 448 208 448C154 448 104.125 429.875 64 399.5V480C64 497.625 78.375 512 96 512H400C442.25 512 477.5 482.125 486 442.5C501.375 434.5 512 418.5 512 400C512 373.5 490.5 352 464 352Z" })
  }
));
BellSchoolSolid.displayName = "BellSchoolSolid";
var BellSchool_default = BellSchoolSolid;
