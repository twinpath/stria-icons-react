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
var H1_exports = {};
__export(H1_exports, {
  default: () => H1_default
});
module.exports = __toCommonJS(H1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const H1Regular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M296 64C282.75 64 272 74.75 272 88V224H48V88C48 74.75 37.25 64 24 64S0 74.75 0 88V424C0 437.25 10.75 448 24 448S48 437.25 48 424V272H272V424C272 437.25 282.75 448 296 448S320 437.25 320 424V88C320 74.75 309.25 64 296 64ZM552 400.002H504V88.021C504 79.18 499.125 71.055 491.312 66.867C483.5 62.648 474 63.117 466.688 68.055L394.688 116.051C383.656 123.395 380.688 138.301 388.031 149.33C395.406 160.361 410.25 163.299 421.313 155.986L456 132.863V400.002H408C394.75 400.002 384 410.752 384 424.002C384 437.25 394.75 448 408 448H552C565.25 448 576 437.25 576 424.002C576 410.752 565.25 400.002 552 400.002Z" })
  }
));
H1Regular.displayName = "H1Regular";
var H1_default = H1Regular;
