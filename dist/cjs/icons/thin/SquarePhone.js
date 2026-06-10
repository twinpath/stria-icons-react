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
var SquarePhone_exports = {};
__export(SquarePhone_exports, {
  default: () => SquarePhone_default
});
module.exports = __toCommonJS(SquarePhone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquarePhoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM432 416C432 442.467 410.467 464 384 464H64C37.533 464 16 442.467 16 416V96C16 69.533 37.533 48 64 48H384C410.467 48 432 69.533 432 96V416ZM345.703 296.266L291.469 273.031C281.813 268.859 270.422 271.609 263.875 279.797L245.938 301.688C217.422 286.297 193.734 262.625 178.344 234.109L200.25 216.172C208.328 209.562 211.125 198.234 207.031 188.594L183.734 134.266C179.141 123.766 167.672 118.125 156.688 120.609L106.328 132.234C95.531 134.688 88 144.156 88 155.25C88 285.797 194.203 392 324.734 392C335.828 392 345.297 384.469 347.781 373.688L359.406 323.297C361.969 312.172 356.219 300.812 345.703 296.266ZM332.188 370.094C331.391 373.578 328.328 376 324.734 376C203.016 376 104 276.969 104 155.25C104 151.672 106.422 148.625 109.906 147.828L160.297 136.203C160.859 136.062 161.438 136 162 136C165 136 167.812 137.781 169.047 140.625L192.312 194.875C193.625 197.984 192.734 201.641 190.125 203.781L158.281 229.844L161.078 235.547C178.797 271.609 208.422 301.234 244.5 318.953L250.203 321.75L276.297 289.875C278.406 287.25 282.031 286.391 285.141 287.734L339.375 310.969C342.781 312.437 344.641 316.109 343.813 319.703L332.188 370.094Z" })
  }
));
SquarePhoneThin.displayName = "SquarePhoneThin";
var SquarePhone_default = SquarePhoneThin;
