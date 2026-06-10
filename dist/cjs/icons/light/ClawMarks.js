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
var ClawMarks_exports = {};
__export(ClawMarks_exports, {
  default: () => ClawMarks_default
});
module.exports = __toCommonJS(ClawMarks_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClawMarksLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M427.312 404.688C424.312 401.688 420.25 400 416 400H368V352C368 347.75 366.312 343.688 363.312 340.688L267.312 244.688C264.312 241.688 260.25 240 256 240H208V192C208 187.75 206.312 183.688 203.312 180.688L27.312 4.688C24.188 1.562 20.094 0 16 0C7.473 0 0 6.865 0 16C0 20.094 1.562 24.188 4.688 27.312L176 198.625V256C176 264.844 183.156 272 192 272H249.375L336 358.625V416C336 424.844 343.156 432 352 432H409.375L484.688 507.312C487.812 510.438 491.906 512 496 512C504.527 512 512 505.135 512 496C512 491.906 510.438 487.812 507.312 484.688L427.312 404.688ZM240 38.625V96C240 104.844 247.156 112 256 112H313.375L368 166.625V224C368 232.844 375.156 240 384 240H441.375L484.688 283.312C487.812 286.438 491.906 288 496 288C504.527 288 512 281.135 512 272C512 267.906 510.438 263.812 507.312 260.688L459.312 212.688C456.312 209.688 452.25 208 448 208H400V160C400 155.75 398.312 151.688 395.312 148.688L331.312 84.688C328.312 81.688 324.25 80 320 80H272V32C272 27.75 270.312 23.688 267.312 20.688L251.312 4.688C248.188 1.562 244.094 0 240 0C231.473 0 224 6.865 224 16C224 20.094 225.562 24.188 228.688 27.312L240 38.625ZM171.312 372.688C168.312 369.688 164.25 368 160 368H112V320C112 315.75 110.312 311.688 107.312 308.688L27.312 228.688C24.188 225.562 20.094 224 16 224C7.473 224 0 230.865 0 240C0 244.094 1.562 248.188 4.688 251.312L80 326.625V384C80 392.844 87.156 400 96 400H153.375L260.688 507.312C263.812 510.438 267.906 512 272 512C280.527 512 288 505.135 288 496C288 491.906 286.438 487.812 283.312 484.688L171.312 372.688Z " })
  }
));
ClawMarksLight.displayName = "ClawMarksLight";
var ClawMarks_default = ClawMarksLight;
