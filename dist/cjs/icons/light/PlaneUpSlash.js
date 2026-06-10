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
var PlaneUpSlash_exports = {};
__export(PlaneUpSlash_exports, {
  default: () => PlaneUpSlash_default
});
module.exports = __toCommonJS(PlaneUpSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpSlashLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M633.908 483.438L25.904 3.42C18.998 -2.033 8.935 -0.83 3.435 6.061C-2.033 12.998 -0.846 23.062 6.092 28.547L614.096 508.563C617.033 510.875 620.533 512 624.002 512C628.721 512 633.408 509.906 636.564 505.922C642.033 498.984 640.846 488.922 633.908 483.438ZM272 111.998C272 80.404 297.75 31.998 320 31.998S368 80.404 368 111.998V171.137L544 281.275L544.303 351.529L566.201 368.818C572.098 362.869 576 355.34 576 346.789V281.275C576 269.822 569.812 259.182 560.422 253.838L400 153.418V111.998C400 73.545 368.844 0 320 0C271.412 0 240.383 72.723 240.06 111.336L272 136.551V111.998ZM432.594 480.146L320 447.334L208 480.006V439.99L272 392.008V299.629L264.467 293.682L96 346.789V281.275L181.209 227.951L154.541 206.898L80.078 253.494C70.609 258.947 64 270.369 64 281.275V346.789C64 356.93 68.641 366.258 76.75 372.352C84.844 378.445 95.078 380.336 105.203 377.43L240 334.93V376.008L188.797 414.414C180.781 420.43 176 429.99 176 440.006V480.006C176 489.928 180.484 499.115 188.312 505.225C196.125 511.318 206.141 513.443 216.344 510.865L320 480.678L424.234 511.021C433.859 513.443 443.875 511.318 451.687 505.225C459.516 499.115 464 489.928 464 480.006V451.209L432.094 426.02L432.594 480.146Z" })
  }
));
PlaneUpSlashLight.displayName = "PlaneUpSlashLight";
var PlaneUpSlash_default = PlaneUpSlashLight;
