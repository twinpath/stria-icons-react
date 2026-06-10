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
var SquareArrowRight_exports = {};
__export(SquareArrowRight_exports, {
  default: () => SquareArrowRight_default
});
module.exports = __toCommonJS(SquareArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareArrowRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416V96C448 60.656 419.346 32 384 32ZM374.602 278.648L270.625 382.625C258.125 395.125 237.875 395.125 225.375 382.625S212.875 349.875 225.375 337.375L274.75 288H96C78.312 288 64 273.672 64 256S78.312 224 96 224H274.75L225.375 174.625C212.875 162.125 212.875 141.875 225.375 129.375S258.125 116.875 270.625 129.375L374.602 233.352C382.6 241.336 384 251.102 384 256C384 260.883 382.609 270.656 374.602 278.648Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.602 277.607L270.625 381.583C258.125 394.083 237.875 394.083 225.375 381.583S212.875 348.833 225.375 336.333L274.75 286.958H96C78.312 286.958 64 272.63 64 254.958S78.312 222.958 96 222.958H274.75L225.375 173.583C212.875 161.083 212.875 140.833 225.375 128.333S258.125 115.833 270.625 128.333L374.602 232.31C382.6 240.294 384 250.06 384 254.958C384 259.841 382.609 269.615 374.602 277.607Z" })
    ]
  }
));
SquareArrowRightDuotone.displayName = "SquareArrowRightDuotone";
var SquareArrowRight_default = SquareArrowRightDuotone;
