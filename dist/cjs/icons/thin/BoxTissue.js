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
var BoxTissue_exports = {};
__export(BoxTissue_exports, {
  default: () => BoxTissue_default
});
module.exports = __toCommonJS(BoxTissue_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxTissueThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 224H448C443.582 224 440 227.582 440 232S443.582 240 448 240H464C481.674 240 496 254.326 496 272V384H16V272C16 254.326 30.326 240 48 240H64C68.418 240 72 236.418 72 232S68.418 224 64 224H48C21.49 224 0 245.49 0 272V480C0 497.674 14.326 512 32 512H480C497.674 512 512 497.674 512 480V272C512 245.49 490.51 224 464 224ZM496 480C496 488.822 488.822 496 480 496H32C23.178 496 16 488.822 16 480V400H496V480ZM128 304H384C387.438 304 390.5 301.797 391.594 298.531L455.594 106.531C456.406 104.094 456 101.406 454.5 99.328C453 97.234 450.562 96 448 96H338.594C311.781 96 288.062 78.906 279.594 53.469C268.938 21.484 239.125 0 205.406 0H64C61.562 0 59.281 1.094 57.75 3C56.25 4.891 55.656 7.359 56.188 9.734L120.188 297.734C121 301.391 124.25 304 128 304ZM205.406 16C232.219 16 255.938 33.094 264.406 58.531C275.094 90.516 304.906 112 338.594 112H436.906L378.219 288H134.406L73.969 16H205.406Z" })
  }
));
BoxTissueThin.displayName = "BoxTissueThin";
var BoxTissue_default = BoxTissueThin;
