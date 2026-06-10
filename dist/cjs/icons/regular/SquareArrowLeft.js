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
var SquareArrowLeft_exports = {};
__export(SquareArrowLeft_exports, {
  default: () => SquareArrowLeft_default
});
module.exports = __toCommonJS(SquareArrowLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328 232.008H181.133L248.344 169.602C258.062 160.539 258.594 145.383 249.594 135.664C240.562 125.977 225.375 125.414 215.656 134.414L103.656 238.414C98.781 242.977 96 249.32 96 256.008S98.781 269.039 103.656 273.602L215.656 377.602C225.375 386.602 240.562 386.039 249.594 376.352C258.594 366.633 258.062 351.477 248.344 342.414L181.133 280.008H328C341.25 280.008 352 269.258 352 256.008S341.25 232.008 328 232.008ZM384 32H64C28.656 32 0 60.656 0 96V416C0 451.344 28.656 480 64 480H384C419.344 480 448 451.344 448 416V96C448 60.656 419.344 32 384 32ZM400 416C400 424.82 392.82 432 384 432H64C55.18 432 48 424.82 48 416V96C48 87.18 55.18 80 64 80H384C392.82 80 400 87.18 400 96V416Z" })
  }
));
SquareArrowLeftRegular.displayName = "SquareArrowLeftRegular";
var SquareArrowLeft_default = SquareArrowLeftRegular;
