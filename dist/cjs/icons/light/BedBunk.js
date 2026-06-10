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
var BedBunk_exports = {};
__export(BedBunk_exports, {
  default: () => BedBunk_default
});
module.exports = __toCommonJS(BedBunk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedBunkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 128C163.375 128 192 99.375 192 64S163.375 0 128 0S64 28.625 64 64S92.625 128 128 128ZM128 32C145.625 32 160 46.375 160 64S145.625 96 128 96S96 81.625 96 64S110.375 32 128 32ZM128 384C163.375 384 192 355.375 192 320S163.375 256 128 256S64 284.625 64 320S92.625 384 128 384ZM128 288C145.625 288 160 302.375 160 320S145.625 352 128 352S96 337.625 96 320S110.375 288 128 288ZM464 0H240C231.164 0 224 7.164 224 16V160H32V16C32 7.199 24.801 0 16 0S0 7.199 0 16V496C0 504.801 7.199 512 16 512S32 504.801 32 496V448H544V496C544 504.801 551.199 512 560 512S576 504.801 576 496V112C576 50.145 525.855 0 464 0ZM544 416H256V288H464C508.125 288 544 323.875 544 368V416ZM544 289.75C523 268.125 494.125 256 464 256H240C231.125 256 224 263.125 224 272V416H32V192H544V289.75ZM544 160H256V32H464C508.125 32 544 67.875 544 112V160Z" })
  }
));
BedBunkLight.displayName = "BedBunkLight";
var BedBunk_default = BedBunkLight;
