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
var Dna_exports = {};
__export(Dna_exports, {
  default: () => Dna_default
});
module.exports = __toCommonJS(Dna_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DnaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M292.875 289.5C289.359 286.781 284.344 287.469 281.656 291C278.969 294.5 279.656 299.531 283.156 302.188C304.182 318.24 321.344 335.123 335.484 352H112.988C139.225 320.697 175.781 289.326 227.609 263.125C227.768 263.045 227.9 262.953 228.059 262.873C228.1 262.85 228.141 262.832 228.182 262.805C413.811 168.643 416 9.592 416 8C416 3.594 412.422 0 408.016 0H408C403.594 0 400.016 3.594 400 8C400 8.479 399.68 24.121 393.59 48H54.41C48.32 24.121 48 8.479 48 8C47.984 3.594 44.406 0 40 0H39.984C35.578 0 32 3.594 32 8C32 9.555 34.549 161.197 207.658 256C34.549 350.803 32 502.445 32 504C32 508.406 35.578 512 39.984 512H40C44.406 512 47.984 508.406 48 504C48 503.521 48.32 487.879 54.41 464H393.67C399.73 487.928 400 503.586 400 504C400.016 508.406 403.594 512 408 512H408.016C412.422 512 416 508.406 416 504C416 499.094 414.594 382.406 292.875 289.5ZM388.912 64C381.436 87.068 368.652 115.084 347.545 144H100.455C79.348 115.084 66.564 87.068 59.088 64H388.912ZM112.988 160H335.012C309.424 190.529 273.828 221.057 224 246.857C174.172 221.057 138.576 190.529 112.988 160ZM59.088 448C66.564 424.932 79.348 396.916 100.455 368H347.957C369.014 396.879 381.594 424.918 389.035 448H59.088Z" })
  }
));
DnaThin.displayName = "DnaThin";
var Dna_default = DnaThin;
