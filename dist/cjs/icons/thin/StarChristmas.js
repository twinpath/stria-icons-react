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
var StarChristmas_exports = {};
__export(StarChristmas_exports, {
  default: () => StarChristmas_default
});
module.exports = __toCommonJS(StarChristmas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarChristmasThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.562 232.375L322.406 189.594L279.625 18.438C276.844 7.406 267.344 0 256 0S235.156 7.406 232.375 18.469L189.594 189.594L18.438 232.375C7.406 235.156 0 244.656 0 256S7.406 276.844 18.469 279.625L189.594 322.406L232.25 493.562C235.031 504.594 244.531 512 255.875 512S276.719 504.594 279.5 493.531L322.281 322.406L493.563 279.625C504.594 276.844 512 267.344 512 256S504.594 235.156 493.562 232.375ZM489.686 264.102L318.404 306.883L309.088 309.211L306.76 318.525L263.984 489.629C262.996 493.559 259.889 496 255.875 496C251.859 496 248.752 493.566 247.775 489.693L205.119 318.537L202.795 309.215L193.475 306.885L22.371 264.107C18.441 263.119 16 260.014 16 256C16 251.984 18.434 248.877 22.318 247.898L193.475 205.115L202.787 202.787L205.117 193.475L247.893 22.369C248.881 18.441 251.986 16 256 16C260.016 16 263.123 18.432 264.104 22.316L306.885 193.473L309.213 202.787L318.527 205.115L489.652 247.889C493.568 248.877 496 251.984 496 256S493.568 263.123 489.686 264.102ZM146.344 157.656C147.906 159.219 149.938 160 152 160S156.094 159.219 157.656 157.656C160.781 154.531 160.781 149.469 157.656 146.344L77.656 66.344C74.531 63.219 69.469 63.219 66.344 66.344S63.219 74.531 66.344 77.656L146.344 157.656ZM360 160C362.062 160 364.094 159.219 365.656 157.656L445.656 77.656C448.781 74.531 448.781 69.469 445.656 66.344S437.469 63.219 434.344 66.344L354.344 146.344C351.219 149.469 351.219 154.531 354.344 157.656C355.906 159.219 357.938 160 360 160ZM365.656 354.344C362.531 351.219 357.469 351.219 354.344 354.344S351.219 362.531 354.344 365.656L434.344 445.656C435.906 447.219 437.938 448 440 448S444.094 447.219 445.656 445.656C448.781 442.531 448.781 437.469 445.656 434.344L365.656 354.344ZM146.344 354.344L66.344 434.344C63.219 437.469 63.219 442.531 66.344 445.656C67.906 447.219 69.938 448 72 448S76.094 447.219 77.656 445.656L157.656 365.656C160.781 362.531 160.781 357.469 157.656 354.344S149.469 351.219 146.344 354.344Z" })
  }
));
StarChristmasThin.displayName = "StarChristmasThin";
var StarChristmas_default = StarChristmasThin;
