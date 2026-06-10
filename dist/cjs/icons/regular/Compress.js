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
var Compress_exports = {};
__export(Compress_exports, {
  default: () => Compress_default
});
module.exports = __toCommonJS(Compress_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136 320H24C10.746 320 0 330.742 0 344C0 357.254 10.746 368 24 368H112V456C112 469.254 122.746 480 136 480S160 469.254 160 456V344C160 330.742 149.254 320 136 320ZM312 192H424C437.254 192 448 181.254 448 168C448 154.742 437.254 144 424 144H336V56C336 42.742 325.254 32 312 32S288 42.742 288 56V168C288 181.254 298.746 192 312 192ZM136 32C122.746 32 112 42.742 112 56V144H24C10.746 144 0 154.742 0 168C0 181.254 10.746 192 24 192H136C149.254 192 160 181.254 160 168V56C160 42.742 149.254 32 136 32ZM424 320H312C298.746 320 288 330.742 288 344V456C288 469.254 298.746 480 312 480S336 469.254 336 456V368H424C437.254 368 448 357.254 448 344C448 330.742 437.254 320 424 320Z" })
  }
));
CompressRegular.displayName = "CompressRegular";
var Compress_default = CompressRegular;
