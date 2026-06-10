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
var Shapes_exports = {};
__export(Shapes_exports, {
  default: () => Shapes_default
});
module.exports = __toCommonJS(Shapes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShapesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 256C57.25 256 0 313.25 0 384S57.25 512 128 512S256 454.75 256 384S198.75 256 128 256ZM128 464C83.889 464 48 428.111 48 384C48 339.887 83.889 304 128 304C172.113 304 208 339.887 208 384C208 428.111 172.113 464 128 464ZM193.01 224H382.996C408.328 224 424.217 197.312 411.551 175.984L316.557 15.969C310.557 6.125 299.67 0 288.004 0S265.449 6.125 259.449 15.969L164.455 175.984C151.789 197.312 167.678 224 193.01 224ZM288.002 61.896L355.74 176H220.268L288.002 61.896ZM480 272H320C302.375 272 288 286.375 288 304V464C288 481.625 302.375 496 320 496H480C497.625 496 512 481.625 512 464V304C512 286.375 497.625 272 480 272ZM464 448H336V320H464V448Z" })
  }
));
ShapesRegular.displayName = "ShapesRegular";
var Shapes_default = ShapesRegular;
