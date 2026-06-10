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
var Egg_exports = {};
__export(Egg_exports, {
  default: () => Egg_default
});
module.exports = __toCommonJS(Egg_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86 0 0 214 0 320S86 512 192 512C298 512 384 426 384 320S298 0 192 0ZM192 464C112.625 464 48 399.375 48 320C48 202.625 138.625 48 192 48S336 202.625 336 320C336 399.375 271.375 464 192 464ZM168.027 103.984C160.729 103.984 153.914 107.246 149.332 112.934C113.953 156.756 76.342 238.615 76.342 304.002C76.342 317.234 87.109 328.002 100.342 328.002C113.578 328.002 124.344 317.234 124.344 304.002C124.344 251.58 156.045 181.012 186.691 143.074C194.994 132.785 193.379 117.648 183.096 109.326C178.848 105.883 173.494 103.984 168.027 103.984Z" })
  }
));
EggRegular.displayName = "EggRegular";
var Egg_default = EggRegular;
