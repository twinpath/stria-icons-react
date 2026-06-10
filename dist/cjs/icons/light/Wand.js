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
var Wand_exports = {};
__export(Wand_exports, {
  default: () => Wand_default
});
module.exports = __toCommonJS(Wand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WandLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.777 8.875C491.34 -2.474 471.716 -3.069 459.67 7.843L186.64 255.873H144.017C135.174 255.873 128.018 263.033 128.018 271.881V308.774L10.494 414.858C3.947 420.798 0.229 428.959 0.01 437.744C-0.209 446.561 3.104 454.878 9.353 461.162L50.788 502.62C56.835 508.655 64.866 512 73.412 512C82.552 512 90.974 508.279 97.176 501.464L376.332 191.841H399.955C408.798 191.841 415.954 184.681 415.954 175.833V147.819L503.855 52.084C503.871 52.084 503.902 52.053 503.918 52.021C515.104 39.703 514.636 20.756 502.777 8.875ZM388.175 130.779C385.456 133.718 383.956 137.595 383.956 141.597V159.825H369.223C364.692 159.825 360.379 161.732 357.348 165.109L73.412 479.984L31.977 438.588L154.72 327.815C158.095 324.782 160.016 320.436 160.016 315.903V287.889H192.811C196.78 287.889 200.623 286.419 203.561 283.73L474.779 36.451L388.175 130.779Z" })
  }
));
WandLight.displayName = "WandLight";
var Wand_default = WandLight;
