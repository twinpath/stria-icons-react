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
var PenSlash_exports = {};
__export(PenSlash_exports, {
  default: () => PenSlash_default
});
module.exports = __toCommonJS(PenSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenSlashThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M373.646 96.957L479.034 202.354L429.962 251.422L442.568 261.441L561.937 142.084C580.687 123.316 580.687 92.91 561.937 74.158L501.847 14.062C492.472 4.688 480.175 0 467.88 0C455.583 0 443.286 4.688 433.911 14.062L299.925 148.057L312.531 158.076L373.646 96.957ZM445.224 25.375C451.271 19.33 459.318 16 467.88 16C476.441 16 484.488 19.33 490.534 25.375L550.626 85.471C563.105 97.957 563.105 118.277 550.626 130.768L490.347 191.041L384.962 85.645L445.224 25.375ZM211.72 469.645L80.007 495.99L106.349 364.27L210.038 260.574L197.433 250.553L95.036 352.955C92.804 355.189 91.281 358.033 90.663 361.131L64.32 492.852C62.292 502.967 70.159 512 79.949 512C80.995 512 82.066 511.896 83.148 511.68L214.857 485.334C217.954 484.715 220.796 483.193 223.031 480.961L340.068 363.934L327.462 353.912L211.72 469.645ZM636.98 497.734L12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.673 0 3.335 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.019 14.262L627.011 510.266C628.495 511.438 630.245 512 631.995 512C634.339 512 636.683 510.969 638.261 508.984C641.011 505.516 640.433 500.484 636.98 497.734Z" })
  }
));
PenSlashThin.displayName = "PenSlashThin";
var PenSlash_default = PenSlashThin;
