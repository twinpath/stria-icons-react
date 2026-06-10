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
var SquareLeft_exports = {};
__export(SquareLeft_exports, {
  default: () => SquareLeft_default
});
module.exports = __toCommonJS(SquareLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 224L240 224.008V168.008C240 158.477 234.344 149.852 225.625 146.008C216.875 142.195 206.719 143.914 199.719 150.383L103.719 239.133C98.781 243.664 96 250.07 96 256.758C96.312 264.539 98.875 270.008 103.844 274.508L199.844 361.758C206.875 368.164 217.031 369.789 225.719 365.945S240 353.508 240 344.008V288.008L328 288C341.25 288 352 277.25 352 264V248C352 234.75 341.25 224 328 224ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416Z" })
  }
));
SquareLeftRegular.displayName = "SquareLeftRegular";
var SquareLeft_default = SquareLeftRegular;
