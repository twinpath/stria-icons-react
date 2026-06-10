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
var LineHeight_exports = {};
__export(LineHeight_exports, {
  default: () => LineHeight_default
});
module.exports = __toCommonJS(LineHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LineHeightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 128H544C561.674 128 576 113.674 576 96S561.674 64 544 64H288C270.326 64 256 78.326 256 96S270.326 128 288 128ZM544 224H288C270.326 224 256 238.326 256 256S270.326 288 288 288H544C561.674 288 576 273.674 576 256S561.674 224 544 224ZM544 384H288C270.326 384 256 398.326 256 416S270.326 448 288 448H544C561.674 448 576 433.674 576 416S561.674 384 544 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M182.625 361.375C195.125 373.875 195.125 394.125 182.625 406.625L118.625 470.625C112.375 476.875 104.188 480 96 480S79.625 476.875 73.375 470.625L9.375 406.625C-3.125 394.125 -3.125 373.875 9.375 361.375S42.125 348.875 54.625 361.375L64 370.75V141.25L54.625 150.625C42.125 163.125 21.875 163.125 9.375 150.625S-3.125 117.875 9.375 105.375L73.375 41.375C85.875 28.875 106.125 28.875 118.625 41.375L182.625 105.375C195.125 117.875 195.125 138.125 182.625 150.625C176.375 156.875 168.188 160 160 160S143.625 156.875 137.375 150.625L128 141.25V370.75L137.375 361.375C149.875 348.875 170.125 348.875 182.625 361.375Z" })
    ]
  }
));
LineHeightDuotone.displayName = "LineHeightDuotone";
var LineHeight_default = LineHeightDuotone;
