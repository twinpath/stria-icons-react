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
var Vest_exports = {};
__export(Vest_exports, {
  default: () => Vest_default
});
module.exports = __toCommonJS(Vest_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VestDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M306.688 4.031L281.688 20.688C246.656 44.063 201.406 44.063 166.312 20.688L141.312 4.031C137.375 1.406 132.75 0 128 0L150.186 66.559C173.205 79.428 198.537 86.25 224 86.25S274.795 79.426 297.814 66.559L320 0C315.25 0 310.625 1.406 306.688 4.031ZM108.688 348.688L60.688 396.688C54.438 402.938 54.438 413.063 60.688 419.312C63.812 422.438 67.906 424 72 424S80.188 422.438 83.312 419.312L131.312 371.312C137.562 365.062 137.562 354.937 131.312 348.688S114.938 342.438 108.688 348.688ZM387.312 396.688L339.312 348.688C333.062 342.438 322.937 342.438 316.688 348.688S310.438 365.063 316.688 371.312L364.688 419.312C367.812 422.438 371.906 424 376 424S384.188 422.438 387.312 419.312C393.562 413.062 393.562 402.938 387.312 396.688Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M437.252 239.877L384 160V32C384 14.326 369.674 0 352 0H320L224 288V512H416C433.674 512 448 497.672 448 480V275.377C448 262.742 444.26 250.389 437.252 239.877ZM387.312 419.312C384.188 422.438 380.094 424 376 424S367.812 422.438 364.688 419.312L316.688 371.312C310.438 365.062 310.438 354.937 316.688 348.688S333.063 342.438 339.312 348.688L387.312 396.688C393.562 402.938 393.562 413.062 387.312 419.312ZM96 0C78.326 0 64 14.326 64 32V160L10.748 239.877C3.74 250.389 0 262.742 0 275.377V480C0 497.672 14.326 512 32 512H192V282.807L193.643 277.881L207.135 237.404L128 0H96ZM131.312 371.312L83.312 419.312C80.188 422.438 76.094 424 72 424S63.812 422.438 60.688 419.312C54.438 413.062 54.438 402.937 60.688 396.688L108.688 348.688C114.938 342.438 125.063 342.438 131.312 348.688S137.562 365.062 131.312 371.312Z" })
    ]
  }
));
VestDuotone.displayName = "VestDuotone";
var Vest_default = VestDuotone;
