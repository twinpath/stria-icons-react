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
var PenPaintbrush_exports = {};
__export(PenPaintbrush_exports, {
  default: () => PenPaintbrush_default
});
module.exports = __toCommonJS(PenPaintbrush_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenPaintbrushSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.035 82.713L60.189 372.52C55.533 377.176 52.425 383.152 51.292 389.638L34.253 487.108C31.72 501.6 44.339 514.213 58.831 511.672L156.361 494.571C162.839 493.436 168.812 490.331 173.462 485.681L463.222 195.913L350.035 82.713ZM531.878 127.243C550.628 108.493 550.628 78.072 531.878 59.323L486.628 14.074C467.847 -4.691 437.441 -4.691 418.66 14.074L372.66 60.073L485.847 173.273L531.878 127.243ZM545.927 448C513.927 448 494.704 426.825 496.954 400.999C499.527 371.51 489.619 341.124 467.244 318.613C452.591 303.855 434.265 294.07 414.327 290.065L292.902 411.493C296.523 431.096 305.064 449.912 320.119 465.08C359.212 504.43 437.681 511.998 492.212 511.998C517.802 511.998 545.927 511.998 545.927 511.998C563.601 511.998 577.927 497.671 577.927 479.999C577.927 462.326 563.601 448 545.927 448ZM234.292 153.185L97.521 16.418C75.646 -5.457 40.208 -5.457 18.333 16.418S-3.542 73.729 18.333 95.603L155.101 232.367L234.292 153.185Z" })
  }
));
PenPaintbrushSolid.displayName = "PenPaintbrushSolid";
var PenPaintbrush_default = PenPaintbrushSolid;
