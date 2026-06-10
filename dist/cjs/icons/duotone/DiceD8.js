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
var DiceD8_exports = {};
__export(DiceD8_exports, {
  default: () => DiceD8_default
});
module.exports = __toCommonJS(DiceD8_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD8Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M231.33 0C235.547 0 239.593 3.331 239.593 8.365V332.66L5.461 247.594C1.968 246.32 0 243.031 0 239.679C0 237.604 0.754 235.504 2.367 233.843L225.53 2.521C227.211 0.779 229.29 0 231.33 0ZM512 239.681C512 243.036 510.032 246.332 506.539 247.625L272.407 332.66V8.396C272.407 3.339 276.456 0.001 280.674 0.001C282.712 0.001 284.79 0.78 286.47 2.521L509.633 233.843C511.246 235.504 512 237.604 512 239.681Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M31 304.579C31 300.202 34.501 296.096 39.109 296.096C40.038 296.096 41.011 296.263 42.01 296.627L239.484 368.287V503.605C239.484 508.662 235.435 512 231.217 512C229.179 512 227.101 511.221 225.422 509.48L33.416 310.378C31.729 308.631 31 306.577 31 304.579ZM472.673 296.096C477.281 296.096 480.782 300.202 480.782 304.579C480.782 306.577 480.053 308.631 478.367 310.378L286.361 509.48C284.681 511.221 282.604 512 280.565 512C276.347 512 272.298 508.662 272.298 503.605V368.287L469.773 296.627C470.771 296.263 471.745 296.096 472.673 296.096Z " })
    ]
  }
));
DiceD8Duotone.displayName = "DiceD8Duotone";
var DiceD8_default = DiceD8Duotone;
