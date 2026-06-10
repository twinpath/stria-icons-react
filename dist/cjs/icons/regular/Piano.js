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
var Piano_exports = {};
__export(Piano_exports, {
  default: () => Piano_default
});
module.exports = __toCommonJS(Piano_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PianoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.514 270.193L417.842 240.986C396.172 230.197 384.129 207.67 383.996 183.463C383.438 82.064 301.029 0 199.5 0H184.5C82.604 0 0 82.604 0 184.5V448C0 483.199 28.801 512 64 512H448C483.199 512 512 483.199 512 448V327.5C512 303.213 498.256 281.018 476.514 270.193ZM464 448C464 456.836 456.836 464 448 464H64C55.164 464 48 456.836 48 448V384H80V416C80 424.799 87.199 432 96 432S112 424.799 112 416V384H144V416C144 424.799 151.199 432 160 432S176 424.799 176 416V384H208V416C208 424.799 215.199 432 224 432S240 424.799 240 416V384H336V416C336 424.799 343.199 432 352 432S368 424.799 368 416V384H400V416C400 424.799 407.199 432 416 432S432 424.799 432 416V384H464V448ZM464 336H48V184.5C48 109.25 109.25 48 184.5 48H199.5C274.75 48 336 109.25 336 184.5C335.875 226.875 359.875 265.75 397.875 284.625L455.125 313.25C460.625 315.875 464 321.5 464 327.5V336Z" })
  }
));
PianoRegular.displayName = "PianoRegular";
var Piano_default = PianoRegular;
