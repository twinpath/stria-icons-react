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
var TextHeight_exports = {};
__export(TextHeight_exports, {
  default: () => TextHeight_default
});
module.exports = __toCommonJS(TextHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextHeightRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 32H24C10.75 32 0 42.75 0 56V136C0 149.25 10.75 160 24 160S48 149.25 48 136V80H136V432H88C74.75 432 64 442.75 64 456S74.75 480 88 480H232C245.25 480 256 469.25 256 456S245.25 432 232 432H184V80H272V136C272 149.25 282.75 160 296 160S320 149.25 320 136V56C320 42.75 309.25 32 296 32ZM535.031 367.031L504 398.062V113.938L535.031 144.969C539.719 149.656 545.844 152 552 152S564.281 149.656 568.969 144.969C578.344 135.594 578.344 120.406 568.969 111.031L496.969 39.031C487.594 29.656 472.406 29.656 463.031 39.031L391.031 111.031C381.656 120.406 381.656 135.594 391.031 144.969S415.594 154.344 424.969 144.969L456 113.938V398.062L424.969 367.031C415.594 357.656 400.406 357.656 391.031 367.031S381.656 391.594 391.031 400.969L463.031 472.969C467.719 477.656 473.844 480 480 480S492.281 477.656 496.969 472.969L568.969 400.969C578.344 391.594 578.344 376.406 568.969 367.031S544.406 357.656 535.031 367.031Z" })
  }
));
TextHeightRegular.displayName = "TextHeightRegular";
var TextHeight_default = TextHeightRegular;
