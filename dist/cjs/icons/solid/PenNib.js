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
var PenNib_exports = {};
__export(PenNib_exports, {
  default: () => PenNib_default
});
module.exports = __toCommonJS(PenNib_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenNibSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M136.608 138.796C116.236 144.545 99.988 160.043 93.239 180.166L0 460.006L14.748 474.755L164.73 324.648C161.73 318.399 159.98 311.399 159.98 304.025C159.98 277.529 181.478 256.031 207.975 256.031S255.969 277.529 255.969 304.025S234.471 352.02 207.975 352.02C200.601 352.02 193.601 350.27 187.352 347.27L37.245 497.252L51.994 512L331.835 418.761C351.957 412.012 367.455 395.764 373.204 375.392L415.949 224.035L287.965 96.051L136.608 138.796ZM497.939 74.178L437.822 14.061C419.074 -4.687 388.578 -4.687 369.83 14.061L313.337 70.679L441.321 198.663L497.939 142.17C516.687 123.422 516.687 92.926 497.939 74.178Z" })
  }
));
PenNibSolid.displayName = "PenNibSolid";
var PenNib_default = PenNibSolid;
