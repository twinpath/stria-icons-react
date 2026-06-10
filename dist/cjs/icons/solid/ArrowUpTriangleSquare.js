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
var ArrowUpTriangleSquare_exports = {};
__export(ArrowUpTriangleSquare_exports, {
  default: () => ArrowUpTriangleSquare_default
});
module.exports = __toCommonJS(ArrowUpTriangleSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpTriangleSquareSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M151.593 41.945C139.468 28.684 116.531 28.684 104.406 41.945L16.408 138.039C4.472 151.086 5.347 171.352 18.377 183.305C31.392 195.25 51.642 194.344 63.595 181.332L96 145.938V447.969C96 465.672 110.328 480 128 480S160 465.672 160 447.969V145.938L192.404 181.332C203.826 193.785 224.031 195.766 237.623 183.305C250.652 171.352 251.527 151.086 239.591 138.039L151.593 41.945ZM448.007 288.016H320.005C302.332 288.016 288.005 302.344 288.005 320.016V448C288.005 465.672 302.332 480 320.005 480H448.007C465.681 480 480.007 465.672 480.007 448V320.016C480.007 302.344 465.681 288.016 448.007 288.016ZM492.132 182.895L409.005 45.781C397.88 27.406 370.255 27.406 359.13 45.781L275.88 182.895C264.88 201.145 278.63 224.016 300.88 224.016H467.13C489.382 224.016 503.132 201.145 492.132 182.895Z" })
  }
));
ArrowUpTriangleSquareSolid.displayName = "ArrowUpTriangleSquareSolid";
var ArrowUpTriangleSquare_default = ArrowUpTriangleSquareSolid;
