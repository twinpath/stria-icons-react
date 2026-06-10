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
var CircleArrowRight_exports = {};
__export(CircleArrowRight_exports, {
  default: () => CircleArrowRight_default
});
module.exports = __toCommonJS(CircleArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM406.602 278.648L302.625 382.625C290.125 395.125 269.875 395.125 257.375 382.625S244.875 349.875 257.375 337.375L306.75 288H128C110.312 288 96 273.672 96 256S110.312 224 128 224H306.75L257.375 174.625C244.875 162.125 244.875 141.875 257.375 129.375S290.125 116.875 302.625 129.375L406.602 233.352C414.6 241.336 416 251.102 416 256C416 260.883 414.609 270.656 406.602 278.648Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M406.602 277.607L302.625 381.583C290.125 394.083 269.875 394.083 257.375 381.583S244.875 348.833 257.375 336.333L306.75 286.958H128C110.312 286.958 96 272.63 96 254.958S110.312 222.958 128 222.958H306.75L257.375 173.583C244.875 161.083 244.875 140.833 257.375 128.333S290.125 115.833 302.625 128.333L406.602 232.31C414.6 240.294 416 250.06 416 254.958C416 259.841 414.609 269.615 406.602 277.607Z" })
    ]
  }
));
CircleArrowRightDuotone.displayName = "CircleArrowRightDuotone";
var CircleArrowRight_default = CircleArrowRightDuotone;
