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
var VanShuttle_exports = {};
__export(VanShuttle_exports, {
  default: () => VanShuttle_default
});
module.exports = __toCommonJS(VanShuttle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VanShuttleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M625.164 206.172L499.189 55.023C487.029 40.436 469.018 32 450.025 32H64C28.801 32 0 60.799 0 96V320C0 355.199 28.801 384 64 384C64 437.02 106.98 480 160 480S256 437.02 256 384H384C384 437.02 426.98 480 480 480S576 437.02 576 384C611.199 384 640 355.199 640 320V247.146C640 232.172 634.75 217.674 625.164 206.172ZM462.314 85.756L555.652 192H376V80H450.023C454.771 80 459.275 82.109 462.314 85.756ZM328 192H216V80H328V192ZM64 80H168V192H48V96C48 87.162 55.164 80 64 80ZM160 432C133.533 432 112 410.467 112 384S133.533 336 160 336S208 357.533 208 384S186.467 432 160 432ZM480 432C453.533 432 432 410.467 432 384S453.533 336 480 336S528 357.533 528 384S506.467 432 480 432ZM576 336H562.686C546.055 307.426 515.443 288 480 288S413.945 307.426 397.314 336H242.686C226.055 307.426 195.443 288 160 288S93.945 307.426 77.314 336H64C55.164 336 48 328.836 48 320V240H592V320C592 328.836 584.836 336 576 336Z" })
  }
));
VanShuttleRegular.displayName = "VanShuttleRegular";
var VanShuttle_default = VanShuttleRegular;
