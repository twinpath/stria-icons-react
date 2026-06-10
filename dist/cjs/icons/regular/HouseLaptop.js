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
var HouseLaptop_exports = {};
__export(HouseLaptop_exports, {
  default: () => HouseLaptop_default
});
module.exports = __toCommonJS(HouseLaptop_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseLaptopRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.999 464.001H591.999V312.005C591.999 289.943 574.062 272.006 551.999 272.006H343.999C321.937 272.006 303.999 289.943 303.999 312.005V464.001H279.999C266.749 464.001 255.999 474.751 255.999 488.001S266.749 512 279.999 512H615.999C629.249 512 639.999 501.25 639.999 488.001S629.249 464.001 615.999 464.001ZM543.999 464.001H351.999V320.005H543.999V464.001ZM207.999 191.998C199.163 191.998 191.999 199.164 191.999 208V272C191.999 280.836 199.163 288 207.999 288H271.999C280.837 288 287.999 280.836 287.999 272V208C287.999 199.164 280.837 191.998 271.999 191.998H207.999ZM271.999 368.002H111.999V169.887L239.999 56.123L367.999 169.887V240.007H415.999V212.55L440.062 233.937C444.624 237.999 450.312 239.999 455.999 239.999C469.192 239.999 479.999 229.291 479.999 216.016C479.999 209.399 477.274 202.81 471.937 198.062L415.999 148.339V55.998C415.999 42.748 405.249 31.996 391.999 31.996S367.999 42.748 367.999 55.998V105.672L255.937 6.059C251.392 2.02 245.696 0 239.999 0S228.606 2.02 224.062 6.059L8.062 198.062C2.725 202.81 0 209.399 0 216.016C0 229.181 10.678 239.995 23.992 239.995C29.679 239.995 35.38 237.987 39.937 233.937L63.999 212.55V368.004C63.999 394.513 85.49 416.002 111.999 416.002H271.999V368.002Z " })
  }
));
HouseLaptopRegular.displayName = "HouseLaptopRegular";
var HouseLaptop_default = HouseLaptopRegular;
