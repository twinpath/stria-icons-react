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
var PodiumStar_exports = {};
__export(PodiumStar_exports, {
  default: () => PodiumStar_default
});
module.exports = __toCommonJS(PodiumStar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PodiumStarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 168V168C448 181.255 437.255 192 424 192H24C10.745 192 0 181.255 0 168V168C0 154.745 10.745 144 24 144H79.375C86.125 90.25 125.875 46.875 177.875 35.25C183.5 15 202 0 224 0L286.197 0C309.41 0 330.699 15.686 335.083 38.481C340.982 69.152 317.613 96 288 96H224C210.75 96 198.75 90.625 190.125 82.001C158.125 88.75 133.75 113.125 127.375 144H424C437.255 144 448 154.745 448 168ZM48 224H400L371.163 483.534C369.362 499.74 355.664 512 339.359 512H108.641C92.336 512 78.638 499.74 76.837 483.534L48 224ZM143.518 358.756L176.518 390.881L168.768 436.381C167.268 444.631 176.018 450.756 183.268 446.881L224.018 425.381L264.768 446.881C272.143 450.756 280.768 444.631 279.268 436.381L271.518 390.881L304.518 358.756C310.393 352.881 307.143 342.756 298.893 341.631L253.268 334.881L232.893 293.506C229.268 286.131 218.768 286.006 215.018 293.506L194.643 334.881L149.018 341.631C140.768 342.756 137.643 352.881 143.518 358.756Z" })
  }
));
PodiumStarSolid.displayName = "PodiumStarSolid";
var PodiumStar_default = PodiumStarSolid;
