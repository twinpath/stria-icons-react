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
var TextHeight_exports = {};
__export(TextHeight_exports, {
  default: () => TextHeight_default
});
module.exports = __toCommonJS(TextHeight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TextHeightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M304 32H16C7.156 32 0 39.156 0 48V144C0 152.844 7.156 160 16 160S32 152.844 32 144V64H144V448H80C71.156 448 64 455.156 64 464S71.156 480 80 480H240C248.844 480 256 472.844 256 464S248.844 448 240 448H176V64H288V144C288 152.844 295.156 160 304 160S320 152.844 320 144V48C320 39.156 312.844 32 304 32ZM548.688 372.688L496 425.375V86.625L548.688 139.312C551.812 142.438 555.906 144 560 144S568.188 142.438 571.312 139.312C577.562 133.062 577.562 122.937 571.312 116.688L491.312 36.688C485.062 30.438 474.937 30.438 468.688 36.688L388.688 116.688C382.438 122.938 382.438 133.063 388.688 139.312S405.063 145.562 411.312 139.312L464 86.625V425.375L411.312 372.687C405.062 366.437 394.937 366.437 388.688 372.687S382.438 389.062 388.688 395.312L468.688 475.312C471.812 478.438 475.906 480 480 480S488.188 478.438 491.312 475.312L571.312 395.312C577.562 389.062 577.562 378.937 571.312 372.688S554.938 366.438 548.688 372.688Z" })
  }
));
TextHeightLight.displayName = "TextHeightLight";
var TextHeight_default = TextHeightLight;
