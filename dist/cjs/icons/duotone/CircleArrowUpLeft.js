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
var CircleArrowUpLeft_exports = {};
__export(CircleArrowUpLeft_exports, {
  default: () => CircleArrowUpLeft_default
});
module.exports = __toCommonJS(CircleArrowUpLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowUpLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM366.625 366.625C360.375 372.875 352.188 376 344 376S327.625 372.875 321.375 366.625L200 245.25V312C200 329.688 185.672 344 168 344S136 329.688 136 312V168C136 150.312 150.328 136 168 136H312C329.672 136 344 150.312 344 168S329.672 200 312 200H245.25L366.625 321.375C379.125 333.875 379.125 354.125 366.625 366.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M366.625 366.625C360.375 372.875 352.188 376 344 376S327.625 372.875 321.375 366.625L200 245.25V312C200 329.688 185.672 344 168 344S136 329.688 136 312V168C136 150.312 150.328 136 168 136H312C329.672 136 344 150.312 344 168S329.672 200 312 200H245.25L366.625 321.375C379.125 333.875 379.125 354.125 366.625 366.625Z" })
    ]
  }
));
CircleArrowUpLeftDuotone.displayName = "CircleArrowUpLeftDuotone";
var CircleArrowUpLeft_default = CircleArrowUpLeftDuotone;
