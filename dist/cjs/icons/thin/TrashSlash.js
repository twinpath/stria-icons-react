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
var TrashSlash_exports = {};
__export(TrashSlash_exports, {
  default: () => TrashSlash_default
});
module.exports = __toCommonJS(TrashSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734ZM535.999 80C540.406 80 543.999 76.422 543.999 72S540.406 64 535.999 64H419.382L398.437 22.125C391.624 8.469 377.937 0 362.656 0H277.343C262.062 0 248.374 8.469 241.562 22.109L220.617 64H194.175L214.304 80H535.999ZM255.874 29.25C259.968 21.078 268.187 16 277.343 16H362.656C371.812 16 380.031 21.078 384.124 29.266L401.492 64H238.507L255.874 29.25ZM495.027 135.537L485.513 295.58L500.829 307.756L511.025 136.488C511.298 131.885 507.638 128 503.027 128C498.786 128 495.279 131.305 495.027 135.537ZM437.781 496H202.218C182.531 496 165.531 480.016 164.312 460.406L149.554 212.496L132.706 199.104L148.343 461.375C150.093 489.297 174.249 512 202.218 512H437.781C458.974 512 477.929 498.941 486.667 480.463L473.218 469.771C468.056 484.758 454.13 496 437.781 496Z" })
  }
));
TrashSlashThin.displayName = "TrashSlashThin";
var TrashSlash_default = TrashSlashThin;
