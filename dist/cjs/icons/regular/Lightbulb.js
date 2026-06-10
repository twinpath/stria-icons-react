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
var Lightbulb_exports = {};
__export(Lightbulb_exports, {
  default: () => Lightbulb_default
});
module.exports = __toCommonJS(Lightbulb_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LightbulbRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M112.062 454.328C112.062 460.625 113.938 466.781 117.406 472.031L134.5 497.719C139.75 505.594 151.688 512 161.156 512H222.875C232.312 512 244.25 505.594 249.5 497.719L266.594 472.031C269.531 467.594 271.937 459.656 271.937 454.328L272 415.984H112L112.062 454.328ZM192 0C90.004 0.32 16 82.973 16 175.992C16 220.367 32.438 260.836 59.562 291.773C76.094 310.617 101.906 350.004 111.781 383.223C111.812 383.473 111.844 383.738 111.875 384.004H272.125C272.156 383.738 272.187 383.488 272.219 383.223C282.094 350.004 307.906 310.617 324.437 291.773C351.562 260.836 368 220.367 368 175.992C368 78.797 289.213 0.004 192 0ZM288.355 260.117C272.699 277.965 253.318 306.414 239.307 336.004H144.693C130.684 306.414 111.305 277.969 95.654 260.129C75.242 236.848 64 206.965 64 175.992C64 113.273 112.115 48.25 191.994 48C262.58 48.004 320 105.422 320 175.992C320 206.965 308.758 236.848 288.355 260.117ZM176 80C131.891 80 96 115.875 96 160C96 168.844 103.156 176 112 176S128 168.844 128 160C128 133.531 149.531 112 176 112C184.844 112 192 104.844 192 96S184.844 80 176 80Z" })
  }
));
LightbulbRegular.displayName = "LightbulbRegular";
var Lightbulb_default = LightbulbRegular;
