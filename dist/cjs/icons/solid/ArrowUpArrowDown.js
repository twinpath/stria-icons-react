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
var ArrowUpArrowDown_exports = {};
__export(ArrowUpArrowDown_exports, {
  default: () => ArrowUpArrowDown_default
});
module.exports = __toCommonJS(ArrowUpArrowDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpArrowDownSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.377 183.305C31.968 195.766 52.173 193.785 63.595 181.332L96 145.938V447.969C96 465.672 110.328 480 128 480S160 465.672 160 447.969V145.938L192.404 181.332C204.357 194.344 224.607 195.25 237.623 183.305C250.652 171.352 251.527 151.086 239.591 138.039L151.593 41.945C139.468 28.684 116.531 28.684 104.406 41.945L16.408 138.039C4.472 151.086 5.347 171.352 18.377 183.305ZM210.377 328.695C197.347 340.648 196.472 360.914 208.408 373.961L296.406 470.055C308.531 483.312 331.468 483.312 343.593 470.055L431.591 373.961C443.527 360.914 442.652 340.648 429.623 328.695C416.031 316.234 395.826 318.211 384.404 330.664L352 366.062V64.031C352 46.328 337.671 32 320 32S288 46.328 288 64.031V366.063L255.595 330.664C243.642 317.656 223.392 316.75 210.377 328.695Z" })
  }
));
ArrowUpArrowDownSolid.displayName = "ArrowUpArrowDownSolid";
var ArrowUpArrowDown_default = ArrowUpArrowDownSolid;
