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
var CircleWaveformLines_exports = {};
__export(CircleWaveformLines_exports, {
  default: () => CircleWaveformLines_default
});
module.exports = __toCommonJS(CircleWaveformLines_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleWaveformLinesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 192C138.781 192 128 202.781 128 216V296C128 309.219 138.781 320 152 320S176 309.219 176 296V216C176 202.781 165.219 192 152 192ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 448C150.131 448 64 361.869 64 256S150.131 64 256 64S448 150.131 448 256S361.869 448 256 448ZM232 128C218.781 128 208 138.781 208 152V360C208 373.219 218.781 384 232 384S256 373.219 256 360V152C256 138.781 245.219 128 232 128ZM312 176C298.781 176 288 186.781 288 200V312C288 325.219 298.781 336 312 336S336 325.219 336 312V200C336 186.781 325.219 176 312 176ZM392 216C378.781 216 368 226.781 368 240V272C368 285.219 378.781 296 392 296S416 285.219 416 272V240C416 226.781 405.219 216 392 216Z" })
  }
));
CircleWaveformLinesRegular.displayName = "CircleWaveformLinesRegular";
var CircleWaveformLines_default = CircleWaveformLinesRegular;
