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
var ArrowDownLeftAndArrowUpRightToCenter_exports = {};
__export(ArrowDownLeftAndArrowUpRightToCenter_exports, {
  default: () => ArrowDownLeftAndArrowUpRightToCenter_default
});
module.exports = __toCommonJS(ArrowDownLeftAndArrowUpRightToCenter_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownLeftAndArrowUpRightToCenterLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 288H48C39.156 288 32 295.156 32 304S39.156 320 48 320H169.375L20.688 468.688C14.438 474.938 14.438 485.063 20.688 491.312S37.063 497.562 43.312 491.312L192 342.625V464C192 472.844 199.156 480 208 480S224 472.844 224 464V304C224 295.156 216.844 288 208 288ZM491.312 20.688C485.062 14.438 474.937 14.438 468.688 20.688L320 169.375V48C320 39.156 312.844 32 304 32S288 39.156 288 48V208C288 216.844 295.156 224 304 224H464C472.844 224 480 216.844 480 208S472.844 192 464 192H342.625L491.312 43.312C497.562 37.062 497.562 26.938 491.312 20.688Z" })
  }
));
ArrowDownLeftAndArrowUpRightToCenterLight.displayName = "ArrowDownLeftAndArrowUpRightToCenterLight";
var ArrowDownLeftAndArrowUpRightToCenter_default = ArrowDownLeftAndArrowUpRightToCenterLight;
