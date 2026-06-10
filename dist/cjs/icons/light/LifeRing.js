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
var LifeRing_exports = {};
__export(LifeRing_exports, {
  default: () => LifeRing_default
});
module.exports = __toCommonJS(LifeRing_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LifeRingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M436.479 413.854C473.434 371.639 496 316.514 496 256S473.434 140.361 436.479 98.146L443.312 91.312C449.562 85.062 449.562 74.937 443.312 68.688S426.937 62.438 420.688 68.688L413.854 75.521C371.639 38.566 316.514 16 256 16S140.361 38.566 98.146 75.521L91.312 68.688C85.062 62.438 74.937 62.438 68.688 68.688S62.438 85.063 68.688 91.312L75.521 98.146C38.566 140.361 16 195.486 16 256S38.566 371.639 75.521 413.854L68.688 420.688C62.438 426.938 62.438 437.063 68.688 443.312C71.812 446.438 75.906 448 80 448S88.188 446.438 91.312 443.312L98.146 436.479C140.361 473.434 195.486 496 256 496S371.639 473.434 413.854 436.479L420.688 443.312C423.812 446.438 427.906 448 432 448S440.188 446.438 443.312 443.312C449.562 437.062 449.562 426.937 443.312 420.688L436.479 413.854ZM464 256C464 307.598 445.004 354.766 413.783 391.158L334.082 311.457C345.266 295.762 352 276.699 352 256S345.266 216.238 334.082 200.543L413.783 120.842C445.004 157.234 464 204.402 464 256ZM192 256C192 220.719 220.703 192 256 192S320 220.719 320 256S291.297 320 256 320S192 291.281 192 256ZM256 48C307.598 48 354.766 66.996 391.158 98.217L311.457 177.918C295.762 166.734 276.699 160 256 160S216.238 166.734 200.543 177.918L120.842 98.217C157.234 66.996 204.402 48 256 48ZM48 256C48 204.402 66.996 157.234 98.217 120.842L177.918 200.543C166.734 216.238 160 235.301 160 256S166.734 295.762 177.918 311.457L98.217 391.158C66.996 354.766 48 307.598 48 256ZM256 464C204.402 464 157.234 445.004 120.842 413.783L200.543 334.082C216.238 345.266 235.301 352 256 352S295.762 345.266 311.457 334.082L391.158 413.783C354.766 445.004 307.598 464 256 464Z" })
  }
));
LifeRingLight.displayName = "LifeRingLight";
var LifeRing_default = LifeRingLight;
