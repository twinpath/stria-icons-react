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
var FootballHelmet_exports = {};
__export(FootballHelmet_exports, {
  default: () => FootballHelmet_default
});
module.exports = __toCommonJS(FootballHelmet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FootballHelmetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 320H344.656L330.637 245.258L477.086 226.195C485.609 225.008 491.762 217.18 490.926 208.82C459.422 61.703 332.547 16 256 16C123.453 16 16 123.453 16 256C16 312.09 35.406 363.527 67.68 404.363C73.621 411.883 82.984 415.945 92.57 415.945H119.961L205.711 460.945C215.008 465.617 225.039 467.891 235.004 467.891C251.969 467.891 268.734 461.297 281.336 448.695C317.551 412.48 292.266 366.797 286.359 352L279.953 336H331.375L343 398.094C353.656 454.812 403.25 496 460.937 496H472C494.062 496 512 478.062 512 456V360C512 337.938 494.062 320 472 320ZM270.023 437.383C260.664 446.738 248.227 451.891 235.004 451.891C227.367 451.891 219.723 450.078 213.145 446.777L123.902 399.945H92.57C87.566 399.945 82.957 397.887 80.234 394.441C48.68 354.516 32 306.645 32 256C32 132.484 132.484 32 256 32C322.828 32 443.785 69.617 474.883 210.348L286.816 234.824C272.008 236.707 259.16 245.188 251.57 258.09C243.988 270.973 242.82 286.297 248.359 300.145C248.359 300.145 272.887 361.25 273.789 363.312C284.879 388.734 292.102 415.301 270.023 437.383ZM273.547 320L263.211 294.195C255.461 274.82 268.211 253.32 288.836 250.695L314.727 247.328L328.375 320H273.547ZM496 456C496 469.219 485.219 480 472 480H460.937C412.641 480 371.203 446.57 360.109 400H496V456ZM496 384H356.656L347.656 336H472C485.219 336 496 346.781 496 360V384ZM176 304C158.355 304 144 318.355 144 336S158.355 368 176 368S208 353.645 208 336S193.645 304 176 304ZM176 352C167.164 352 160 344.836 160 336S167.164 320 176 320S192 327.164 192 336S184.836 352 176 352Z" })
  }
));
FootballHelmetThin.displayName = "FootballHelmetThin";
var FootballHelmet_default = FootballHelmetThin;
