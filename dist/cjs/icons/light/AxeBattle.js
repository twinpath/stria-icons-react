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
var AxeBattle_exports = {};
__export(AxeBattle_exports, {
  default: () => AxeBattle_default
});
module.exports = __toCommonJS(AxeBattle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AxeBattleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M101 13.625C99 5.125 92.125 0 85 0C81.25 0 77.375 1.5 74.25 4.75C28.625 50.875 0 117.625 0 192S28.625 333.125 74.25 379.25C77.375 382.5 81.25 384 85 384C92.125 384 99 378.875 101 370.375C114.375 314.75 156.25 272.875 208 265.5V233.25C117.125 246.125 85.625 318.5 78.625 335.5C48.75 295.875 32 244.875 32 192S48.75 88.125 78.625 48.5C85.625 65.5 117.125 137.875 208 150.75V118.5C156.25 111.125 114.375 69.25 101 13.625ZM512 160.875C505.25 99.125 476.875 44.25 437.75 4.75C434.625 1.5 430.75 0 427 0C419.875 0 413 5.125 411 13.625C397.625 69.25 355.75 111.125 304 118.5V150.75C394.875 137.875 426.375 65.5 433.375 48.5C455.125 77.375 470 112.25 476.375 149.875L457 169.75L435.375 192L457 214.25L476.375 234.125C470 271.75 455.125 306.625 433.375 335.625C426.375 318.5 394.875 246.125 304 233.25V265.5C355.75 272.875 397.625 314.75 411 370.375C413 378.875 419.875 384 427 384C430.75 384 434.625 382.5 437.75 379.25C476.875 339.75 505.25 284.875 512 223.125L480 192L512 160.875ZM256 32C247.164 32 240 39.164 240 48V496C240 504.836 247.164 512 256 512S272 504.836 272 496V48C272 39.164 264.836 32 256 32Z" })
  }
));
AxeBattleLight.displayName = "AxeBattleLight";
var AxeBattle_default = AxeBattleLight;
