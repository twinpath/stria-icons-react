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
var Kazoo_exports = {};
__export(Kazoo_exports, {
  default: () => Kazoo_default
});
module.exports = __toCommonJS(Kazoo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KazooRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 128H480.625C461.125 118.125 439.375 112 416 112S370.875 118.125 351.375 128H241.512C229.754 128 218.055 129.641 206.75 132.875L23.25 185.375C9.5 189.25 0 201.875 0 216.125V295.875C0 310.125 9.5 322.75 23.25 326.625L206.4 379.025C217.938 382.324 229.877 384 241.875 384H351.375C370.875 393.875 392.625 400 416 400S461.125 393.875 480.625 384H576C611.199 384 640 355.199 640 320V192C640 156.799 611.199 128 576 128ZM296.375 336H241.875C234.5 336 227.125 335 219.875 332.875L48 283.75V228.25L220 179.125C227.125 177 234.5 176 242 176H296.375C264 224.375 264 287.625 296.375 336ZM416 352C363 352 320 309 320 256S363 160 416 160S512 203 512 256S469 352 416 352ZM592 320C592 328.836 584.836 336 576 336H535.625C568.125 287.625 568.125 224.375 535.625 176H576C584.836 176 592 183.162 592 192V320ZM466.156 205.859C458.344 198.047 445.656 198.047 437.844 205.859L416 227.703L394.156 205.859C386.344 198.047 373.656 198.047 365.844 205.859C358.062 213.672 358.062 226.328 365.844 234.141L387.703 256L365.844 277.859C358.062 285.672 358.062 298.328 365.844 306.141C369.75 310.047 374.875 312 380 312S390.25 310.047 394.156 306.141L416 284.297L437.844 306.141C441.75 310.047 446.875 312 452 312S462.25 310.047 466.156 306.141C473.938 298.328 473.938 285.672 466.156 277.859L444.297 256L466.156 234.141C473.938 226.328 473.938 213.672 466.156 205.859Z" })
  }
));
KazooRegular.displayName = "KazooRegular";
var Kazoo_default = KazooRegular;
