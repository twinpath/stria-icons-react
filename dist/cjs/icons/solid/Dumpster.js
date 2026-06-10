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
var Dumpster_exports = {};
__export(Dumpster_exports, {
  default: () => Dumpster_default
});
module.exports = __toCommonJS(Dumpster_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DumpsterSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 160C570.375 160 577.999 150.25 575.5 140.125L551.5 44.125C549.75 37 543.25 32 536 32H437.125L462.75 160H560ZM272 32H171.5L145.875 160H272V32ZM404.5 32H304V160H430.125L404.5 32ZM16 160H113.25L138.875 32H40C32.75 32 26.25 37 24.5 44.125L0.5 140.125C-2.001 150.25 5.625 160 16 160ZM560 224H540L544 192H32L36 224H16C7.25 224 0 231.25 0 240V272C0 280.75 7.25 288 16 288H44L64 448V464C64 472.75 71.25 480 80 480H112C120.75 480 128 472.75 128 464V448H448V464C448 472.75 455.25 480 464 480H496C504.75 480 512 472.75 512 464V448L532 288H560C568.75 288 576 280.75 576 272V240C576 231.25 568.75 224 560 224Z" })
  }
));
DumpsterSolid.displayName = "DumpsterSolid";
var Dumpster_default = DumpsterSolid;
