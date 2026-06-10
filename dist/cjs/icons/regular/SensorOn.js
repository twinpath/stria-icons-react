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
var SensorOn_exports = {};
__export(SensorOn_exports, {
  default: () => SensorOn_default
});
module.exports = __toCommonJS(SensorOn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorOnRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M616 232H536C522.75 232 512 242.75 512 256C512 269.25 522.75 280 536 280H616C629.25 280 640 269.25 640 256C640 242.75 629.25 232 616 232ZM536 144C540.75 144 545.375 142.625 549.25 140L597.25 108C604.625 103.375 609 95.125 608.5 86.375C608 77.625 602.875 69.875 595 66C587.125 62.25 577.75 63 570.625 68.125L522.625 100.125C513.875 106 510 116.875 513.125 127C516.125 137.125 525.5 144 536 144ZM549.25 372C538.25 364.625 523.375 367.625 516 378.75C508.625 389.75 511.625 404.625 522.75 412L570.75 444C581.75 451.375 596.625 448.375 604 437.25C611.375 426.25 608.375 411.375 597.25 404L549.25 372ZM120 128C106.75 128 96 138.75 96 152V264C96 277.25 106.75 288 120 288S144 277.25 144 264V152C144 138.75 133.25 128 120 128ZM200 128C186.75 128 176 138.75 176 152V264C176 277.25 186.75 288 200 288S224 277.25 224 264V152C224 138.75 213.25 128 200 128ZM384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM400 416C400 424.875 392.875 432 384 432H64C55.125 432 48 424.875 48 416V96C48 87.125 55.125 80 64 80H384C392.875 80 400 87.125 400 96V416Z" })
  }
));
SensorOnRegular.displayName = "SensorOnRegular";
var SensorOn_default = SensorOnRegular;
