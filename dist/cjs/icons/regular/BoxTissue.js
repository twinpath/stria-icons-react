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
var BoxTissue_exports = {};
__export(BoxTissue_exports, {
  default: () => BoxTissue_default
});
module.exports = __toCommonJS(BoxTissue_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxTissueRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M133.328 320H378.672C389.109 320 398.359 313.25 401.531 303.312L462.859 111.312C465.188 104 463.906 96.031 459.375 89.844C454.859 83.656 447.656 80 440 80H335.156C316.453 80 299.938 68.344 294.062 50.969C286.203 27.719 264.797 0 207.516 0H72C64.703 0 57.812 3.312 53.25 9C48.703 14.719 46.984 22.156 48.594 29.281L109.922 301.281C112.391 312.219 122.109 320 133.328 320ZM207.516 48C242.391 48 246.734 60.844 248.594 66.344C261.062 103.219 295.844 128 335.156 128H407.141L361.141 272H152.516L102.016 48H207.516ZM460.326 224.438L445.133 272H456C460.406 272 464 275.594 464 280V368H48V280C48 275.594 51.594 272 56 272H70.516L59.693 224H56C25.125 224 0 249.125 0 280V456C0 486.875 25.125 512 56 512H456C486.875 512 512 486.875 512 456V280C512 250.605 489.152 226.689 460.326 224.438ZM464 456C464 460.406 460.406 464 456 464H56C51.594 464 48 460.406 48 456V416H464V456Z" })
  }
));
BoxTissueRegular.displayName = "BoxTissueRegular";
var BoxTissue_default = BoxTissueRegular;
