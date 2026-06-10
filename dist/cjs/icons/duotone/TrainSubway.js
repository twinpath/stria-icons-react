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
var TrainSubway_exports = {};
__export(TrainSubway_exports, {
  default: () => TrainSubway_default
});
module.exports = __toCommonJS(TrainSubway_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M413.64 498.342L362.263 446.965C358.845 447.334 355.515 448 352 448H295.421L354.736 507.312C357.736 510.314 361.806 512 366.05 512H407.984C415.111 512 418.679 503.383 413.64 498.342ZM85.736 446.965L34.359 498.342C29.32 503.383 32.888 512 40.015 512H81.949C86.193 512 90.263 510.314 93.263 507.312L152.578 448H96C92.484 448 89.154 447.334 85.736 446.965ZM384 224V128C384 110.4 369.599 96 352 96H272C254.326 96 240 110.326 240 128V224C240 241.672 254.326 256 272 256H352C369.599 256 384 241.6 384 224ZM176 96H96C78.4 96 64 110.4 64 128V224C64 241.6 78.4 256 96 256H176C193.673 256 208 241.672 208 224V128C208 110.326 193.673 96 176 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 0H96C42.98 0 0 42.98 0 96V352C0 401.504 37.611 441.779 85.736 446.965C89.154 447.334 92.484 448 96 448H352C355.516 448 358.846 447.334 362.264 446.965C410.389 441.779 448 401.504 448 352V96C448 42.98 405.02 0 352 0ZM96 384C78.375 384 64 369.625 64 352S78.375 320 96 320S128 334.375 128 352S113.625 384 96 384ZM208 224C208 241.672 193.674 256 176 256H96C78.4 256 64 241.6 64 224V128C64 110.4 78.4 96 96 96H176C193.674 96 208 110.326 208 128V224ZM352 384C334.375 384 320 369.625 320 352S334.375 320 352 320S384 334.375 384 352S369.625 384 352 384ZM384 224C384 241.6 369.6 256 352 256H272C254.326 256 240 241.672 240 224V128C240 110.326 254.326 96 272 96H352C369.6 96 384 110.4 384 128V224Z" })
    ]
  }
));
TrainSubwayDuotone.displayName = "TrainSubwayDuotone";
var TrainSubway_default = TrainSubwayDuotone;
