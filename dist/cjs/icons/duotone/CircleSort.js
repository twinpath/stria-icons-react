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
var CircleSort_exports = {};
__export(CircleSort_exports, {
  default: () => CircleSort_default
});
module.exports = __toCommonJS(CircleSort_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleSortDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.42 16 16 123.42 16 256S123.42 496 256 496C388.582 496 496 388.58 496 256S388.582 16 256 16ZM360.625 319.375L269.125 410.625C265.625 414 260.875 416 256 416S246.5 414 243 410.625L151.375 319.375C139.875 307.875 148 288 164.5 288H347.5C364 288 372.125 307.875 360.625 319.375ZM347.5 224H164.5C148 224 139.875 204.125 151.375 192.625L243 101.375C246.5 98 251.125 96 256 96S265.625 98 269.125 101.375L360.625 192.625C372.125 204.125 364 224 347.5 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M164.505 224H347.505C364.005 224 372.13 204.125 360.63 192.625L269.13 101.375C265.63 98 260.88 96 256.005 96S246.505 98 243.005 101.375L151.38 192.625C139.88 204.125 148.005 224 164.505 224ZM347.505 288H164.505C148.005 288 139.88 307.875 151.38 319.375L243.005 410.625C246.505 414 251.13 416 256.005 416S265.63 414 269.13 410.625L360.63 319.375C372.13 307.875 364.005 288 347.505 288Z" })
    ]
  }
));
CircleSortDuotone.displayName = "CircleSortDuotone";
var CircleSort_default = CircleSortDuotone;
