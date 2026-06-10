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
var ArrowsLeftRight_exports = {};
__export(ArrowsLeftRight_exports, {
  default: () => ArrowsLeftRight_default
});
module.exports = __toCommonJS(ArrowsLeftRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowsLeftRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.312 267.312L395.312 379.312C392.188 382.438 388.094 384 384 384S375.812 382.438 372.688 379.312C366.438 373.062 366.438 362.937 372.688 356.688L457.375 272H54.625L139.312 356.688C145.562 362.938 145.562 373.063 139.312 379.312C136.188 382.438 132.094 384 128 384S119.812 382.438 116.688 379.312L4.688 267.312C-1.563 261.062 -1.563 250.937 4.688 244.688L116.688 132.688C122.938 126.438 133.063 126.438 139.312 132.688S145.562 149.063 139.312 155.312L54.625 240H457.375L372.687 155.312C366.437 149.062 366.437 138.937 372.687 132.688S389.062 126.438 395.312 132.688L507.312 244.688C513.562 250.938 513.562 261.062 507.312 267.312Z" })
  }
));
ArrowsLeftRightLight.displayName = "ArrowsLeftRightLight";
var ArrowsLeftRight_default = ArrowsLeftRightLight;
