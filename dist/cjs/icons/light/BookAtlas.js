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
var BookAtlas_exports = {};
__export(BookAtlas_exports, {
  default: () => BookAtlas_default
});
module.exports = __toCommonJS(BookAtlas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookAtlasLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 80C153.25 80 96 137.25 96 208S153.25 336 224 336S352 278.75 352 208S294.75 80 224 80ZM129.625 224H168.75C170.25 251 175.25 275.375 182.875 294.375C155.25 281.125 134.875 255.25 129.625 224ZM168.75 192H129.625C134.875 160.75 155.25 134.875 182.875 121.625C175.25 140.625 170.25 165 168.75 192ZM224 302.75C216.25 295.25 203.25 268.25 200.625 224H247.375C244.75 268.25 231.75 295.25 224 302.75ZM200.5 192C203.25 147.75 216.25 120.75 224 113.25C231.75 120.75 244.75 147.75 247.375 192H200.5ZM265.125 294.375C272.75 275.375 277.75 251 279.25 224H318.375C313.125 255.25 292.75 281.125 265.125 294.375ZM279.25 192C277.75 165 272.75 140.625 265.125 121.625C292.75 134.875 313.125 160.75 318.375 192H279.25ZM448 368V48C448 21.49 426.51 0 400 0H80C35.816 0 0 35.816 0 80V448C0 483.346 28.654 512 64 512H432C440.844 512 448 504.844 448 496S440.844 480 432 480H416V413.053C434.584 406.426 448 388.832 448 368ZM384 480H64C46.359 480 32 465.641 32 448S46.359 416 64 416H384V480ZM400 384H64C52.291 384 41.451 387.389 32 392.9V80C32 53.49 53.49 32 80 32H400C408.836 32 416 39.164 416 48V368C416 376.836 408.836 384 400 384Z" })
  }
));
BookAtlasLight.displayName = "BookAtlasLight";
var BookAtlas_default = BookAtlasLight;
