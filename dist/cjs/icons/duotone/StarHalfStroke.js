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
var StarHalfStroke_exports = {};
__export(StarHalfStroke_exports, {
  default: () => StarHalfStroke_default
});
module.exports = __toCommonJS(StarHalfStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarHalfStrokeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M546.283 226.115L440.371 329.104L465.416 474.588C468.982 495.395 452.379 512 433.771 512C428.852 512 423.791 510.84 418.926 508.287L288 439.592V385.385L310.303 397.086L412.609 450.768L393.066 337.248L388.775 312.322L406.908 294.691L489.521 214.357L375.26 197.732L350.311 194.104L339.141 171.5L288 68.025V0.047C299.443 0.072 310.879 6.033 316.74 17.842L382.172 150.232L528.531 171.527C554.799 175.324 565.318 207.617 546.283 226.115Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.999 439.555L157.073 508.25C152.196 510.828 147.122 512 142.19 512C123.599 512 107.018 495.344 110.583 474.551L135.628 329.066L29.718 226.078C10.682 207.58 21.202 175.287 47.468 171.49L193.827 150.195L259.259 17.805C265.141 5.898 276.532 0 287.927 0C287.95 0 287.975 0.01 287.999 0.01V439.555Z" })
    ]
  }
));
StarHalfStrokeDuotone.displayName = "StarHalfStrokeDuotone";
var StarHalfStroke_default = StarHalfStrokeDuotone;
