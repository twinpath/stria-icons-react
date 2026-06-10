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
var SquareChevronLeft_exports = {};
__export(SquareChevronLeft_exports, {
  default: () => SquareChevronLeft_default
});
module.exports = __toCommonJS(SquareChevronLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.969 351.031L177.938 256L272.969 160.969C282.344 151.594 282.344 136.406 272.969 127.031S248.406 117.656 239.031 127.031L127.031 239.031C122.344 243.719 120 249.844 120 256S122.344 268.281 127.031 272.969L239.031 384.969C248.406 394.344 263.594 394.344 272.969 384.969S282.344 360.406 272.969 351.031ZM448 416V96C448 60.654 419.344 32 384 32H64C28.656 32 0 60.654 0 96V416C0 451.346 28.656 480 64 480H384C419.344 480 448 451.346 448 416ZM64 432C55.18 432 48 424.822 48 416V96C48 87.178 55.18 80 64 80H384C392.82 80 400 87.178 400 96V416C400 424.822 392.82 432 384 432H64Z" })
  }
));
SquareChevronLeftRegular.displayName = "SquareChevronLeftRegular";
var SquareChevronLeft_default = SquareChevronLeftRegular;
