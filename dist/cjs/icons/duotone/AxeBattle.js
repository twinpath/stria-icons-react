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
var AxeBattle_exports = {};
__export(AxeBattle_exports, {
  default: () => AxeBattle_default
});
module.exports = __toCommonJS(AxeBattle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeBattleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M101 13.586C97.875 0.584 83.375 -4.543 74.25 4.709C28.625 50.844 0 117.609 0 192S28.625 333.156 74.25 379.291C83.375 388.543 97.875 383.416 101 370.414C106.404 347.768 116.572 327.453 130.219 310.812C152.885 283.172 188.256 269.143 224 269.143V114.857C188.256 114.857 152.885 100.826 130.219 73.187C116.572 56.547 106.404 36.23 101 13.586ZM512 160.869C505.146 99.299 478.543 44.562 439.369 5.08C430.23 -4.129 414.914 0.99 411.871 13.602C405.781 38.846 393.707 61.193 377.461 78.783C355.049 103.047 322.158 114.857 289.127 114.857H288V269.143H289.127C322.158 269.143 355.049 280.953 377.461 305.217C393.707 322.807 405.781 345.152 411.871 370.396C414.914 383.008 430.23 388.129 439.369 378.918C478.543 339.438 505.146 284.701 512 223.131L449.25 192L512 160.869Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64V496C288 504.836 280.836 512 272 512H240C231.164 512 224 504.836 224 496V64C224 46.326 238.328 32 256 32S288 46.326 288 64Z" })
    ]
  }
));
AxeBattleDuotone.displayName = "AxeBattleDuotone";
var AxeBattle_default = AxeBattleDuotone;
