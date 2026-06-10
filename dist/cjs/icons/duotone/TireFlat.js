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
var TireFlat_exports = {};
__export(TireFlat_exports, {
  default: () => TireFlat_default
});
module.exports = __toCommonJS(TireFlat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TireFlatDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 128C167.635 128 96 199.635 96 288S167.635 448 256 448S416 376.365 416 288S344.365 128 256 128ZM256 160C278.344 160 299.053 166.262 317.354 176.367L279.418 228.566C272.15 225.699 264.287 224 256 224S239.85 225.699 232.582 228.566L194.646 176.367C212.947 166.262 233.656 160 256 160ZM128 288C128 251.27 143.764 218.346 168.627 194.98L206.809 247.518C197.695 258.574 192 272.553 192 288C192 289.314 192.309 290.545 192.387 291.84L130.424 311.967C128.941 304.186 128 296.207 128 288ZM240 414.383C195.883 408.795 158.859 381.057 140.547 342.324L202.135 322.318C210.717 335.758 224.154 345.633 240 349.736V414.383ZM224 288C224 270.355 238.355 256 256 256S288 270.355 288 288S273.645 320 256 320S224 305.645 224 288ZM272 414.383V349.736C287.846 345.633 301.283 335.758 309.865 322.318L371.453 342.324C353.141 381.057 316.117 408.795 272 414.383ZM319.613 291.84C319.691 290.545 320 289.314 320 288C320 272.553 314.305 258.574 305.191 247.518L343.373 194.98C368.236 218.346 384 251.27 384 288C384 296.207 383.059 304.186 381.576 311.967L319.613 291.84Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.418 417.826C498.971 379.781 512 335.449 512 288C512 146.625 397.375 32 256 32S0 146.625 0 288C0 335.449 13.029 379.781 35.582 417.826C15.133 423.324 0 441.814 0 464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464C512 441.814 496.867 423.324 476.418 417.826ZM256 448C167.635 448 96 376.365 96 288S167.635 128 256 128S416 199.635 416 288S344.365 448 256 448ZM256 256C238.355 256 224 270.355 224 288S238.355 320 256 320S288 305.645 288 288S273.645 256 256 256Z" })
    ]
  }
));
TireFlatDuotone.displayName = "TireFlatDuotone";
var TireFlat_default = TireFlatDuotone;
