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
const TireFlatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202.135 322.318L140.547 342.324C158.859 381.057 195.883 408.795 240 414.383V349.736C224.154 345.633 210.717 335.758 202.135 322.318ZM192 288C192 272.553 197.695 258.574 206.809 247.518L168.627 194.98C143.764 218.346 128 251.27 128 288C128 296.207 128.941 304.186 130.424 311.967L192.387 291.84C192.309 290.545 192 289.314 192 288ZM256 224C264.287 224 272.15 225.699 279.418 228.566L317.354 176.367C299.053 166.262 278.344 160 256 160S212.947 166.262 194.646 176.367L232.582 228.566C239.85 225.699 247.713 224 256 224ZM476.418 417.826C498.971 379.781 512 335.449 512 288C512 146.625 397.375 32 256 32S0 146.625 0 288C0 335.449 13.029 379.781 35.582 417.826C15.133 423.324 0 441.814 0 464C0 490.51 21.49 512 48 512H464C490.51 512 512 490.51 512 464C512 441.814 496.867 423.324 476.418 417.826ZM256 448C167.635 448 96 376.365 96 288S167.635 128 256 128S416 199.635 416 288S344.365 448 256 448ZM305.191 247.518C314.305 258.574 320 272.553 320 288C320 289.314 319.691 290.545 319.613 291.84L381.576 311.967C383.059 304.186 384 296.207 384 288C384 251.27 368.236 218.346 343.373 194.98L305.191 247.518ZM288 288C288 270.355 273.645 256 256 256S224 270.355 224 288S238.355 320 256 320S288 305.645 288 288ZM272 349.736V414.383C316.117 408.795 353.141 381.057 371.453 342.324L309.865 322.318C301.283 335.758 287.846 345.633 272 349.736Z" })
  }
));
TireFlatSolid.displayName = "TireFlatSolid";
var TireFlat_default = TireFlatSolid;
