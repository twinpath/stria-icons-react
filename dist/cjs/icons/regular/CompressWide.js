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
var CompressWide_exports = {};
__export(CompressWide_exports, {
  default: () => CompressWide_default
});
module.exports = __toCommonJS(CompressWide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompressWideRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376 224H488C501.254 224 512 213.254 512 200C512 186.742 501.254 176 488 176H400V88C400 74.742 389.254 64 376 64S352 74.742 352 88V200C352 213.254 362.746 224 376 224ZM136 288H24C10.746 288 0 298.742 0 312C0 325.254 10.746 336 24 336H112V424C112 437.254 122.746 448 136 448S160 437.254 160 424V312C160 298.742 149.254 288 136 288ZM488 288H376C362.746 288 352 298.742 352 312V424C352 437.254 362.746 448 376 448S400 437.254 400 424V336H488C501.254 336 512 325.254 512 312C512 298.742 501.254 288 488 288ZM136 64C122.746 64 112 74.742 112 88V176H24C10.746 176 0 186.742 0 200C0 213.254 10.746 224 24 224H136C149.254 224 160 213.254 160 200V88C160 74.742 149.254 64 136 64Z" })
  }
));
CompressWideRegular.displayName = "CompressWideRegular";
var CompressWide_default = CompressWideRegular;
