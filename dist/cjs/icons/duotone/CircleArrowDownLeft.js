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
var CircleArrowDownLeft_exports = {};
__export(CircleArrowDownLeft_exports, {
  default: () => CircleArrowDownLeft_default
});
module.exports = __toCommonJS(CircleArrowDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleArrowDownLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.422 16 16 123.422 16 256S123.422 496 256 496S496 388.578 496 256S388.578 16 256 16ZM366.625 190.625L245.25 312H312C329.672 312 344 326.312 344 344S329.672 376 312 376H168C150.328 376 136 361.688 136 344V200C136 182.312 150.328 168 168 168S200 182.312 200 200V266.75L321.375 145.375C333.875 132.875 354.125 132.875 366.625 145.375S379.125 178.125 366.625 190.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M366.625 190.625L245.25 312H312C329.672 312 344 326.312 344 344S329.672 376 312 376H168C150.328 376 136 361.688 136 344V200C136 182.312 150.328 168 168 168S200 182.312 200 200V266.75L321.375 145.375C333.875 132.875 354.125 132.875 366.625 145.375S379.125 178.125 366.625 190.625Z" })
    ]
  }
));
CircleArrowDownLeftDuotone.displayName = "CircleArrowDownLeftDuotone";
var CircleArrowDownLeft_default = CircleArrowDownLeftDuotone;
