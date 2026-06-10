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
var SquareParkingSlash_exports = {};
__export(SquareParkingSlash_exports, {
  default: () => SquareParkingSlash_default
});
module.exports = __toCommonJS(SquareParkingSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareParkingSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M428.009 249.871C430.347 241.586 431.999 233.023 431.999 224C431.999 171.062 388.937 128 335.999 128H274.691L294.82 144H335.999C380.109 144 415.999 179.891 415.999 224C415.999 229.174 415.413 234.207 414.47 239.109L428.009 249.871ZM159.999 464C133.531 464 111.999 442.467 111.999 416V182.645L95.999 169.926V416C95.999 451.346 124.652 480 159.999 480H479.999C481.849 480 483.589 479.609 485.4 479.455L465.956 464H159.999ZM479.999 48C506.468 48 527.999 69.533 527.999 96V329.352L543.999 342.07V96C543.999 60.654 515.343 32 479.999 32H159.999C158.152 32 156.413 32.391 154.605 32.545L174.048 48H479.999ZM223.999 271.672V376C223.999 380.422 227.577 384 231.999 384S239.999 380.422 239.999 376V320H284.798L264.671 304H239.999V284.389L223.999 271.672ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
SquareParkingSlashThin.displayName = "SquareParkingSlashThin";
var SquareParkingSlash_default = SquareParkingSlashThin;
