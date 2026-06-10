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
var CommentPlus_exports = {};
__export(CommentPlus_exports, {
  default: () => CommentPlus_default
});
module.exports = __toCommonJS(CommentPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentPlusRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.068 32C114.693 32 0.068 125.125 0.068 240C0.068 287.625 19.943 331.25 52.943 366.25C38.068 405.75 7.068 439.125 6.568 439.5C-0.057 446.5 -1.807 456.75 1.943 465.5C5.818 474.25 14.443 480 24.068 480C85.568 480 134.068 454.25 163.193 433.75C192.068 442.75 223.318 448 256.068 448C397.443 448 512.068 354.875 512.068 240S397.443 32 256.068 32ZM256.068 400C229.318 400 202.943 395.875 177.693 387.875L154.943 380.75L135.443 394.5C121.193 404.625 101.568 415.875 77.943 423.5C85.318 411.375 92.318 397.75 97.818 383.25L108.443 355.25L87.818 333.375C69.818 314.125 48.068 282.25 48.068 240C48.068 151.75 141.318 80 256.068 80S464.068 151.75 464.068 240S370.818 400 256.068 400ZM335.998 216.002H279.998V159.998C279.998 146.738 269.256 136 255.998 136S231.998 146.738 231.998 159.998V216.002H175.998C162.736 216.002 151.998 226.742 151.998 240C151.998 253.256 162.728 263.998 175.998 263.998H231.998V320.002C231.998 333.258 242.732 344 255.998 344C269.256 344 279.998 333.262 279.998 320.002V263.998H335.998C349.26 263.998 359.998 253.258 359.998 240S349.26 216.002 335.998 216.002Z" })
  }
));
CommentPlusRegular.displayName = "CommentPlusRegular";
var CommentPlus_default = CommentPlusRegular;
