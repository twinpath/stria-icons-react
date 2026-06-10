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
const ArrowUpArrowDownDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M210.377 328.695C197.347 340.648 196.472 360.914 208.408 373.961L296.406 470.055C308.531 483.312 331.468 483.312 343.593 470.055L431.591 373.961C443.527 360.914 442.652 340.648 429.623 328.695C416.031 316.234 395.826 318.211 384.404 330.664L352 366.062V64.031C352 46.328 337.671 32 320 32S288 46.328 288 64.031V366.063L255.595 330.664C243.642 317.656 223.392 316.75 210.377 328.695Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16.408 138.039L104.406 41.945C116.531 28.684 139.468 28.684 151.593 41.945L239.591 138.039C251.527 151.086 250.652 171.352 237.623 183.305C224.607 195.25 204.357 194.344 192.404 181.332L160 145.938V447.969C160 465.672 145.671 480 128 480S96 465.672 96 447.969V145.938L63.595 181.332C52.173 193.785 31.968 195.766 18.377 183.305C5.347 171.352 4.472 151.086 16.408 138.039Z" })
    ]
  }
));
ArrowUpArrowDownDuotone.displayName = "ArrowUpArrowDownDuotone";
var ArrowUpArrowDown_default = ArrowUpArrowDownDuotone;
