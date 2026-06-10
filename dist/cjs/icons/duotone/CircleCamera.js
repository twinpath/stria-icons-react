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
var CircleCamera_exports = {};
__export(CircleCamera_exports, {
  default: () => CircleCamera_default
});
module.exports = __toCommonJS(CircleCamera_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleCameraDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 320C384 337.672 369.674 352 352 352H160C142.326 352 128 337.672 128 320V192C128 174.326 142.326 160 160 160H196L202.125 143.562C205.625 134.188 214.625 128 224.625 128H287.375C297.375 128 306.312 134.188 309.812 143.562L316 160H352C369.674 160 384 174.326 384 192V320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 160H316L309.812 143.562C306.312 134.188 297.375 128 287.375 128H224.625C214.625 128 205.625 134.188 202.125 143.562L196 160H160C142.326 160 128 174.326 128 192V320C128 337.672 142.326 352 160 352H352C369.674 352 384 337.672 384 320V192C384 174.326 369.674 160 352 160ZM256 304C229.5 304 208 282.5 208 256S229.5 208 256 208S304 229.5 304 256S282.5 304 256 304Z" })
    ]
  }
));
CircleCameraDuotone.displayName = "CircleCameraDuotone";
var CircleCamera_default = CircleCameraDuotone;
