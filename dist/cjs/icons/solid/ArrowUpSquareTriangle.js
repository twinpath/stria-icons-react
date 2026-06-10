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
var ArrowUpSquareTriangle_exports = {};
__export(ArrowUpSquareTriangle_exports, {
  default: () => ArrowUpSquareTriangle_default
});
module.exports = __toCommonJS(ArrowUpSquareTriangle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpSquareTriangleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.005 224H448.007C465.681 224 480.007 209.672 480.007 192V64C480.007 46.328 465.681 32 448.007 32H320.005C302.332 32 288.005 46.328 288.005 64V192C288.005 209.672 302.332 224 320.005 224ZM151.593 41.945C139.468 28.684 116.531 28.684 104.406 41.945L16.408 138.039C4.472 151.086 5.347 171.352 18.377 183.305C31.392 195.25 51.642 194.344 63.595 181.332L96 145.938V447.969C96 465.672 110.328 480 128 480S160 465.672 160 447.969V145.938L192.404 181.332C203.826 193.785 224.031 195.766 237.623 183.305C250.652 171.352 251.527 151.086 239.591 138.039L151.593 41.945ZM492.132 438.875L409.005 301.75C397.88 283.375 370.255 283.375 359.13 301.75L275.88 438.875C264.88 457.125 278.63 480 300.88 480H467.13C489.382 480 503.132 457.125 492.132 438.875Z" })
  }
));
ArrowUpSquareTriangleSolid.displayName = "ArrowUpSquareTriangleSolid";
var ArrowUpSquareTriangle_default = ArrowUpSquareTriangleSolid;
