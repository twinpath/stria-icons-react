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
var Images_exports = {};
__export(Images_exports, {
  default: () => Images_default
});
module.exports = __toCommonJS(Images_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ImagesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 448H96C60.654 448 32 419.346 32 384V112C32 103.164 24.836 96 16 96S0 103.164 0 112V384C0 437.02 42.98 480 96 480H464C472.836 480 480 472.836 480 464S472.836 448 464 448ZM224 152C237.256 152 248 141.254 248 128S237.256 104 224 104C210.746 104 200 114.746 200 128S210.746 152 224 152ZM410.586 139.91C399.305 124.098 372.088 123.973 360.588 139.879L316.559 201.311L309.59 192.369C298.152 177.904 272.623 177.811 261.186 192.4L198.156 272.75C191.033 281.881 190.002 294.305 195.533 304.312C200.781 313.977 211.062 320 222.375 320H481.582C492.582 320 502.738 314.227 508.111 304.939C508.111 304.908 508.111 304.908 508.143 304.877C513.799 294.994 513.205 283.072 506.549 273.754L410.586 139.91ZM226.188 287.873L284.436 212.26L304.527 237.924C308.875 243.469 322.125 248.578 330.119 237.391L384.555 158.641L477.238 287.873H226.188ZM512 32H160C124.654 32 96 60.654 96 96V320C96 355.346 124.654 384 160 384H512C547.348 384 576 355.346 576 320V96C576 60.654 547.348 32 512 32ZM544 320C544 337.645 529.645 352 512 352H160C142.355 352 128 337.645 128 320V96C128 78.355 142.355 64 160 64H512C529.645 64 544 78.355 544 96V320Z" })
  }
));
ImagesLight.displayName = "ImagesLight";
var Images_default = ImagesLight;
