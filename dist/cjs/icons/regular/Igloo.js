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
var Igloo_exports = {};
__export(Igloo_exports, {
  default: () => Igloo_default
});
module.exports = __toCommonJS(Igloo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IglooRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C128.941 32 0 160.941 0 320V416C0 451.348 28.654 480 64 480H512C547.346 480 576 451.348 576 416V320C576 160.941 447.059 32 288 32ZM397.268 320C386.229 269.768 341.496 232 288 232S189.771 269.768 178.732 320H144V192H432V320H397.268ZM352 144V88.93C389.324 99.285 422.939 118.41 450.615 144H352ZM480 192H490.66C514.176 229.098 528 272.922 528 320H480V192ZM304 80.811V144H125.385C168.195 104.416 225.232 80 288 80C293.4 80 298.688 80.457 304 80.811ZM85.34 192H96V320H48C48 272.922 61.824 229.098 85.34 192ZM64 432C55.178 432 48 424.822 48 416V368H176V432H64ZM224 432V344C224 308.719 252.719 280 288 280S352 308.719 352 344V432H224ZM512 432H400V368H528V416C528 424.822 520.822 432 512 432Z" })
  }
));
IglooRegular.displayName = "IglooRegular";
var Igloo_default = IglooRegular;
