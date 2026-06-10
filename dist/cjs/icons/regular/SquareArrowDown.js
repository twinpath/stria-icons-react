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
var SquareArrowDown_exports = {};
__export(SquareArrowDown_exports, {
  default: () => SquareArrowDown_default
});
module.exports = __toCommonJS(SquareArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M310.414 231.656L248.008 298.867V152C248.008 138.75 237.258 128 224.008 128S200.008 138.75 200.008 152V298.867L137.602 231.656C128.539 221.938 113.383 221.406 103.664 230.406C93.977 239.438 93.414 254.625 102.414 264.344L206.414 376.344C210.977 381.219 217.32 384 224.008 384S237.039 381.219 241.602 376.344L345.602 264.344C354.602 254.625 354.039 239.438 344.352 230.406C334.633 221.406 319.477 221.938 310.414 231.656ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416Z" })
  }
));
SquareArrowDownRegular.displayName = "SquareArrowDownRegular";
var SquareArrowDown_default = SquareArrowDownRegular;
