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
var Dumbbell_exports = {};
__export(Dumbbell_exports, {
  default: () => Dumbbell_default
});
module.exports = __toCommonJS(Dumbbell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumbbellThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632 248H608V128C608 110.326 593.672 96 576 96H544C538.043 96 532.777 98.068 528 100.904V96C528 78.326 513.672 64 496 64H464C446.328 64 432 78.326 432 96V248H208V96C208 78.326 193.672 64 176 64H144C126.328 64 112 78.326 112 96V100.904C107.223 98.068 101.957 96 96 96H64C46.328 96 32 110.326 32 128V248H8C3.594 248 0 251.594 0 256S3.594 264 8 264H32V384C32 401.674 46.328 416 64 416H96C101.957 416 107.223 413.932 112 411.096V416C112 433.674 126.328 448 144 448H176C193.672 448 208 433.674 208 416V264H432V416C432 433.674 446.328 448 464 448H496C513.672 448 528 433.674 528 416V411.096C532.777 413.932 538.043 416 544 416H576C593.672 416 608 401.674 608 384V264H632C636.406 264 640 260.406 640 256S636.406 248 632 248ZM96 400H64C55.176 400 48 392.822 48 384V128C48 119.178 55.176 112 64 112H96C104.824 112 112 119.178 112 128V384C112 392.822 104.824 400 96 400ZM192 416C192 424.822 184.824 432 176 432H144C135.176 432 128 424.822 128 416V96C128 87.178 135.176 80 144 80H176C184.824 80 192 87.178 192 96V416ZM512 416C512 424.822 504.824 432 496 432H464C455.176 432 448 424.822 448 416V96C448 87.178 455.176 80 464 80H496C504.824 80 512 87.178 512 96V416ZM592 384C592 392.822 584.824 400 576 400H544C535.176 400 528 392.822 528 384V128C528 119.178 535.176 112 544 112H576C584.824 112 592 119.178 592 128V384Z" })
  }
));
DumbbellThin.displayName = "DumbbellThin";
var Dumbbell_default = DumbbellThin;
