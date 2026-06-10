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
var ArrowsRetweet_exports = {};
__export(ArrowsRetweet_exports, {
  default: () => ArrowsRetweet_default
});
module.exports = __toCommonJS(ArrowsRetweet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsRetweetLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 368H144V118.625L228.687 203.312C231.812 206.438 235.906 208 240 208S248.188 206.438 251.312 203.312C257.562 197.062 257.562 186.937 251.312 180.688L139.312 68.688C133.062 62.438 122.937 62.438 116.687 68.688L4.688 180.688C-1.563 186.938 -1.563 197.063 4.688 203.312S21.063 209.562 27.312 203.312L112 118.625V384C112 392.844 119.156 400 128 400H336C344.844 400 352 392.844 352 384S344.844 368 336 368ZM635.312 308.688C629.062 302.438 618.937 302.438 612.688 308.688L528 393.375V128C528 119.156 520.844 112 512 112H304C295.156 112 288 119.156 288 128S295.156 144 304 144H496V393.375L411.312 308.688C405.062 302.438 394.937 302.438 388.688 308.688S382.438 325.063 388.688 331.312L500.688 443.312C503.812 446.438 507.906 448 512 448S520.188 446.438 523.312 443.312L635.312 331.312C641.562 325.062 641.562 314.938 635.312 308.688Z" })
  }
));
ArrowsRetweetLight.displayName = "ArrowsRetweetLight";
var ArrowsRetweet_default = ArrowsRetweetLight;
