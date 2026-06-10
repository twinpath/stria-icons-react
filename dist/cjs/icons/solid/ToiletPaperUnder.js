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
var ToiletPaperUnder_exports = {};
__export(ToiletPaperUnder_exports, {
  default: () => ToiletPaperUnder_default
});
module.exports = __toCommonJS(ToiletPaperUnder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToiletPaperUnderSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 384C469 384 512 298 512 192C512 86 469 0 416 0S320 86 320 192C320 298 363 384 416 384ZM416 128C433.625 128 448 156.625 448 192S433.625 256 416 256S384 227.375 384 192S398.375 128 416 128ZM288 192C288 108.402 311.674 38.477 348.436 0H96C43 0 0 86 0 192C0 298 43 384 96 384H348.436C311.674 345.523 288 275.598 288 192ZM47.975 224C39.1 224 31.975 216.875 31.975 208S39.1 192 47.975 192S63.975 199.125 63.975 208S56.85 224 47.975 224ZM111.975 224C103.1 224 95.975 216.875 95.975 208S103.1 192 111.975 192S127.975 199.125 127.975 208S120.85 224 111.975 224ZM175.975 224C167.1 224 159.975 216.875 159.975 208S167.1 192 175.975 192S191.975 199.125 191.975 208S184.85 224 175.975 224ZM239.975 224C231.1 224 223.975 216.875 223.975 208S231.1 192 239.975 192S255.975 199.125 255.975 208S248.85 224 239.975 224ZM422.984 415.703L423.268 416H128V480C128 497.672 142.326 512 160 512H480C497.674 512 512 497.672 512 480V342.988C490.297 385.523 459.109 412.617 422.984 415.703Z" })
  }
));
ToiletPaperUnderSolid.displayName = "ToiletPaperUnderSolid";
var ToiletPaperUnder_default = ToiletPaperUnderSolid;
