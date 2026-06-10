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
const BellSchoolRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 352C437.49 352 416 373.492 416 400C416 416.426 424.273 430.895 436.855 439.547C430.777 453.906 416.549 464 400 464H349.711C351.057 458.852 352 453.555 352 448V357.75C400.307 311.281 426.414 241.859 412.082 167.258C396.373 85.484 330.564 19.484 248.764 3.891C116.182 -21.383 0 79.914 0 208C0 266.75 24.625 319.875 64 357.75V448C64 483.199 92.801 512 128 512H400C442.199 512 477.479 482.133 485.984 442.438C501.373 434.441 512 418.539 512 400C512 373.492 490.51 352 464 352ZM304 448C304 456.836 296.836 464 288 464H128C119.164 464 112 456.836 112 448V392.375C140.75 407.375 173.375 416 208 416S275.25 407.375 304 392.375V448ZM251.461 362.246C129.824 394.477 21.521 286.176 53.754 164.539C67.91 111.113 111.113 67.906 164.539 53.75C286.176 21.523 394.479 129.824 362.246 251.461C348.09 304.883 304.887 348.09 251.461 362.246ZM226.795 113.789C159.189 100.949 100.951 159.188 113.787 226.797C120.92 264.355 151.645 295.078 189.205 302.211C256.811 315.047 315.049 256.812 302.213 189.203C295.08 151.645 264.355 120.922 226.795 113.789ZM208 256C181.5 256 160 234.5 160 208S181.5 160 208 160S256 181.5 256 208S234.5 256 208 256Z" })
  }
));
BellSchoolRegular.displayName = "BellSchoolRegular";
var BellSchool_default = BellSchoolRegular;
