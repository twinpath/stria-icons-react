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
var ChartArea_exports = {};
__export(ChartArea_exports, {
  default: () => ChartArea_default
});
module.exports = __toCommonJS(ChartArea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartAreaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 448H80C53.531 448 32 426.469 32 400V48C32 39.156 24.844 32 16 32S0 39.156 0 48V400C0 444.125 35.875 480 80 480H496C504.844 480 512 472.844 512 464S504.844 448 496 448ZM144 384H432C458.469 384 480 362.469 480 336V253.25C480 240.625 474.875 228.25 465.938 219.312L379.313 132.688C373.063 126.438 362.938 126.438 356.688 132.688L305.078 184.312L236.297 101.75C233.297 98.156 228.875 96.062 224.188 96C219.75 94.562 215.047 97.938 211.953 101.469L107.875 220.406C100.219 229.156 96 240.406 96 252.031V336C96 362.469 117.531 384 144 384ZM128 252.031C128 248.156 129.406 244.406 131.969 241.469L223.703 136.625L291.703 218.25C294.594 221.688 298.781 223.781 303.281 223.969C307.781 224.437 312.156 222.469 315.312 219.312L368 166.625L443.312 241.937C446.297 244.906 448 249.031 448 253.25V336C448 344.812 440.828 352 432 352H144C135.172 352 128 344.812 128 336V252.031Z" })
  }
));
ChartAreaLight.displayName = "ChartAreaLight";
var ChartArea_default = ChartAreaLight;
