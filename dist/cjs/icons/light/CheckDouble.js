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
var CheckDouble_exports = {};
__export(CheckDouble_exports, {
  default: () => CheckDouble_default
});
module.exports = __toCommonJS(CheckDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckDoubleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.312 164.688C469.062 158.438 458.937 158.438 452.687 164.688L192 425.375L59.312 292.688C53.062 286.438 42.937 286.438 36.687 292.688S30.437 309.063 36.687 315.312L180.687 459.312C183.812 462.438 187.906 464 192 464S200.187 462.438 203.312 459.312L475.312 187.312C481.562 181.062 481.562 170.938 475.312 164.688ZM180.687 235.312C183.812 238.438 187.906 240 192 240S200.187 238.438 203.312 235.312L379.312 59.312C385.562 53.062 385.562 42.937 379.312 36.688S362.937 30.438 356.687 36.688L192 201.375L123.312 132.688C117.062 126.438 106.937 126.438 100.687 132.688S94.437 149.063 100.687 155.312L180.687 235.312Z" })
  }
));
CheckDoubleLight.displayName = "CheckDoubleLight";
var CheckDouble_default = CheckDoubleLight;
