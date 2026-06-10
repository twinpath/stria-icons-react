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
var Sleigh_exports = {};
__export(Sleigh_exports, {
  default: () => Sleigh_default
});
module.exports = __toCommonJS(Sleigh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SleighRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M612.75 350.75L609.625 348.25C599.313 340 584.125 341.687 575.875 352L575.875 352C567.591 362.355 569.27 377.466 579.625 385.75L582.75 388.25C589.15 393.288 592.435 401.145 591.797 409.396C590.784 422.488 578.663 432 565.532 432L440 432V384C506.25 384 560 330.25 560 264V144H584C597.2 144 608 133.2 608 120V120C608 106.8 597.2 96 584 96H432C423.2 96 416 103.2 416 112V184C416 249.25 281.625 236.25 234.75 141.375C201.5 73.875 134.625 32 60.25 32H24C10.8 32 0 42.8 0 56V56C0 69.2 10.8 80 24 80H32V232C32 298.875 75.75 355.25 136 375.5V432H56C42.8 432 32 442.8 32 456V456C32 469.2 42.8 480 56 480H564C603 480 637.75 450.75 639.875 411.75C641.25 387.875 631.25 365.375 612.75 350.75ZM80 232V81.375C127.875 87.875 169.625 117.75 191.75 162.625C260.25 301.625 464 308.375 464 184V144H512V264C512 303.75 479.75 336 440 336H184C126.75 336 80 289.25 80 232ZM392 432H184V384H392V432Z" })
  }
));
SleighRegular.displayName = "SleighRegular";
var Sleigh_default = SleighRegular;
