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
var RulerTriangle_exports = {};
__export(RulerTriangle_exports, {
  default: () => RulerTriangle_default
});
module.exports = __toCommonJS(RulerTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RulerTriangleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.625 457.379L449.66 404.418L426.746 427.334C420.523 433.555 410.342 433.555 404.119 427.334C397.895 421.109 397.896 410.928 404.119 404.703L427.031 381.791L369.658 324.422L346.748 347.334C340.523 353.555 330.344 353.557 324.119 347.334C317.895 341.109 317.896 330.928 324.119 324.703L347.027 301.795L289.654 244.426L266.748 267.334C260.525 273.555 250.342 273.557 244.121 267.334C237.896 261.109 237.896 250.928 244.121 244.705L267.025 221.799L209.65 164.43L186.746 187.334C180.525 193.555 170.342 193.557 164.121 187.334C157.895 181.109 157.896 170.928 164.121 164.705L187.023 141.803L129.648 84.434L106.748 107.334C100.525 113.555 90.342 113.557 84.121 107.334C77.896 101.111 77.898 90.928 84.121 84.705L107.02 61.807L54.625 9.416C45.453 0.229 31.703 -2.553 19.75 2.479C7.797 7.416 0 19.104 0 32.039V480.002C0 497.689 14.328 512 32 512H480C492.938 512 504.609 504.219 509.562 492.252C514.516 480.283 511.781 466.535 502.625 457.379ZM128 384.01V256.021L256 384.01H128Z" })
  }
));
RulerTriangleSolid.displayName = "RulerTriangleSolid";
var RulerTriangle_default = RulerTriangleSolid;
