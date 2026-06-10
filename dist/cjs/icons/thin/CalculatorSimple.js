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
var CalculatorSimple_exports = {};
__export(CalculatorSimple_exports, {
  default: () => CalculatorSimple_default
});
module.exports = __toCommonJS(CalculatorSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CalculatorSimpleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 120H184C188.406 120 192 116.406 192 112S188.406 104 184 104H40C35.594 104 32 107.594 32 112S35.594 120 40 120ZM328 120H392V184C392 188.406 395.594 192 400 192S408 188.406 408 184V120H472C476.406 120 480 116.406 480 112S476.406 104 472 104H408V40C408 35.594 404.406 32 400 32S392 35.594 392 40V104H328C323.594 104 320 107.594 320 112S323.594 120 328 120ZM168.568 343.432C165.453 340.316 160.371 340.316 157.254 343.432L112 388.686L66.746 343.432C63.629 340.316 58.547 340.316 55.432 343.432S52.316 351.629 55.432 354.746L100.686 400L55.432 445.254C52.316 448.371 52.316 453.453 55.432 456.568S63.629 459.684 66.746 456.568L112 411.314L157.254 456.568C160.371 459.684 165.453 459.684 168.568 456.568S171.684 448.371 168.568 445.254L123.314 400L168.568 354.746C171.684 351.629 171.684 346.547 168.568 343.432ZM472 360H328C323.594 360 320 363.594 320 368S323.594 376 328 376H472C476.406 376 480 372.406 480 368S476.406 360 472 360ZM472 424H328C323.594 424 320 427.594 320 432S323.594 440 328 440H472C476.406 440 480 436.406 480 432S476.406 424 472 424ZM504 248H264V8C264 3.578 260.406 0 256 0S248 3.578 248 8V248H8C3.594 248 0 251.578 0 256S3.594 264 8 264H248V504C248 508.422 251.594 512 256 512S264 508.422 264 504V264H504C508.406 264 512 260.422 512 256S508.406 248 504 248Z" })
  }
));
CalculatorSimpleThin.displayName = "CalculatorSimpleThin";
var CalculatorSimple_default = CalculatorSimpleThin;
