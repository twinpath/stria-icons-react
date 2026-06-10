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
var SignalBars_exports = {};
__export(SignalBars_exports, {
  default: () => SignalBars_default
});
module.exports = __toCommonJS(SignalBars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalBarsThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 384H64C46.375 384 32 398.375 32 416V480C32 497.625 46.375 512 64 512H96C113.625 512 128 497.625 128 480V416C128 398.375 113.625 384 96 384ZM112 480C112 488.822 104.822 496 96 496H64C55.178 496 48 488.822 48 480V416C48 407.178 55.178 400 64 400H96C104.822 400 112 407.178 112 416V480ZM256 256H224C206.375 256 192 270.375 192 288V480C192 497.625 206.375 512 224 512H256C273.625 512 288 497.625 288 480V288C288 270.375 273.625 256 256 256ZM272 480C272 488.822 264.822 496 256 496H224C215.178 496 208 488.822 208 480V288C208 279.178 215.178 272 224 272H256C264.822 272 272 279.178 272 288V480ZM416 128H384C366.375 128 352 142.375 352 160V480C352 497.625 366.375 512 384 512H416C433.625 512 448 497.625 448 480V160C448 142.375 433.625 128 416 128ZM432 480C432 488.822 424.822 496 416 496H384C375.178 496 368 488.822 368 480V160C368 151.178 375.178 144 384 144H416C424.822 144 432 151.178 432 160V480ZM576 0H544C526.375 0 512 14.375 512 32V480C512 497.625 526.375 512 544 512H576C593.625 512 608 497.625 608 480V32C608 14.375 593.625 0 576 0ZM592 480C592 488.822 584.822 496 576 496H544C535.178 496 528 488.822 528 480V32C528 23.178 535.178 16 544 16H576C584.822 16 592 23.178 592 32V480Z" })
  }
));
SignalBarsThin.displayName = "SignalBarsThin";
var SignalBars_default = SignalBarsThin;
