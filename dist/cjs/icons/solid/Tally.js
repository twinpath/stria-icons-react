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
var Tally_exports = {};
__export(Tally_exports, {
  default: () => Tally_default
});
module.exports = __toCommonJS(Tally_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TallySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M617.871 190.448L543.969 217.125V448.003C543.969 465.675 529.644 480 511.972 480H511.972C494.302 480 479.978 465.676 479.978 448.006V237.875L415.987 258.625V448.003C415.987 465.675 401.661 480 383.99 480H383.99C366.32 480 351.996 465.676 351.996 448.006V279.25L288.004 300V448.003C288.004 465.675 273.679 480 256.008 480H256.008C238.338 480 224.013 465.676 224.013 448.006V320.75L160.022 341.375V448.003C160.022 465.675 145.697 480 128.026 480H128.025C110.355 480 96.031 465.676 96.031 448.006V362.125L41.86 378.353C25.131 383.78 7.012 374.53 1.596 357.798L1.562 357.695C-3.875 340.901 5.334 322.879 22.129 317.445L96.031 294.875V63.997C96.031 46.325 110.356 32 128.028 32H128.028C145.698 32 160.022 46.324 160.022 63.994V274.125L224.013 253.375V63.997C224.013 46.325 238.339 32 256.01 32H256.01C273.68 32 288.004 46.324 288.004 63.994V232.75L351.996 212V63.997C351.996 46.325 366.321 32 383.992 32H383.992C401.662 32 415.987 46.324 415.987 63.994V191.25L479.978 170.625V63.997C479.978 46.325 494.303 32 511.974 32H511.975C529.645 32 543.969 46.324 543.969 63.994V149.875L598.037 129.574C614.889 124.106 632.981 133.342 638.438 150.198V150.198C643.875 166.992 634.666 185.014 617.871 190.448Z" })
  }
));
TallySolid.displayName = "TallySolid";
var Tally_default = TallySolid;
