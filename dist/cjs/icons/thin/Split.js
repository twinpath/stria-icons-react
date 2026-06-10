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
var Split_exports = {};
__export(Split_exports, {
  default: () => Split_default
});
module.exports = __toCommonJS(Split_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SplitThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.656 378.343C512.781 381.468 512.781 386.531 509.656 389.656L429.656 469.656C428.094 471.218 426.062 472 424 472S419.906 471.218 418.344 469.656C415.219 466.531 415.219 461.468 418.344 458.343L484.688 392H333.25C322.719 392 312.406 387.718 304.969 380.281L188.688 264H8C3.594 264 0 260.406 0 256S3.594 248 8 248H188.688L304.969 131.718C312.406 124.281 322.719 120 333.25 120H484.688L418.344 53.656C415.219 50.531 415.219 45.468 418.344 42.343S426.531 39.218 429.656 42.343L509.656 122.343C512.781 125.468 512.781 130.531 509.656 133.656L429.656 213.656C428.094 215.218 426.062 216 424 216S419.906 215.218 418.344 213.656C415.219 210.531 415.219 205.468 418.344 202.343L484.688 136H333.25C326.938 136 320.75 138.562 316.281 143.031L203.312 256L316.281 368.968C320.75 373.437 326.938 376 333.25 376H484.688L418.344 309.656C415.219 306.531 415.219 301.468 418.344 298.343S426.531 295.218 429.656 298.343L509.656 378.343Z" })
  }
));
SplitThin.displayName = "SplitThin";
var Split_default = SplitThin;
