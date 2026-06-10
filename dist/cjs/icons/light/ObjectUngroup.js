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
var ObjectUngroup_exports = {};
__export(ObjectUngroup_exports, {
  default: () => ObjectUngroup_default
});
module.exports = __toCommonJS(ObjectUngroup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ObjectUngroupLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 352H416C433.674 352 448 337.672 448 320V288C448 270.326 433.674 256 416 256V96C433.674 96 448 81.672 448 64V32C448 14.326 433.674 0 416 0H384C366.326 0 352 14.326 352 32H96C96 14.326 81.674 0 64 0H32C14.326 0 0 14.326 0 32V64C0 81.672 14.326 96 32 96V256C14.326 256 0 270.326 0 288V320C0 337.672 14.326 352 32 352H64C81.674 352 96 337.672 96 320H352C352 337.672 366.326 352 384 352ZM416 320H384V288H416V320ZM384 32H416V64H384V32ZM32 32H64V64H32V32ZM64 320H32V288H64V320ZM64 256V96C81.674 96 96 81.672 96 64H352C352 81.672 366.326 96 384 96V256C366.326 256 352 270.326 352 288H96C96 270.326 81.674 256 64 256ZM640 224V192C640 174.327 625.673 160 608 160H576C558.326 160 544 174.326 544 192H464C455.163 192 448 199.163 448 208V208C448 216.837 455.163 224 464 224H544C544 241.673 558.327 256 576 256V416C558.327 416 544 430.327 544 448H288C288 430.327 273.673 416 256 416V368C256 359.163 248.837 352 240 352H240C231.163 352 224 359.163 224 368V416C206.326 416 192 430.326 192 448V480C192 497.673 206.327 512 224 512H256C273.674 512 288 497.672 288 480H544C544 497.672 558.326 512 576 512H608C625.673 512 640 497.673 640 480V448C640 430.326 625.674 416 608 416V256C625.674 256 640 241.672 640 224ZM256 480H224V448H256V480ZM608 480H576V448H608V480ZM576 224V192H608V224H576Z" })
  }
));
ObjectUngroupLight.displayName = "ObjectUngroupLight";
var ObjectUngroup_default = ObjectUngroupLight;
