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
const LightbulbDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M191.438 0C89.438 0.313 16 82.969 16 175.993C16 220.368 32.438 260.836 59.562 291.774C76.094 310.618 101.906 350.004 111.781 383.223C111.812 383.473 111.844 383.739 111.875 384.004H272.125C272.156 383.739 272.187 383.489 272.219 383.223C282.094 350.004 307.906 310.618 324.437 291.774C351.562 260.836 368 220.368 368 175.993C368 78.61 288.906 -0.296 191.438 0ZM192 95.997C147.875 95.997 112 131.887 112 175.993C112 184.836 104.844 191.993 96 191.993S80 184.836 80 175.993C80 114.231 130.25 64 192 64C200.844 64 208 71.157 208 80S200.844 95.997 192 95.997Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 384.008V416.008L272 416.008L271.938 454.329C271.938 459.657 269.531 467.594 266.594 472.032L249.5 497.719C244.25 505.594 232.312 512 222.875 512H161.156C151.688 512 139.75 505.594 134.5 497.719L117.406 472.032C113.938 466.782 112.062 460.625 112.062 454.329L112 416.008L112 416.008V384.008H272Z" })
    ]
  }
));
LightbulbDuotone.displayName = "LightbulbDuotone";
var Lightbulb_default = LightbulbDuotone;
