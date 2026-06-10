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
var ArrowUpBigSmall_exports = {};
__export(ArrowUpBigSmall_exports, {
  default: () => ArrowUpBigSmall_default
});
module.exports = __toCommonJS(ArrowUpBigSmall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpBigSmallSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H320C302.4 320 288 334.398 288 352V448C288 465.602 302.4 480 320 480H416C433.599 480 448 465.602 448 448V352C448 334.398 433.599 320 416 320ZM480 32H320C302.326 32 288 46.328 288 64V224C288 241.672 302.326 256 320 256H480C497.673 256 512 241.672 512 224V64C512 46.328 497.673 32 480 32ZM151.593 41.945C139.468 28.684 116.531 28.684 104.406 41.945L16.408 138.039C4.472 151.086 5.347 171.352 18.377 183.305C31.392 195.25 51.642 194.344 63.595 181.332L96 145.938V447.969C96 465.672 110.328 480 128 480S160 465.672 160 447.969V145.938L192.404 181.332C198.716 188.215 207.341 191.719 216.013 191.719C223.732 191.719 231.482 188.934 237.623 183.305C250.652 171.352 251.527 151.086 239.591 138.039L151.593 41.945Z" })
  }
));
ArrowUpBigSmallSolid.displayName = "ArrowUpBigSmallSolid";
var ArrowUpBigSmall_default = ArrowUpBigSmallSolid;
