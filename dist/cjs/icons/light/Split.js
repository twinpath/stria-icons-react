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
var Split_exports = {};
__export(Split_exports, {
  default: () => Split_default
});
module.exports = __toCommonJS(Split_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SplitLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.312 372.688C513.562 378.938 513.562 389.063 507.312 395.312L427.312 475.312C424.188 478.438 420.094 480 416 480S407.812 478.438 404.688 475.312C398.438 469.062 398.438 458.937 404.688 452.688L457.375 400H333.25C320.625 400 308.25 394.875 299.313 385.938L185.375 272H24C15.156 272 8 264.844 8 256S15.156 240 24 240H185.375L299.313 126.062C308.25 117.125 320.625 112 333.25 112H457.375L404.687 59.312C398.437 53.062 398.437 42.937 404.687 36.688S421.062 30.438 427.312 36.688L507.312 116.688C513.562 122.938 513.562 133.063 507.312 139.312L427.312 219.312C424.188 222.438 420.094 224 416 224S407.812 222.438 404.688 219.312C398.438 213.062 398.438 202.937 404.688 196.688L457.375 144H333.25C329.031 144 324.906 145.719 321.938 148.688L214.625 256L321.937 363.312C324.906 366.281 329.031 368 333.25 368H457.375L404.687 315.312C398.437 309.062 398.437 298.937 404.687 292.688S421.062 286.438 427.312 292.688L507.312 372.688Z" })
  }
));
SplitLight.displayName = "SplitLight";
var Split_default = SplitLight;
