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
const PodiumStarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 192L77.118 483.184C78.754 499.543 92.52 512 108.96 512H339.04C355.48 512 369.246 499.543 370.882 483.184L400 192H48ZM304.518 326.756L271.518 358.881L279.268 404.381C280.768 412.631 272.143 418.756 264.768 414.881L224.018 393.381L183.268 414.881C176.018 418.756 167.268 412.631 168.768 404.381L176.518 358.881L143.518 326.756C137.643 320.881 140.768 310.756 149.018 309.631L194.643 302.881L215.018 261.506C218.768 254.006 229.268 254.131 232.893 261.506L253.268 302.881L298.893 309.631C307.143 310.756 310.393 320.881 304.518 326.756Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M298.893 309.631L253.268 302.881L232.893 261.506C229.268 254.131 218.768 254.006 215.018 261.506L194.643 302.881L149.018 309.631C140.768 310.756 137.643 320.881 143.518 326.756L176.518 358.881L168.768 404.381C167.268 412.631 176.018 418.756 183.268 414.881L224.018 393.381L264.768 414.881C272.143 418.756 280.768 412.631 279.268 404.381L271.518 358.881L304.518 326.756C310.393 320.881 307.143 310.756 298.893 309.631ZM424 144H127.375C133.75 113.125 158.125 88.75 190.125 82.001C198.75 90.625 210.75 96 224 96L286.197 96C309.41 96 330.699 80.314 335.083 57.519C340.982 26.848 317.613 0 288 0H224C202 0 183.5 15 177.875 35.25C125.875 46.875 86.125 90.25 79.375 144H24C10.745 144 0 154.745 0 168V168C0 181.255 10.745 192 24 192H424C437.255 192 448 181.255 448 168V168C448 154.745 437.255 144 424 144Z" })
    ]
  }
));
PodiumStarDuotone.displayName = "PodiumStarDuotone";
var PodiumStar_default = PodiumStarDuotone;
