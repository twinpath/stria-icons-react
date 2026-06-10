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
var ArrowTrendDown_exports = {};
__export(ArrowTrendDown_exports, {
  default: () => ArrowTrendDown_default
});
module.exports = __toCommonJS(ArrowTrendDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendDownLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 224V400C576 408.844 568.844 416 560 416H384C375.156 416 368 408.844 368 400S375.156 384 384 384H521.375L320 182.625L203.312 299.312C200.188 302.438 196.094 304 192 304S183.812 302.438 180.688 299.312L4.688 123.312C1.562 120.188 0 116.094 0 112C0 102.861 7.473 96 16 96C20.094 96 24.188 97.562 27.312 100.688L192 265.375L308.688 148.688C311.812 145.562 315.906 144 320 144S328.188 145.562 331.312 148.688L544 361.375V224C544 215.156 551.156 208 560 208S576 215.156 576 224Z" })
  }
));
ArrowTrendDownLight.displayName = "ArrowTrendDownLight";
var ArrowTrendDown_default = ArrowTrendDownLight;
