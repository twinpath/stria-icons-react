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
var TrashCanSlash_exports = {};
__export(TrashCanSlash_exports, {
  default: () => TrashCanSlash_default
});
module.exports = __toCommonJS(TrashCanSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrashCanSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M636.982 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.013 510.266C628.497 511.438 630.247 512 631.997 512C634.341 512 636.685 510.969 638.263 508.984C641.013 505.516 640.435 500.484 636.982 497.734ZM535.999 80C540.406 80 543.999 76.422 543.999 72S540.406 64 535.999 64H419.382L398.437 22.125C391.624 8.469 377.937 0 362.656 0H277.343C262.062 0 248.374 8.469 241.562 22.109L220.617 64H194.177L214.306 80H535.999ZM255.874 29.25C259.968 21.078 268.187 16 277.343 16H362.656C371.812 16 380.031 21.078 384.124 29.266L401.492 64H238.507L255.874 29.25ZM495.999 128V303.914L511.999 316.633V128C511.999 123.578 508.406 120 503.999 120S495.999 123.578 495.999 128ZM439.999 496H199.999C169.124 496 143.999 470.875 143.999 440V208.08L127.999 195.363V440C127.999 479.703 160.312 512 199.999 512H439.999C461.831 512 481.193 502.02 494.409 486.617L481.947 476.709C471.675 488.434 456.773 496 439.999 496ZM231.999 432V278.031L215.999 265.313V432C215.999 436.422 219.593 440 223.999 440S231.999 436.422 231.999 432ZM327.999 432V354.34L311.999 341.621V432C311.999 436.422 315.593 440 319.999 440S327.999 436.422 327.999 432ZM407.999 176V233.965L423.999 246.682V176C423.999 171.578 420.406 168 415.999 168S407.999 171.578 407.999 176Z" })
  }
));
TrashCanSlashThin.displayName = "TrashCanSlashThin";
var TrashCanSlash_default = TrashCanSlashThin;
