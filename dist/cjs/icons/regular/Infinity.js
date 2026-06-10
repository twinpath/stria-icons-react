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
var Infinity_exports = {};
__export(Infinity_exports, {
  default: () => Infinity_default
});
module.exports = __toCommonJS(Infinity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InfinityRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M484.375 96C407 96 349.25 164.125 320 208.5C290.75 164.125 233 96 155.625 96C69.75 96 0 167.75 0 256S69.75 416 155.625 416C233.125 416 290.75 347.875 320 303.5C349.25 347.875 407 416 484.375 416C570.25 416 640 344.25 640 256S570.25 96 484.375 96ZM155.625 368C96.25 368 48 317.75 48 256S96.25 144 155.625 144C223.375 144 276.125 226.25 292.75 256C276 285.75 223.375 368 155.625 368ZM484.375 368C416.625 368 363.875 285.75 347.25 256C364 226.25 416.625 144 484.375 144C543.75 144 592 194.25 592 256S543.75 368 484.375 368Z" })
  }
));
InfinityRegular.displayName = "InfinityRegular";
var Infinity_default = InfinityRegular;
