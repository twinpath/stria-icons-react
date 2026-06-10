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
var SquareCode_exports = {};
__export(SquareCode_exports, {
  default: () => SquareCode_default
});
module.exports = __toCommonJS(SquareCode_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCodeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.969 175.031C183.594 165.656 168.406 165.656 159.031 175.031L95.031 239.031C85.656 248.406 85.656 263.594 95.031 272.969L159.031 336.969C163.719 341.656 169.859 344 176 344S188.281 341.656 192.969 336.969C202.344 327.594 202.344 312.406 192.969 303.031L145.938 256L192.969 208.969C202.344 199.594 202.344 184.406 192.969 175.031ZM288.969 175.031C279.594 165.656 264.406 165.656 255.031 175.031S245.656 199.594 255.031 208.969L302.062 256L255.031 303.031C245.656 312.406 245.656 327.594 255.031 336.969C259.719 341.656 265.859 344 272 344S284.281 341.656 288.969 336.969L352.969 272.969C362.344 263.594 362.344 248.406 352.969 239.031L288.969 175.031ZM384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM400 416C400 424.824 392.822 432 384 432H64C55.178 432 48 424.824 48 416V96C48 87.176 55.178 80 64 80H384C392.822 80 400 87.176 400 96V416Z" })
  }
));
SquareCodeRegular.displayName = "SquareCodeRegular";
var SquareCode_default = SquareCodeRegular;
