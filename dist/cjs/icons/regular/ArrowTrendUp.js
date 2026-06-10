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
var ArrowTrendUp_exports = {};
__export(ArrowTrendUp_exports, {
  default: () => ArrowTrendUp_default
});
module.exports = __toCommonJS(ArrowTrendUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowTrendUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 120V296C576 309.25 565.25 320 552 320S528 309.25 528 296V177.938L336.969 368.969C332.281 373.656 326.141 376 320 376S307.719 373.656 303.031 368.969L192 257.938L40.969 408.969C36.281 413.656 30.156 416 24 416C5.205 416 0 398.802 0 392C0 385.859 2.344 379.719 7.031 375.031L175.031 207.031C179.719 202.344 185.859 200 192 200S204.281 202.344 208.969 207.031L320 318.062L494.062 144H376C362.75 144 352 133.25 352 120S362.75 96 376 96H552C565.25 96 576 106.75 576 120Z" })
  }
));
ArrowTrendUpRegular.displayName = "ArrowTrendUpRegular";
var ArrowTrendUp_default = ArrowTrendUpRegular;
