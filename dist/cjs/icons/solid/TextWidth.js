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
var TextWidth_exports = {};
__export(TextWidth_exports, {
  default: () => TextWidth_default
});
module.exports = __toCommonJS(TextWidth_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextWidthSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 32H40C17.906 32 0 49.906 0 72V120C0 142.094 17.906 160 40 160S80 142.094 80 120V112H184.643C184.551 113.107 184 114.057 184 115.188V224H176C158.328 224 144 238.312 144 256S158.328 288 176 288H272C289.672 288 304 273.688 304 256S289.672 224 272 224H264V115.188C264 114.057 263.449 113.107 263.357 112H368V120C368 142.094 385.906 160 408 160S448 142.094 448 120V72C448 49.906 430.094 32 408 32ZM363.25 292.746C354 283.373 336 288.371 336 303.996V351.996H112V303.996C112 289.746 94.75 282.623 84.75 292.746L4.75 372.746C-1.5 378.996 -1.5 388.996 4.75 395.246L84.75 475.246C94 484.621 112 479.621 112 463.996V415.996H336V463.996C336 478.246 353.25 485.371 363.25 475.246L443.25 395.246C449.5 388.996 449.5 378.996 443.25 372.746L363.25 292.746Z" })
  }
));
TextWidthSolid.displayName = "TextWidthSolid";
var TextWidth_default = TextWidthSolid;
