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
var ArrowUpAZ_exports = {};
__export(ArrowUpAZ_exports, {
  default: () => ArrowUpAZ_default
});
module.exports = __toCommonJS(ArrowUpAZ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpAZSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M151.593 41.945C139.468 28.684 116.531 28.684 104.406 41.945L16.408 138.039C4.472 151.086 5.347 171.352 18.377 183.305C31.392 195.25 51.642 194.344 63.595 181.332L96 145.938V447.969C96 465.672 110.328 480 128 480S160 465.672 160 447.969V145.938L192.404 181.332C203.861 193.824 224.074 195.727 237.623 183.305C250.652 171.352 251.527 151.086 239.591 138.039L151.593 41.945ZM448 416H397.25L470.625 342.625C479.781 333.469 482.515 319.719 477.562 307.75S460.937 288 448 288H320C302.328 288 288 302.312 288 320S302.328 352 320 352H370.75L297.375 425.375C288.218 434.531 285.484 448.281 290.437 460.25S307.062 480 320 480H448C465.671 480 480 465.688 480 448S465.671 416 448 416ZM492.613 209.312L412.621 48.359C401.779 26.547 366.22 26.547 355.378 48.359L275.386 209.312C267.48 225.219 273.886 244.551 289.697 252.504C305.57 260.426 324.74 253.98 332.63 238.105L339.785 223.711H428.214L435.369 238.105C441.543 250.531 459.343 261.977 478.302 252.504C494.113 244.551 500.519 225.219 492.613 209.312ZM367.783 167.375L384 134.746L400.216 167.375H367.783Z" })
  }
));
ArrowUpAZSolid.displayName = "ArrowUpAZSolid";
var ArrowUpAZ_default = ArrowUpAZSolid;
