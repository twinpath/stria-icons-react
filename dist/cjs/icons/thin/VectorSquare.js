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
var VectorSquare_exports = {};
__export(VectorSquare_exports, {
  default: () => VectorSquare_default
});
module.exports = __toCommonJS(VectorSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VectorSquareThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 128C433.674 128 448 113.674 448 96V64C448 46.326 433.674 32 416 32H384C366.326 32 352 46.326 352 64V72H96V64C96 46.326 81.674 32 64 32H32C14.326 32 0 46.326 0 64V96C0 113.674 14.326 128 32 128H40V384H32C14.326 384 0 398.326 0 416V448C0 465.674 14.326 480 32 480H64C81.674 480 96 465.674 96 448V440H352V448C352 465.674 366.326 480 384 480H416C433.674 480 448 465.674 448 448V416C448 398.326 433.674 384 416 384H408V128H416ZM368 64C368 55.178 375.178 48 384 48H416C424.822 48 432 55.178 432 64V96C432 104.822 424.822 112 416 112H384C375.178 112 368 104.822 368 96V64ZM32 112C23.178 112 16 104.822 16 96V64C16 55.178 23.178 48 32 48H64C72.822 48 80 55.178 80 64V96C80 104.822 72.822 112 64 112H32ZM80 448C80 456.822 72.822 464 64 464H32C23.178 464 16 456.822 16 448V416C16 407.178 23.178 400 32 400H64C72.822 400 80 407.178 80 416V448ZM416 400C424.822 400 432 407.178 432 416V448C432 456.822 424.822 464 416 464H384C375.178 464 368 456.822 368 448V416C368 407.178 375.178 400 384 400H416ZM392 384H384C366.326 384 352 398.326 352 416V424H96V416C96 398.326 81.674 384 64 384H56V128H64C81.674 128 96 113.674 96 96V88H352V96C352 113.674 366.326 128 384 128H392V384Z" })
  }
));
VectorSquareThin.displayName = "VectorSquareThin";
var VectorSquare_default = VectorSquareThin;
