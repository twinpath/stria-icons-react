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
var SquareShareNodes_exports = {};
__export(SquareShareNodes_exports, {
  default: () => SquareShareNodes_default
});
module.exports = __toCommonJS(SquareShareNodes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareShareNodesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM400 416C400 424.836 392.838 432 384 432H64C55.164 432 48 424.836 48 416V96C48 87.164 55.164 80 64 80H384C392.838 80 400 87.164 400 96V416ZM300.801 230.4C329.076 230.4 352 207.477 352 179.199S329.076 128 300.801 128C272.969 128 250.436 150.236 249.73 177.9L176.814 214.357C168.441 208.391 158.264 204.799 147.199 204.799C118.924 204.799 96 227.723 96 256S118.924 307.199 147.199 307.199C158.264 307.199 168.439 303.607 176.812 297.641L249.73 334.1C250.438 361.76 272.969 384 300.801 384C329.076 384 352 361.076 352 332.799C352 304.523 329.076 281.6 300.801 281.6C289.732 281.6 279.551 285.195 271.176 291.166L200.844 256L271.176 220.834C279.551 226.805 289.732 230.4 300.801 230.4Z" })
  }
));
SquareShareNodesRegular.displayName = "SquareShareNodesRegular";
var SquareShareNodes_default = SquareShareNodesRegular;
