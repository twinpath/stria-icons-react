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
var SuitcaseRolling_exports = {};
__export(SuitcaseRolling_exports, {
  default: () => SuitcaseRolling_default
});
module.exports = __toCommonJS(SuitcaseRolling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SuitcaseRollingRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M264 336H120C106.801 336 96 346.799 96 360C96 373.199 106.801 384 120 384H264C277.199 384 288 373.199 288 360C288 346.799 277.199 336 264 336ZM264 224H120C106.801 224 96 234.799 96 248C96 261.199 106.801 272 120 272H264C277.199 272 288 261.199 288 248C288 234.799 277.199 224 264 224ZM320 128H288V48C288 21.49 266.51 0 240 0H144C117.49 0 96 21.49 96 48V128H64C28.654 128 0 156.652 0 192V416C0 451.346 28.654 480 64 480C64 497.672 78.326 512 96 512S128 497.672 128 480H256C256 497.672 270.326 512 288 512S320 497.672 320 480C355.346 480 384 451.346 384 416V192C384 156.652 355.346 128 320 128ZM144 48H240V128H144V48ZM336 416C336 424.836 328.836 432 320 432H64C55.164 432 48 424.836 48 416V192C48 183.162 55.164 176 64 176H320C328.836 176 336 183.162 336 192V416Z" })
  }
));
SuitcaseRollingRegular.displayName = "SuitcaseRollingRegular";
var SuitcaseRolling_default = SuitcaseRollingRegular;
