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
var ArrowRightFromBracket_exports = {};
__export(ArrowRightFromBracket_exports, {
  default: () => ArrowRightFromBracket_default
});
module.exports = __toCommonJS(ArrowRightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.312 244.688L363.312 100.688C357.062 94.438 346.937 94.438 340.688 100.688S334.438 117.063 340.688 123.312L457.375 240H176C167.156 240 160 247.156 160 256S167.156 272 176 272H457.375L340.688 388.688C334.438 394.938 334.438 405.063 340.688 411.312S357.063 417.562 363.312 411.312L507.312 267.312C510.438 264.188 512 260.094 512 256S510.438 247.812 507.312 244.688ZM176 448H80C53.531 448 32 426.469 32 400V112C32 85.531 53.531 64 80 64H176C184.844 64 192 56.844 192 48S184.844 32 176 32H80C35.875 32 0 67.875 0 112V400C0 444.125 35.875 480 80 480H176C184.844 480 192 472.844 192 464S184.844 448 176 448Z" })
  }
));
ArrowRightFromBracketLight.displayName = "ArrowRightFromBracketLight";
var ArrowRightFromBracket_default = ArrowRightFromBracketLight;
