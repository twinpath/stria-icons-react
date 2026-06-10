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
var BitcoinSign_exports = {};
__export(BitcoinSign_exports, {
  default: () => BitcoinSign_default
});
module.exports = __toCommonJS(BitcoinSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BitcoinSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M261.438 237.344C277.938 218.938 288 194.625 288 168C288 116.135 249.721 73.385 200 65.619V24C200 10.75 189.25 0 176 0S152 10.75 152 24V64H104V24C104 10.75 93.25 0 80 0S56 10.75 56 24V64H24C10.75 64 0 74.75 0 88V424C0 436.531 9.625 446.938 22.125 447.938C29.5 448.494 41.279 448.74 56 448.77V488C56 501.25 66.75 512 80 512S104 501.25 104 488V448.387C117.164 448.205 131.076 447.984 145.656 447.75C147.764 447.717 149.885 447.686 152 447.652V488C152 501.25 162.75 512 176 512S200 501.25 200 488V446.967C203.182 446.928 206.504 446.877 209.625 446.844C270.5 446.219 320 396.219 320 335.438C320 293.125 296.281 256.219 261.438 237.344ZM48 112H184C214.875 112 240 137.125 240 168S214.875 224 184 224H48V112ZM209.125 398.844C188.531 399.062 166.469 399.406 144.875 399.75C109 400.344 72.25 400.812 48 400.75V272H208.562C243.531 272 272 300.469 272 335.438C272 370.031 243.781 398.469 209.125 398.844Z" })
  }
));
BitcoinSignRegular.displayName = "BitcoinSignRegular";
var BitcoinSign_default = BitcoinSignRegular;
