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
var CircleDollarToSlot_exports = {};
__export(CircleDollarToSlot_exports, {
  default: () => CircleDollarToSlot_default
});
module.exports = __toCommonJS(CircleDollarToSlot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDollarToSlotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 384H424C419.594 384 416 387.594 416 392S419.594 400 424 400H472C485.219 400 496 410.781 496 424V472C496 485.219 485.219 496 472 496H40C26.781 496 16 485.219 16 472V424C16 410.781 26.781 400 40 400H88C92.406 400 96 396.406 96 392S92.406 384 88 384H40C17.938 384 0 401.938 0 424V472C0 494.062 17.938 512 40 512H472C494.062 512 512 494.062 512 472V424C512 401.938 494.062 384 472 384ZM56 448C56 452.406 59.594 456 64 456H448C452.406 456 456 452.406 456 448S452.406 440 448 440H64C59.594 440 56 443.594 56 448ZM256 416C370.875 416 464 322.875 464 208S370.875 0 256 0S48 93.125 48 208S141.125 416 256 416ZM256 16C361.867 16 448 102.131 448 208S361.867 400 256 400S64 313.869 64 208S150.133 16 256 16ZM245.406 213.438L253.938 215.703C292.938 225.922 316.25 234.016 311.313 260C306.688 284.688 272.625 291.141 240.781 286.578C228.125 284.828 213.625 280.047 200.844 275.812L194.469 273.719C190.312 272.375 185.75 274.672 184.406 278.859C183.031 283.062 185.312 287.562 189.531 288.938L195.844 291.016C209.25 295.453 224.5 300.484 238.562 302.422C241.863 302.893 244.834 302.861 248 303.125V336C248 340.422 251.594 344 256 344S264 340.422 264 336V303.828C298.424 302.779 322.334 288.012 327.062 262.969C335.094 220.453 292.344 209.234 257.999 200.219L249.594 198C213.719 188.344 196.312 179.188 200.688 156C205.344 131.312 239.375 124.891 271.188 129.422C279.281 130.578 288.938 132.984 301.594 136.969C305.938 138.312 310.312 135.969 311.625 131.75C312.969 127.547 310.625 123.047 306.406 121.719C292.906 117.453 282.438 114.859 273.438 113.578C270.174 113.113 267.137 113.006 264 112.744V80C264 75.578 260.406 72 256 72S248 75.578 248 80V112.293C213.627 113.379 189.678 128.012 184.938 153.031C177.031 195.031 219.844 206.562 245.406 213.438Z" })
  }
));
CircleDollarToSlotThin.displayName = "CircleDollarToSlotThin";
var CircleDollarToSlot_default = CircleDollarToSlotThin;
