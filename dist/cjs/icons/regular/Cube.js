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
var Cube_exports = {};
__export(Cube_exports, {
  default: () => Cube_default
});
module.exports = __toCommonJS(Cube_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CubeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M491.236 85.312L278.473 4.145C271.227 1.383 263.613 0 256 0S240.773 1.383 233.527 4.145L20.764 85.312C8.273 90.076 0 102.223 0 115.793V396.207C0 409.777 8.273 421.924 20.764 426.688L233.527 507.855C240.773 510.617 248.387 512 256 512S271.227 510.617 278.473 507.855L491.236 426.688C503.727 421.924 512 409.777 512 396.207V115.793C512 102.223 503.727 90.076 491.236 85.312ZM250.631 48.994C252.359 48.336 254.166 48 256 48S259.641 48.336 261.363 48.992L456.17 123.311L256 198.375L55.83 123.311L250.631 48.994ZM48 171.627L232 240.627V455.898L48 385.703V171.627ZM280 455.898V240.627L464 171.627V385.703L280 455.898Z" })
  }
));
CubeRegular.displayName = "CubeRegular";
var Cube_default = CubeRegular;
