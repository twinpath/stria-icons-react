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
var CompassDrafting_exports = {};
__export(CompassDrafting_exports, {
  default: () => CompassDrafting_default
});
module.exports = __toCommonJS(CompassDrafting_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CompassDraftingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.904 228.031C489.138 224.219 487.841 219.313 484.029 217.094C480.216 214.812 475.31 216.125 473.091 219.969C428.389 296.469 345.202 344 256 344C210.014 344 165.747 331.178 127.406 308.455L231.688 123.438C231.737 123.352 231.676 123.252 231.721 123.166C239.215 126.244 247.397 128 256 128S272.785 126.244 280.279 123.166C280.324 123.252 280.263 123.352 280.312 123.438L360.764 266.156C362.233 268.75 364.952 270.219 367.733 270.219C369.077 270.219 370.421 269.875 371.655 269.187C375.514 267.031 376.874 262.125 374.702 258.281L294.25 115.562C294.175 115.432 293.999 115.432 293.919 115.307C309.662 103.646 319.999 85.094 319.999 64C319.999 28.654 291.347 0 256 0C220.655 0 192.001 28.654 192.001 64C192.001 85.094 202.338 103.646 218.081 115.307C218 115.432 217.825 115.432 217.75 115.562L114.011 299.619C83.83 279.039 57.797 252.295 38.909 219.969C36.69 216.125 31.768 214.812 27.971 217.094C24.159 219.312 22.862 224.219 25.096 228.031C45.436 262.844 73.553 291.563 106.156 313.553L1.034 500.063C-1.138 503.906 0.222 508.813 4.081 510.969C5.315 511.656 6.659 512 8.003 512C10.784 512 13.503 510.531 14.971 507.938L119.55 322.391C160.257 346.445 207.227 360 256 360C350.858 360 439.342 309.438 486.904 228.031ZM208.001 64C208.001 37.533 229.534 16 256 16S303.999 37.533 303.999 64S282.466 112 256 112S208.001 90.467 208.001 64ZM510.966 500.062L429.686 355.844C427.498 352 422.576 350.656 418.795 352.812C414.936 354.969 413.576 359.875 415.748 363.719L497.029 507.937C498.497 510.531 501.216 512 503.997 512C505.341 512 506.685 511.656 507.919 510.969C511.778 508.812 513.138 503.906 510.966 500.062Z" })
  }
));
CompassDraftingThin.displayName = "CompassDraftingThin";
var CompassDrafting_default = CompassDraftingThin;
